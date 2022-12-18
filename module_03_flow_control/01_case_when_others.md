# Module 03 - Flow Control

## Lesson 01 - case when others

[Next lesson >>](../module_03_flow_control/02_switch.md)

[<< Previous lesson](../module_03_flow_control/00_if_elseif_else.md)

case/when/others is a more niche structure than if/else. In other languages, this is often called switch/case. But in YAYA, switch means something else that we will go over in the next lesson.

There is no speed difference bewteen case/when/others and if/elseif/else. case/when/others is also evaluated from top to bottom, just as if/elseif/else is. These are common misconceptions. (Also, if you are familiar with other languages like Ruby, there is no fallthrough here and no need to break your case statements.) As a matter of fact, case/when/others is converted to the equivalent if/elseif/else statement by YAYA before it is run. So, the only reason to use case/when/others is for readability. It's very good for ranges of numbers, or checking for many static options.

When you write a `case` statement, you must write the variable or value that it will be checking. Then, inside of the brackets for the case, you write a series of `when` statements. These can be numbers, strings, or ranges, and you can write as many as you need.

```c
OnSimpleCase
{
	case hour
	{
		when 0
		{
			"It's midnight!"
		}
		when 12
		{
			"It's noon!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L1.SimpleCase)

The above function will output the string `It's midnight!` when the hour is 0 (12AM). Alternatively, if the hour is 12 (12PM), it will output the string `It's noon!`

Note that you can't write a variable, formula, or function name as a part of the when statement. So `when 2` is valid, but `when hour` or `when 2 + 2` are not.

The above example uses simple checks, but we can get more complicated. First of all, with a `when` statement, you can add multiple values to check, separated by commas.

```c
OnMultipleStatements
{
	_color = "red"
	case _color
	{
		when "red", "green", "blue"
		{
			"RGB!"
		}
		when "cyan", "magenta", "yellow"
		{
			"CMY!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L1.MultipleStatements)

The above function will output the string `RGB!`

You can see how this would be useful to check for several different possibilities if you wanted them to all have the same response, rather than chaining together several `if` checks with `||`.

Here's what the equivalent function with if/elseif statements would look like.

```c
OnMultipleStatementsAsIf
{
	_color = "red"
	if _color == "red" || _color == "green" || _color == "blue"
	{
		"RGB!"
	}
	elseif _color == "cyan" || _color == "magenta" || _color == "yellow"
	{
		"CMY!"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L1.MultipleStatementsAsIf)

The above function will output the string `RGB!`. As you can see, this does the same thing as the case/when statement, but it is much longer to write, and takes longer to read.

The other very useful thing is that you can test ranges here.

```c
OnCaseRanges
{
	case hour
	{
		when 0-11
		{
			"It's sometime in the AM!"
		}
		when 12-23
		{
			"It's sometime in the PM!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L1.CaseRanges)

The above function will output either `It's sometime in the AM!` or `It's sometime in the PM!`, depending on the time of day.

This is much simpler to read than a check like `if hour >= 0 && hour <= 11`. And of course, you can write ranges separated by commas, as well.

Additionally, much like `if` has `else`, `when` has `others`. `others` executes if none of the `when` statements are true.

```c
OnMultipleRanges
{
	case hour
	{
		when 0-4, 20-23 //12AM-4AM, 8PM-11PM
		{
			"It's probably dark out!"
		}
		others //If the when statement isn't true
		{
			"It's probably light out!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L1.MultipleRanges)

And that is all there is to case/when/others. It's less flexible than if/elseif/else, but it can be much more readable depending on your needs.

---

## Further Context

case/when's ranges can apparently be used with strings, too. But I'll be honest, I was not able to figure out how this works. If anyone figures it out, let me know, I would love to add it here!

Otherwise, I don't have too much to say about it. It is helpful sometimes to make things more readable, but otherwise it doesn't behave any differently. I really mean that, it literally is handled *exactly* the same as if/else. It is an if/else in disguise. An impostor. Three `if` statements in a trenchcoat.

Here's a real use case in my own ghosts:

```c
//Current season
season
{
	if hemisphere == "Southern"
	{
		case month
		{
			when 3-5; "Autumn"
			when 6-8; "Winter"
			when 9-11; "Spring"
			others; "Summer"
		}
	}
	else
	{
		case month
		{
			when 3-5; "Spring"
			when 6-8; "Summer"
			when 9-11; "Autumn"
			others; "Winter"
		}
	}
}
```

This code gets the season, based on the current hemisphere. The initial hemisphere check is simple, so I use an if/else here to save on whitespace. When, I use case/when to express the ranges of numbers, since this is much cleaner and easier to read.

[Next lesson >>](../module_03_flow_control/02_switch.md)

[<< Previous lesson](../module_03_flow_control/00_if_elseif_else.md)
