# 00 - if elseif else

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%203%20-%20Flow%20Control/01%20-%20case%20when%20others.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%202%20-%20Arrays/03%20-%20Multidimensional%20Arrays.md)

The most basic part of flow control is if/elseif/else. This is the simplest structure, but also incredibly powerful. First, we will cover the `if` statement.

An `if` statement is simple. After the `if`, you write an operation or value. Do you remember before that I said 1 is true, and 0 is false? Here's where that's important.

If you write an operation by itself in a function, the function will return the result of that operation.

```c
OnSingleOperation
{
	hour == 0
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.SingleOperation)

The above function will output a `1` when the hour is 0 (12AM). Otherwise, it will output a `0`. Again, in YAYA 1 represents true and 0 represents false.

If an `if` statement is given 0, it will be skipped. If it is given a 1, or any other positive or negative integer, it will run the code inside of it. To use our most basic comparison again...

```c
OnSimpleIfCheck
{
	if hour == 0 //If the hour is equal to 0, which is 12AM in 12 hour time
	{
		"It's midnight!"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.SimpleIfCheck)

The above function will output the string `It's midnight!` when the hour is 0 (12AM). Otherwise, this function will not return anything at all.

`if` checks can also be nested into each other.

```c
OnNestedIfCheck
{
	if hour == 0 //If it's midnight
	{
		if minute == 30 //If it's half past the hour
		{
			"It's 12:30AM!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.NestedIfCheck)

The above function will output the string `It's 12:30AM!` when the hour is 0 (12AM), **and** the minute is 30. Otherwise, this function will not return anything at all.

(A check as simple as this one could of course be done with an `&&` to connect the comparisons as well, but this is simplified for demonstration.)

You can make a lot of things with just this. But, it would be difficult and complicated without the help of `if`'s companion, `else`. `else` statements activate if the `if` check they are paired with is false, and therefore is skipped.

```c
OnIfWithElse
{
	if hour == 0 //If it's midnight
	{
		"It's midnight!"
	}
	else //If it's any time other than midnight
	{
		"It's not midnight..."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.IfWithElse)

The above function will output the string `It's midnight!` if the hour is 0 (12AM). Otherwise, it will output the string `It's not midnight...`

There is also a third statement, `elseif`. `elseif` statements are inserted between `if` and `else` statements, and are used to perform additional checks after the initial `if` statement.

```c
OnIfElseifElse
{
	if hour == 0 //If it's midnight
	{
		"It's midnight!"
	}
	elseif hour == 12 //If it's noon
	{
		"It's noon!"
	}
	else
	{
		"It's not midnight or noon..."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.IfElseifElse)

The above function will output the string `It's midnight!` if the hour is 0 (12AM). Alternatively, it will output the string `It's noon!` if the hour is 12 (12PM). Otherwise, it will output the string `It's not midnight or noon...`

You can include as many `elseif` statements as you like, and they will be checked in order, from top to bottom, until one of them is true and the code inside is executed. After that, the entire stack of if/elseif/else will be exited and no more checks will be performed. Note also that the `else` statement is optional and can be left out.

```c
OnSeveralElseifs
{
	if hour == 0
	{
		"It's midnight!"
	}
	elseif hour == 4
	{
		It's 4AM!
	}
	elseif hour == 8
	{
		"It's 8AM!"
	}
	elseif hour == 12
	{
		"It's noon!"
	}
	elseif hour == 16
	{
		"It's 4PM!"
	}
	elseif hour == 20
	{
		"It's 8PM!"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.SeveralElseifs)

In the above function, nothing will be returned if it's any hour other than the ones that are specified.

So why use `elseif` instead of just multiple `if`s? There is a difference in the way they are checked. For example, if all of the `elseif` statements in the above function were plain `if` checks, *all* of them would be checked. Whereas, with `elseif`, as soon as it finds one of them that is true, the rest of the checks after that one will not be checked. This is useful in cases where multiple conditions can be true and you only want one of them to execute, or if you want to save a bit of processing time.

`elseif` statements also link an `if` statement to an `else` statement. If these were all regular `if` checks, we could not add an `else` statement at the end if we wanted one.

All of these things can be combined, as well. You can nest stacks of if/elseif/else into other `if` statements, and go as deep as you need.


One other note about formatting before we go on. In YAYA, if a statement like `if`, `elseif`, or `else` only has a single line of code in it, you may omit the brackets. This is true for the statements we will see in the next few lessons as well, except loops. So, the above function can be rewritten this way.

```c
OnWithoutBrackets
{
	if hour == 0
		"It's midnight!"
	elseif hour == 4
		It's 4AM!
	elseif hour == 8
		"It's 8AM!"
	elseif hour == 12
		"It's noon!"
	elseif hour == 16
		"It's 4PM!"
	elseif hour == 20
		"It's 8PM!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.WithoutBrackets)

Additionally, you can pair this mechanic with the semicolon, which makes YAYA continue reading code on the same line when it expects a linebreak. So we can reduce the above function even further.

```c
OnWithSemicolons
{
	if hour == 0; "It's midnight!"
	elseif hour == 4; It's 4AM!
	elseif hour == 8; "It's 8AM!"
	elseif hour == 12; "It's noon!"
	elseif hour == 16; "It's 4PM!"
	elseif hour == 20; "It's 8PM!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L0.WithSemicolons)

This is purely an aesthetic choice, and makes no difference in how the code is run (provided the check only contains a single line of code, as mentioned). What formatting you go with is up to you and what is most readable for you. Just try to be consistent with your formatting choices.

---

# Further Context

//my weird visualization technique
//what happens with multiple if statements?

Now this is where things really start to get interesting! I have so much to talk about here.

First of all, a word on using multiple `if` statements instead of `elseif` statements. If you only want one output to be possible at a time, *you should always use `elseif` instead of `if`.* As I said above, if you have multiple `if` statements, it is possible for there to be multiple outputs available at once, which means YAYA will pick randomly from those options (we'll explore this idea in more detail later). This means confusing bugs that are really hard to track down unless you know what you're looking for!

However, there are times where this behavior might be desirable. For example, if you want to have flavor text when clicking a specific option, but you want the flavor text to be random each time, and have more options available based on things the user has done to the ghost. That might look something like this.

```c
OnCheckGhost
{
	"He's doing alright."
	"He's feeling ok."
	
	if total_hugs > 10
	{
		"He's wondering why you hug him so much."
	}
	
	if total_socks_given > 10
	{
		"He has a lot of socks."
	}
	
	if total_boots > 100 && total_runtime > 1000
	{
		"He's accepted that he lives here now."
	}
}
```

The above would not make sense to express with `elseif` statements, because then only one of those dialogues in the `if` statements would be available at a time, even though they are not related to each other at all!

Contrast this with the following, more specific check:

```c
OnCheckHugs
{
	if total_hugs >= 1000
	{
		"You're a complete hugging master! You should write a book on hugs!"
	}
	elseif total_hugs >= 100
	{
		"You're a professional hugger!"
	}
	elseif total_hugs >= 50
	{
		"You're exceptional at hugging!"
	}
	elseif total_hugs >= 25
	{
		"You're a very huggy person!"
	}
	elseif total_hugs >= 10
	{
		"You have given a generous amount of hugs."
	}
	elseif total_hugs >= 1
	{
		"You've given a few hugs."
	}
	else
	{
		"You haven't hugged him at all."
	}
}
```

The above would not make sense to express as multiple separate `if` statements. Only one of those dialogues should be available at a time; it would be very confusing if you could see both "You've given a few hugs" and "You're a professional hugger" under the same conditions! So, you can see why the difference matters.


The other thing I would like to talk about is the weird technique that made a lot of programming concepts click for me. Consider the following code.

```c
OnSomethingOrOther
{
	if hour >= 12
	{
		"something"
	}
	else
	{
		"other"
	}
}
```

Remember I have said multiple times now, that a true expression outputs a `1`, and a false expression outputs a `0`? Here's why I keep saying that. When I look at this code, this is my very unscientific way of breaking it down and understanding it.

When the code reaches that `if` statement, it first evaluates the expression listed just after it. If the hour is greater than or equal to 12, it will output a `1`. And the key bit is this, now I think of the code looking like this:

```c
OnSomethingOrOther
{
	if 1
	{
		"something"
	}
	else
	{
		"other"
	}
}
```

An if statement followed by a `0` will not run, but an if statement followed by any other integer, in this case `1`, *will* run. And that's *really* important. This applies to formulas, variables, and functions. If you browse the AYAYA wiki, you'll notice that many functions will output a `0` or a `1`, or some other integer, when they have completed their task. This is one of the reasons why!

What this means is, since everything becomes an integer that represents either true or false, *you don't have to include a comparison operator for every check.* What do I mean by that, exactly?

When I first started out, I included `==` checks on just about everything. For example, consider the following. This little snip of code can be used to check if the ghost's balloon is currently open or not.

```c
//As the name implies, this checks if the balloon is currently open or not.
//Will be 0 if the balloon is not open, and 1 if the balloon is open
BalloonIsOpen
{
	"balloon" _in_ var.req.value[ASEARCH("Status",var.req.key)]
}
```

When you run BalloonIsOpen, it will output either a `0` or a `1` based on whether the balloon is currently open. So, with the way I used to code, usually, I would write a check for this like so:

```c
OnDisplayNewHighScore
{
	if BalloonIsOpen == 1
	{
		"\C\n\n"
	}
	--
	"New high score!"
}
```

Do you see what is wrong with the above? Here, let's take the first step. So, the BalloonIsOpen function runs, and lets say it outputs a `1`. Alright, so now the code looks like this.

```c
OnDisplayNewHighScore
{
	if 1 == 1
	{
		"\C\n\n"
	}
	--
	"New high score!"
}
```

... Huh. That's kind of odd, isn't it? `1 == 1`? That seems a bit redundant, does it not? But now of course, we have a new comparison, so it will need to evaluate that as well. And that evaluates to...

```c
OnDisplayNewHighScore
{
	if 1
	{
		"\C\n\n"
	}
	--
	"New high score!"
}
```

Shocking, I know. But the real question here is... why take the extra step, if you don't need to? If you're working with a function that will always equal either 0 or 1, *you don't need the `==` operator!*

I will make the note though, one of the traps I see people fall into sometimes is with logical OR. Sometimes, people write it this way:

```c
if hour == 10 || 12 || 14
```

But, this will not work! The `hour == 10` will be evaluated and come out as `1`, leaving you with this:

```c
if 1 || 12 || 14
```

And this is definitely not what you want. This OR statement will evaluate as true *every* time, because the 12 and 14 will always be present, and will make it think it is true.

When you write an OR statement, you have to remember that you need to place an *entire expression* between each `||`. So, it *should* be written like this:

```c
if hour == 10 || hour == 12 || hour == 14
```

This is a bit longer, but when the code is run, it might look like this (for the sake of example, we'll say that `hour` is currently `12`):

```c
if 0 || 1 || 0
```

Much better! This will only be true when intended.


One more thing before we go, this is it I promise. Consider this example function again.

```c
//As the name implies, this checks if the balloon is currently open or not.
//Will be 0 if the balloon is not open, and 1 if the balloon is open
BalloonIsOpen
{
	"balloon" _in_ var.req.value[ASEARCH("Status",var.req.key)]
}
```

Let's simplify it a little to this.

```c
//As the name implies, this checks if the balloon is currently open or not.
//Will be 0 if the balloon is not open, and 1 if the balloon is open
BalloonIsOpen
{
	"balloon" _in_ thing_that_checks_the_balloon
}
```

Do you notice something a little strange? There is *no* if statement in this function at all, despite it having 2 possible outputs. What's the deal with that?

It's simple, really. An `_in_` operator will output a `1` if it finds the string on the left inside the string on the right, and `0` if it does not. So, adding an if check here would be redundant! For the sake of example, this is what that'd look like:

```c
//As the name implies, this checks if the balloon is currently open or not.
//Will be 0 if the balloon is not open, and 1 if the balloon is open
BalloonIsOpen
{
	if "balloon" _in_ thing_that_checks_the_balloon; 1
	else; 0
}
```

This has the same effect as the code above, it just takes some extra steps.

That is not to say you should *never* write that way. Sometimes the additional clarity is good and necessary! But I think it's good to understand how this sort of thing works, because it gives you more flexibility.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%203%20-%20Flow%20Control/01%20-%20case%20when%20others.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%202%20-%20Arrays/03%20-%20Multidimensional%20Arrays.md)