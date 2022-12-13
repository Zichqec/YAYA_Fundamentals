# Lesson 04 - Embedded Elements

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/05%20-%20Recursion.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/03%20-%20Pure%20Functions.md)

There is one more way to call functions that we have not covered yet. It is called **embedded elements**, or sometimes **string expansion**. In other languages, this is often called **string interpolation**. In the English community, it is colloquially known as **envelopes**, though envelope also generally refers to lists of words. So, we will avoid that term here.

First, we will cover what is called a **ranged deployment**. In any script enclosed in double quotes, you can write a formula, function, or variable within parenthesis, preceded by a %. This will embed the result/returned value within the script.

```c
OnRangedDeployment
{
	"It's %(season2)!"
}

season2
{
	case month
	{
		when 3-5
		{
			"spring"
		}
		when 6-8
		{
			"summer"
		}
		when 9-11
		{
			"autumn"
		}
		others //12, 1, 2
		{
			"winter"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.RangedDeployment)

The above function will output the string `It's autumn!` if the (meteorological) season is autumn, etc.


Note, expansion *only* happens within strings enclosed in double quotes. If you want to display the text as it is without expansion, you can write it in single quotes instead.

```c
OnDoesNotExpand
{
	'It''s %(season3)!' //Note that in this case we have to escape the apostrophe in "it's" so we don't break the string
}

season3
{
	case month
	{
		when 3-5
		{
			"spring"
		}
		when 6-8
		{
			"summer"
		}
		when 9-11
		{
			"autumn"
		}
		others //12, 1, 2
		{
			"winter"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.DoesNotExpand)

The output of the above function will be the string `It's %(season3)!`, regardless of what month it is.


Using an example from a previous lesson, string expansion is a simpler way to write the dialogue displaying what season it is, at least in a case where the dialogue is this simple.

This can also be used on formulas like `%(1 + 1)`, or variables like `%(totalpets)`, or functions—including with arguments—like `%(Sum(1,2))`.

Something to be mindful of is that when these embedded elements are present in a function, they will *always* run when the function is run, *even if the script they are a part of is not selected as the output.*

```c
OnShowDrawback
{
	"Hey, good to see you today friend!\e%(friendship += 1)"
	"Oh, hey."
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.ShowDrawback)

The output of the above function will be the string `Hey, good to see you today friend!\e` or `Oh, hey.`, chosen at random. *Regardless of which one is output,* the friendship variable will always be incremented by 1.


You can also write variable and function names without the parenthesis. This method is referred to on AYAYA (through dodgy machine translation) as "Longest Consistent Name Expansion". With this method, it will always attempt to match the longest name possible.

```c
OnWithoutParenthesis
{
	_c = "red"
	_col = "blue"
	_color = "green"
	"I like %_color"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.WithoutParenthesis)

The above function will always return the string `I like green`

Because this always attempts to match the longest name, the output can change as variables are created and destroyed.

```c
OnChangingOutput
{
	_col = "blue"
	"I like %_color "
	--
	_color = "green"
	"I like %_color"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.ChangingOutput)

The above function will output `I like blueor I like green`. This is because, when the first string is reached, the best match is `%_col`, and the `or` from `%_color` is left as regular text, creating `blueor`. Afterwards, `_color` is created, and now `_color` is the best match when it reaches the next string.

Finally, you can use a `%` and square brackets to recall the output of previously displayed elements. This is like array indices; `%[0]` will recall the output for the first embedded element, `%[1]` will recall the output for the second embedded element, and so on.

```c
OnRecallResult
{
	"I like %color. Isn't %[0] great? I like %food too, I want some %[0] %[1]."
}

color
{
	"red"
	"green"
	"blue"
}

food
{
	"cheese"
	"whipped cream"
	"mustard"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.RecallResult)

In the above function, the output might be something like: `I like red. Isn't red great? I like cheese too, I want some red cheese.` This will vary depending on which string is called from each embedded element, but you can see that recalling it with `%[]` syntax keeps it consistent through the script.

Note that for this to work, the `%[]` *must* be in the same string as the embedded elements you want to recall.

```c
OnIncorrectRecall
{
	"I like %color2. Isn't %[0] great? I like %food2 too, "
	--
	"I want some %[0] %[1]."
}

color2
{
	"red"
	"green"
	"blue"
}

food2
{
	"cheese"
	"whipped cream"
	"mustard"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L4.IncorrectRecall)

The above function will output a script like `I like red. Isn't red great? I like cheese too, I want some  .`

As you can see, the second part of the script after the `--` will not return anything when `%[]` is used, because it is not the same string.

`%[]` also cannot be used with ranged deployment (string expansion with parenthesis), and attempting to do so will cause an error.


The AYAYA wiki makes a note that the "Longest Consistent Name Expansion" method is dramatically slower than the ranged deployment. So, you should use parenthesis unless you need this special functionality.

---

# Further Context

I love string expansion/interpolation. It's great. It's really easy to do, and I find it much easier to read scripts that use string expansion instead of concatenating text and variables. Consider the following:

```c
"You've pet me " + totalpets + " times."
```

Yuck. How about this instead:

```c
"You've pet me %(totalpets) times."
```

This may look like a small difference, but believe me, I feel it every time I type a script with multiple of these things.

Now of course, you must be mindful of the caveat I mentioned before. *Don't* try to put anything that changes variables into an embedded element. Just don't! Not even if you tuck it into a separate function; the envelope will still make the function run even if the envelope isn't in the script that is output! There are other ways to achieve this effect. I primarily recommend using the `raise` tag in Sakura Script, because Sakura Script tags don't execute until the dialogue they are in is actually displayed. But there is another method we'll see later on for simple variable changes.

Anyways, here is how I would fix the example I used when I talked about this before, with a `raise` tag.

```c
OnShowDrawback
{
	"\![raise,OnRaiseFriendship]Hey, good to see you today friend!"
	"Oh, hey."
}

OnRaiseFriendship
{
	friendship += 1
}
```

It's a little more text, but it's really not so bad.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/05%20-%20Recursion.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/03%20-%20Pure%20Functions.md)