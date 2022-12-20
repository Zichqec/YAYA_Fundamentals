# Module 04 - Functions

## Lesson 01 - SHIORI Events vs Functions

[Next lesson >>](../module_04_functions/02_thinking_with_functions.md)

[<< Previous Lesson](../module_04_functions/00_parameters.md)

The other way to pass information is through **references**. references are technically not an inbuilt YAYA thing, and instead are something sent by the baseware (usually SSP). If you are using one of the YAYA libraries (and you almost certainly will be, we'll cover what this means later), then they will handle the references for you.

references are sent by **SHIORI events**, and the code in the YAYA system dic files will break down the references and put them into global variables. It will also clean them up afterwards, so they function almost like a local variable, except with the scope of a global variable until they are automatically erased.

How the references are generated will vary depending on the options you set in your config file. By default, it will generate an array called `reference`. Much like the `_argv` array, you can access different references by retrieving different elements of the array. So if there are 3 references, you can access them with `reference[0]`, `reference[1]`, and `reference[2]`.

However, there is also an additional setting you can turn on that will generate a variable for each element of the array. So if there are 3 references, it will generate `reference0`, `reference1`, and `reference2`. This is turned on by default in ghosts, but not always in other applications (such as plugins). So, be aware of it.

These references are created any time a SHIORI event is generated that has reference information. This may be from the baseware's built in events, or it could be from a user-generated SHIORI event.

This is the key difference between functions whose names begin with `On`, and those that do not. A function name that begins with `On` may be called as a SHIORI event, and thus have references passed along with it. There are a few ways to do this, all done through Sakura Script.

(Sidenote: this guide has primarily used function names that begin with On, because they are called as SHIORI events in the companion ghost!)

```
"\![raise,OnSomeFunction,reference0,reference1,etc...]" //Generates a SHIORI event as soon as the script reaches this tag

"\q[A Menu Choice,OnSomeFunction,reference0,reference1,etc...]" //Generates a SHIORI event when this menu option is clicked

"\_a[OnSomeFunction,reference0,reference1,etc...]An anchor\_a" //Generates a SHIORI event when this anchor text is clicked

"\![open,inputbox,OnSomeFunction,--reference=reference2,--reference=reference3,--reference=etc...]" //Generates a SHIORI event when the user clicks "OK" (or presses enter) on the input box
```

The above is a non-exhaustive list of tags that may generate SHIORI events. They may also be called by property commands, embed tags, and more. Anywhere that you see Ukadoc/other documentation indicate an arbitrary function name beginning with `On`, it is going to generate a SHIORI event, and you can usually pass along additional information as references.

For the menu choices, anchor, and input box, as long as you start the name of the function with `On`, they will generate the specified SHIORI event when clicked (or the user puts in input). If you do not include `On`, they will use the events OnChoiceSelect (and OnChoiceSelectEx),  OnAnchorSelect (and OnAnchorSelectEx), or OnUserInput instead, respectively. These events have their own references, which are slightly different than if you use your own SHIORI events. See Ukadoc for details.

For the raise command, the SHIORI event will be generated as soon as the script reaches the tag. This is different from calling a function by simply writing the name of a function in your code, since this generates a whole new event and will interrupt the current script.


One more thing. I mentioned that the scope of references is different from local variables or `_argv`. Here is an instance in which that comes into play.

```c
//Assume this is called with \![raise,OnCheckForRed,red]
OnCheckForRed
{
	RedCheck
}

RedCheck
{
	if reference0 == "red"
	{
		1
	}
	else
	{
		0
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M4.L1.CheckForRed%3Ared)

The above function will output `1`

As you can see, in the above code, `RedCheck` can make use of the references generated for `OnCheckForRed`, because `OnCheckForRed` has not ended yet. If we were working with `_argv`, we would have to pass the information in `_argv` as a parameter to `RedCheck`, since the `_argv` only exists within `OnCheckForRed`.

```c
//This function is taking place of that raise command
OnRedCheckArgv
{
	OnCheckForRed2("red")
}

OnCheckForRed2
{
	RedCheck2(_argv[0])
}

RedCheck2
{
	if _argv[0] == "red"
	{
		1
	}
	else
	{
		0
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M4.L1.RedCheckArgv)

The above function will output `1`

---

## Further Context

`reference` vs `_argv` had me confused for a long while. If you're still confused, here's what you should take away from this lesson:

`_argv` is a *local* array, generated when you make a *function call* with *parameters* attached. They are something made by YAYA. You will be using `_argv` if you are passing data this way: `SomeFunction("thing 1","thing 2","etc...")

references are a *global array/variables*, generated when a *SHIORI event* is called. They are something made by the baseware. You will be using references if you are passing data by any Sakura Script tags, such as: `\![raise,OnSomeFunction,thing 1,thing 2,etc...]`

You will find lots of references on Ukadoc, because Ukadoc is documentation of ukagaka standards and stuff handled by the baseware. You will *not* find `_argv` on Ukadoc, because `_argv` is a part of the YAYA programming language, not ukagaka generally.

Conversely, you *will* find `_argv` on the AYAYA wiki, because the AYAYA wiki documents *specifically* the YAYA language. You will not find references there.

I debated whether I should include this section here, but in the end, I think the similarities to `_argv` and also the differences are too important to not talk about them back-to-back.

Anyways, here is a sample of how I've used these things in my ghosts, a bit simplified to get to the point.

```c
OnUserBornDay
{
	_day = TOINT(reference0)
	_month = TOINT(reference2)
	
	if IsValidDay(_month,_day)
	{
		if "%(_month)/%(_day)" == "%(month)/%(day)" //if today is the user's birthday
		{
			"\0\s[0]Happy birthday,\w4 %(username)!"
		}
		elseif "%(_month)/%(_day)" == "12/25" //If it's on christmas
		{
			"\0\s[0]Oh,\w4 you were born on Christmas?\w8\w8 Cool!"
		}
		else //if the birthday is not listed above.
		{
			"\0\s[0]Ok, your birthday is %(birthday[0])."
		}
	}
	else //If it isn't a valid day, we open the input box again and have a \e so the dialogue below doesn't play.
	{
		"\0\s[0]That isn't a valid day.\w8\w8 Try again."
		--
		"\![open,inputbox,OnUserBornDay,-1]"
	}
}

//Checks if the day is valid for the month given
//Month is argument 0, day is argument 1
//Returns 1 if it's a valid day, 0 if it's not
IsValidDay
{
	_month = TOINT(_argv[0])
	_day = TOINT(_argv[1])

	case _month
	{
		when 2
		{
			if _day >= 1 && _day <= 29; 1
			else; 0
		}
		when 4, 6, 9, 11
		{
			if _day >= 1 && _day <= 30; 1
			else; 0
		}
		others //1, 3, 5, 7, 8, 10, 12
		{
			if _day >= 1 && _day <= 31; 1
			else; 0
		}
	}
}
```

You can see that in `OnUserBornDay`, I use references, because this function is called as a SHIORI event. It happens after the user puts input into an input box.
 
However, IsValidDay is called as a normal function call, as part of an if statement. So, I use `_argv` because that's how my parameters will be sent.

[Next lesson >>](../module_04_functions/02_thinking_with_functions.md)

[<< Previous Lesson](../module_04_functions/00_parameters.md)
