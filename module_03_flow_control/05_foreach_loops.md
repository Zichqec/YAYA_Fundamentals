# Module 03 - Flow Control

## Lesson 05 - foreach Loops

[Next lesson >>](../module_03_flow_control/06_continue_break.md)

[<< Previous lesson](../module_03_flow_control/04_for_loops.md)

`foreach` loops are the safest kind of loop. They **iterate** over the elements of an array, and no more. To declare a `foreach` loop, you must include an array to iterate over, and specify a variable that will hold the content of the current array element for that iteration of the loop.

```c
OnForeachColors
{
	_colors = ("red","orange","yellow","green","cyan","blue","purple","magenta")
	
	_display = ""
	foreach _colors; _color
	{
		_display += "I like " + _color + "! "
	}
	_display
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M3.L5.ForeachColors)

The output of the above function will be the string `I like red! I like orange! I like yellow! I like green! I like cyan! I like blue! I like purple! I like magenta! `

During the first iteration of the loop, `_color` contains the string `red`. During the second iteration of the loop, `_color` contains the string `orange`. Etc.

It is not possible to create an infinite loop with a `foreach` loop. Even if you edit the array the `foreach` loop is iterating over, the loop will continue to run with the original version of the array that existed when the loop began. `foreach` loops are also unaffected by the loop limit.

---

## Further Context

`foreach` loops are so friendly. They are so simple, but when you're working with arrays, they're often all you need. I love them dearly, and I am always sad when a loop I am working on turns out to be too complicated for a `foreach` to be sufficient.

Here's an example of the way a foreach loop might be used. In the SHIORI event OnBIFFComplete, the headers for each email will be stored in reference7 (if the user has not toggled this off in the SSP preferences). So, we can use a `foreach` loop to display them in a tidy list.

```c
//When an email check completes. We're using reference.raw because of auto type convert
//Again, you'll learn about that later!
OnBIFFComplete
{
	_display = ""
	foreach reference.raw[7]; _header
	{
		_display += "\![*]"
		_display += SHIORI3FW.EscapeAllTags(_header)
		_display += "\n\n"
	}
	"\0\b2\_q\*\![set,autoscroll,disable]"
	--
	"Emails:\n\n%(_display)"
	--
	"\![*]\q[Done,blank]"
}
```

With this setup, each header will be handled individually, and added to the display variable with a choice marker before it, any Sakura Script tags inside of it safely escaped so they don't execute, and with linebreaks after it. Simple and clean.

[Next lesson >>](../module_03_flow_control/06_continue_break.md)

[<< Previous lesson](../module_03_flow_control/04_for_loops.md)
