# Lesson 06 - continue break

[Next lesson >>](../module_03_flow_control/07_return_and_output_candidates.md)

[<< Previous lesson](../module_03_flow_control/05_foreach_loops.md)

In addition to the different types of loops, there are also two keywords that can be used to control them more finely.

First, there is `continue`. If a loop reaches a `continue` statement, it will skip the rest of the code in the loop body, and go back to the top again. In the case of a `for` loop, this will run the incrementer, while in a `foreach` loop this will move to the next element of the array.

You should take care when using `continue` statements, especially in `while` loops. It is possible to skip a required step to increment the loop, and therefore create an infinite loop.

```c
OnOutputOdds
{
	_display = ""
	_i = 0
	while _i < 10
	{
		_i++ //This incrementor has to be above the continue statement, otherwise it would be skipped and create an infinite loop
		if _i % 2 == 0 //If this is an even number
		{
			continue
		}
		else
		{
			_display += _i
		}
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L6.OutputOdds)

The above function will output the string `13579`

Next, there is the `break` statement. This can be used to end a loop early.

```c
OnStopAt10
{
	_display = ""
	_i = 0
	while 1 //This loop will run indefinitely
	{
		_display += _i
		
		if _i >= 10
		{
			break //This will cause the loop to end after it has run 10 times
		}
		_i++
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L6.StopAt10)

The above function will output the string `0123456789`

The above loop is declared in such a way that it would create an infinite loop, but we use a `break` statement to stop it after just 10 loops.

Loops can be nested together, and in those cases, `break` and `continue` statements affect *only* the innermost loop that they are in.

```c
OnNestedLoops
{
	_display = ""
	for _i = 0; _i < 3; _i++
	{
		_j = 0
		while 1
		{
			_display += _i + ":" + _j + ", " //Formats the string like "_i:_j, "
			_j++
			if _j >= 3
			{
				break
			}
		}
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L6.NestedLoops)

The above function will output the string `0:0, 0:1, 0:2, 1:0, 1:1, 1:2, 2:0, 2:1, 2:2, `

As you can see from this loop, the inner `while` loop uses a `break` statement to prevent it from becoming an infinite loop, but the `break` statement does not stop the outer for loop from running again.

---

# Further Context

`break` and `continue` have gotten me into trouble a few times, because I've placed them in such a way that I get infinite loops. Be mindful of that. They are really handy for avoiding additional processing time though, which is useful for large or intricate loops. They're also very good if you're testing out a loop that seems volatile. Many a time, I have created a while loop with a statement like `if _i > 1000; break`, for safety.

I don't have very many examples of `break` and `continue` in use, really! All of the examples I have are in very long loops that would not be practical to reproduce here... So, here is a small snippet from my markdown processor.

```c
MarkdownProcessor.ApplyMarkdown
{
	//Applying the markdown tags
	_tags = MarkdownProcessor.Tags
	_input = _argv[0]
	foreach _tags; _tag
	{
		_mark_open = _tag[0,C_BYTE1]
		_mark_close = _tag[1,C_BYTE1]
		_single_tag = 0
		if _mark_close == ""; {_mark_close = _mark_open; _single_tag = 1}
		
		if _mark_open !_in_ _input && _mark_close !_in_ _input; continue //If this tag is not in the script, skip the processing

//Other very long code...
	}
}
```

This loop runs once for each set of tags that the developer has set up for use as markdown. But, it is a very complicated loop! It would be really taxing to run it for every single tag, even if that tag is not in the script. So, each time the loop runs, the first thing it does is check if the opening or closing tag are in the input script. If they are not, then it skips processing for those tags, and goes to the next.

Note that these things could also be done as an if check, where if the condition is not true, then everything inside the if check is simply skipped. But, that would impact the whitespace, and in a loop as long as this one is, that's not desirable. You may hear opinions to the contrary though, so it's kind of up to you which method you are more comfortable with.


[Next lesson >>](../module_03_flow_control/07_return_and_output_candidates.md)

[<< Previous lesson](../module_03_flow_control/05_foreach_loops.md)
