# 05 - EVAL

[Next lesson >>]()

[<< Previous Lesson]()

EVAL (short for Evaluate) is a tricky function. It can be a bit difficult to wrap your head around at first, but it is *incredibly* powerful, and can be dangerous, too. If you are *ever* using EVAL anywhere near user input, *don't.* Simply don't. Truthfully, in ghost coding, it doesn't usually matter too much. But EVAL can give someone full control over what you're making if you're not careful, and it's not a habit you want to get into.

That being said, it can be incredibly useful at times, and you should understand how it works.

EVAL executes any string as YAYA code. Note that it can only execute a single expression; any control structures, like if statements or loops, cannot be used with it.

What EVAL *can* be used for is assigning variables with arbitrary names, running functions with arbitrary names, and more.

```c
OnCreateArbitraryVariables
{
	for _i = 0; _i < 10; _i++
	{
		EVAL("variable%(_i) = 0")
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L5.CreateArbitraryVariables)

In the above code, we have initialized 10 new variables; `variable0`, `variable1`, `variable2`, etc., all the way up to `variable9`; with the integer `0`

If you have a ghost set up to run embedded elements that are input through the script input window, this is how that works. `OnTranslate` activates whenever the script is run, and code like the below makes the embedded elements run.

(Note: In the real version of the code this *only* happens for the script input window, which is used by the developer, and not the input boxes that users have access to.)

```c
SomeFunction
{
	_talk = reference0
	
	_talk = REPLACE(_talk,'"','""') //This escapes any quotes in the input string so that they don't break the EVAL command
	_talk = EVAL('"' + _talk + '"') //Add double quotes around the string so that any embedded elements will expand, and then run it with EVAL
	
	_talk
}
```

The output of the above function will vary based on the input. Any embedded elements passed in, like %(username), will be run even if you used single quotes. This function *is not reproduced in the companion ghost* for the reasons outlined above. However, there is similar code used in OnTranslate you can play around with. That code makes it possible to use embedded elements in script input for that ghost

A quick note about heredocuments, which we saw several modules ago. EVAL does not work with heredocuments. heredocuments can be manipulated with code that is written directly in your .dic files, but they *cannot* be manipulated with EVAL.


As you can see, EVAL can do some very useful things. But again, *you should exercise caution.* It's not as much of a danger in ghost coding, because anyone can muck around in your code anyways, but it is still good to be in the habit of taking care with how you use EVAL. If a user can pass an arbitrary string into an EVAL command, they can do almost anything.

---

# Further Context

All that being said, here's a really handy and practical use for EVAL. I've trimmed this a bit because it goes on for a while.

```c
OnDebugFamily all
{
	"\0\_q\b2\*\![set,autoscroll,disable]"

	if askedaboutwd == 1; "\_a[OnDebugFamilyToggle,askedaboutwd,0]WD\_a"
	else; "\__q[OnDebugFamilyToggle,askedaboutwd,1]WD\__q"

	"   "

	if askedaboutdings == 1; "\_a[OnDebugFamilyToggle,askedaboutdings,0]Dings\_a"
	else; "\__q[OnDebugFamilyToggle,askedaboutdings,1]Dings\__q"

	"   "

	if askedaboutwings == 1; "\_a[OnDebugFamilyToggle,askedaboutwings,0]Wings\_a"
	else; "\__q[OnDebugFamilyToggle,askedaboutwings,1]Wings\__q"
}

OnDebugFamilyToggle
{
	EVAL("%(reference0) = %(TOINT(reference1))")
	OnDebugFamily
}
```

The above code creates a menu, where each option is highlighted in the balloon's anchor color if it is active. Instead of needing a separate function for each one to handle the toggling of the variable, or needing a large if/else statement to check which option was clicked, all I have to do is use EVAL.

With EVAL, the visualization is like this:

```c
OnDebugFamilyToggle
{
	EVAL("askedaboutwd = 1")
	OnDebugFamily
}
```

If I were setting these to a string, it would have to be like this:

```c
OnDebugFamilyToggle
{
	EVAL("%(reference0) = '%(reference1)'")
	OnDebugFamily
}
```

This way, the resulting value from reference1 will be treated as a string, and not a variable/function name.

Just remember that if you write string expansion in an EVAL statement, and the whole thing is surrounded in double quotes, the EVAL will see the *result* of the string expansion and will use that.

[Next lesson >>]()

[<< Previous Lesson]()