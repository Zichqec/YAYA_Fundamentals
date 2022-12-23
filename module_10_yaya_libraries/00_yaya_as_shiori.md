# Module 10 - YAYA Libraries

## Lesson 00 - YAYA as SHIORI

[Next lesson >>](../module_10_yaya_libraries/01_yaya_as_other_things.md)

[<< Previous module](../module_09_saori/02_saori-basic.md)

As mentioned at the start, YAYA is not strictly for ghosts. As a matter of fact, YAYA can be used as a general purpose coding language completely unrelated to ukagaka. This means that, for the purposes of ghost making, or making anything else ukagaka-related, it is helpful to have a library to handle things like SHIORI events and making references and such.

If you're working off of any ghost template, you will already have the [YAYA as SHIORI](https://github.com/YAYA-shiori/yaya-dic) library. (And if it's not, let me know because I'd love to study that template!) It comes with a multiple dic files to get you started. These include the basic functions, like making OnAiTalk run based on a certain, modifiable interval.

Here, we will briefly go over some of the special functions of those base dic diles.


`C_BYTE1` is something you can write if you want to write the byte value `0x01`. This is useful as a delimiter in a lot of places, since it's unlikely you'll get one of these in user input. This is set up by a preprocessor command.

`C_CRLF` is something you can write if you want to write a CR and a LF character. This is also set up by a preprocessor command.


Next, there are some options in the config file (`yaya_config.txt`, or `config.txt` in your `yaya_base` folder, depending on what version you have) that you can change if you like.

`SHIORI3FW.REF_ACCEL` is an option that affects whether references remain as an array, or are made into separate variables. With this option off, you will get references in the form `reference0`, `reference1`, `reference2`, etc., which is a little slower. With this option on, you will *only* get `reference[0]`, `reference[1]`, `reference[2]`, etc. Note that you always get the reference array regardless of which option you choose.

`SHIORI3FW.AUTO_TYPE_CONVERT` is an option that affects the references that are recieved from the SHIORI events. With this option off, they will all be recieved as strings, and you will have to convert them to different types manually. With this option on, YAYA will use `TOAUTOEX` on them to try and convert them to real numbers or integers as it deems appropriate. *This option also converts all byte 0x01 characters (`C_BYTE1`) to commas.*

This behavior is many times undesirable. For example, if you wanted the user to input a zip code into an input box, YAYA will see those numbers as an integer and convert them accordingly. However, some zip codes start with 0s, and those 0s would be lost. You can imagine that might screw up your code.

Additionally, as mentioned before, the byte value 0x01 (`C_BYTE1`) is often used as a delimiter. This is true for some SHIORI events as well. `OnBIFFComplete` is an event that occurs when an email check has been completed successfully. `reference7` contains all of the headers for the emails that were fetched. It separates them by byte 0x01, because email headers sometimes contain things like commas. So, this is a way to keep them separated properly. Except, with auto type convert on, all these 0x01 bytes are converted to commas. Suddenly, you can't divide up the email headers cleanly anymore.

So, what can you do, if you want to keep auto type convert on? Thankfully, there is also something called `reference.raw`. `reference.raw` is an array just like reference, except that auto type convert does not apply to it. So, if you use `reference.raw[7]`, you can get the original array of email headers with the byte 0x01 delimiters. If you use `reference.raw[0]` with the input box example, you can get the zip code exactly as written, leading 0 and all. Note that `reference.raw` is always an array, you cannot write `reference.raw0`.

Also worth noting is that auto type convert was on by default up until late 2022. Nowadays, it is set to off by default. So, if you import someone else's YAYA code into your ghost and it isn't working, and you have auto type convert off, that could be the reason, and you may need to go through and add explicit type conversions to references.


Finally, there are some special operators that you can add to your scripts. In Sakura Script, the `\e` tag is used when you want to end a script and ignore everything that comes after it. Tags will not be executed, and text will not be displayed to the user. This means you can insert other things after it, like special tags your code can check for, or these special operators.

First is **eval**. If you want to apply a change to a variable when a certain script is executed, you can use `:eval=` for that. Any text you write after it will be run through an `EVAL` function.

```c
OnRaiseFriendshipBasedOnDialogue
{
	"I really like you, %username.\e:eval=friendship += 1"
	"Hi, %username."
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M10.L0.RaiseFriendshipBasedOnDialogue)

In the above function, the friendship variable will only be incremented when the "I really like you, %username." dialogue is output.

This is oftentimes useful because if you try to do the same thing with embedded elements, they will always run even if the script they are in is not picked as the output.

```c
OnRaiseFriendshipAlways
{
	"I really like you, %username.\e %(friendship += 1)"
	"Hi, %username."
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M10.L0.RaiseFriendshipAlways)

In the above code, friendship will always increment by 1 whenever the function is run, regardless of which dialogue is output.

There is also **chain**, which is written in much the same way. `:chain=` is followed by the name of the chain you want to start. You will also use the name of the chain as a function name, so make sure it isn't exactly the same as any other function names.

```c
OnStartChain
{
	"I really like you, %username.\e:chain=likeuser"
	"Hi, %username."
}

//Hi! Ignore this comment, it's here because the Github Pages view breaks without it! {% raw %}
likeuser
{{CHAIN
	"You're really nice."
	"And you smell good."
	"And you bring me food."
	"What more could someone ask for?\e:chain=end"
}}CHAIN
//As above, so below! {% endraw %}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M10.L0.StartChain)

In the above function, the dialogue "I really like you, %username." will start what is called a chain dialogue, with the name "likeuser". The dialogues will be output one at a time, from top to bottom, one at a time each time `OnAiTalk` is called, until the chain name is set to `end`. (In the companion ghost, you can press `T` while the ghost is selected to prompt `OnAiTalk`.)

Chain dialogues are actually a switch statement in disguise. These are the preprocessor commands that make chains work:

```c
//Hi! Ignore this comment also! Did you know GitHub pages uses this thing called Liquid to help you build websites easily? {% raw %}
#globaldefine	{{CHAIN		{ switch CHAIN.Index {
#globaldefine	}}CHAIN		} CHAIN.Index++ }
//Liquid is really handy! But it uses {{ }} syntax for its tags, which is interfering with YAYA as SHIORI's chain syntax! These comments are here to make it output the raw text! I'm in hell! {% endraw %}
```

If we break this down by adding line breaks, that means our chain above actually looks like this.

```c
likeuser
{
	switch CHAIN.Index
	{
		"You're really nice."
		"And you smell good."
		"And you bring me food."
		"What more could someone ask for?\e:chain=end"
	}
	CHAIN.Index++
}
```

Quite the difference, isn't it? The CHAIN.Index variable is set to 0 elsewhere in the .dic files when you first enter a chain, and it will increment each time the chain is run, so that when it runs again it chooses the next dialogue. And when the chain name is set to `end`, it will stop calling the chain function, and normal aitalk dialogues will resume.


There are some other useful functions you may find by peeking through the base dic files. You may also find several useful variables, such as `SHIORI3FW.ShellName`, which contains the name of the current shell, and `SHIORI3FW.BalloonName`, which contains the name of the current balloon. Also, `SHIORI3FW.LastTalk`, which contains the previous script.


Finally, a word about Select.options, if you know what they are. For many ghosts, writing a menu choice like `\q[Hello,sayhi]` will lead to a function called `Select.sayhi`. Select.options are *not a part of YAYA or the YAYA as SHIORI library.* These are created by a piece of code which was in a modified version of the library's dic files. This was included in the first English ghost templates that were made, and thus is present in nearly every single English ghost.

```c
//OnChoiceSelect is called any time a menu choice that does not lead to an OnFunction is called
//reference0 is the second argument in the \q tag
OnChoiceSelect
{
	EVAL("Select.%(reference0)")
}
```

As you can see, this makes it so anything that comes through `OnChoiceSelect` will be run as a function with `Select.` prepended to the name. This can be quite useful, but it can also be very confusing when you run into a ghost or other YAYA code that does not have this same modification. So, be aware of it.

---

## Further Context

About auto type convert. If you find it annoying and want to turn it off in your ghost, just keep in mind you will have to track down any SHIORI events you have that use references, and the references hold numbers. You will have to add TOINT or TOREAL to those yourself, as appropriate. For example:

```c
OnCheckFriendship
{
	_friendship = reference0
	if _friendship > 100
	{
		"We're such good pals!"
	}
	else
	{
		"Eh, you're alright I guess."
	}
}
```

With auto type convert on, this code works fine. But with auto type convert off, `reference0` would be a string there, and you can't use a comparison operator like that on a string. So, you would have to change it to this.


```c
OnCheckFriendship
{
	_friendship = TOINT(reference0)
	if _friendship > 100
	{
		"We're such good pals!"
	}
	else
	{
		"Eh, you're alright I guess."
	}
}
```

It's not that big of a change, but it may be tedious depending on how much code you have to convert. If you are writing code to share with others, it is best to write with auto type convert off, so that it is guaranteed to work for everyone. Premade code that doesn't explicitly convert the types of references this way will only work in ghosts that are using auto type convert.

[Next lesson >>](../module_10_yaya_libraries/01_yaya_as_other_things.md)

[<< Previous module](../module_09_saori/02_saori-basic.md)
