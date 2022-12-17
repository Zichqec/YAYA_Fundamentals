# Lesson 07 - return and Output Candidates

[Next lesson >>](../module_03_flow_control/08_brackets_and_modifiers.md)

[<< Previous lesson](../module_03_flow_control/06_continue_break.md)

Now, for one final keyword in flow control, and an overview of brackets and output candidates in YAYA.

I have previously mentioned that functions **return** values. In most programming languages, you have to explicitly write what the function should return. But in YAYA, any line that is not an operation or control structure will be treated as an **"output candidate"**.

```c
OnComparisonAsOutput
{
	1 < 2
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.ComparisonAsOutput)

The above function will output `1`

In the above function, `1 < 2` is a condition. It evaluates to a `1`, because it is true. Because this is not part of a control structure like an `if` statement, nor is it assigned to a variable, the resulting `1` is treated as an output candidate. This function will always return a `1` (True), because that is the only output candidate available.

This is the same process that happens when we write a string by itself.

```c
OnStringAsOutput
{
	"Hello, world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.StringAsOutput)

The above function will output the string `Hello, world!`

This string is not part of a control structure, nor is it part of an assignment, so it will be treated as an output candidate and returned.

You can do the same by writing numbers on their own, or function calls. Anything that isn't a part of something else will be an output candidate.

So, what do I mean when I say that these output candidates will be returned because they are the only ones available? Any experienced programmers, pay special attention to this section, because it *will* trip you up if you aren't careful.

When there are multiple output candidates in the same function, YAYA will choose which one to return *randomly.*

```c
OnRandomRGB
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.RandomRGB)

The above function returns either `red`, `green`, or `blue`, at random when the function is called.

This may seem like a wild and confusing concept if you are not familiar with ghost coding. And, it can be very frustrating at times. But since a lot of ghost coding is writing pools of dialogue, or word lists like the above, it is actually very useful for ghosts. There are also ways to modify this behavior, which we'll go into in the next lesson.

In addition to this, there is the `return` keyword. When the `return` keyword is reached, the function stops processing, and only output candidates that have already been encountered will be chosen from.

```c
OnReturnEarly
{
	"red"
	"green"

	return

	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.ReturnEarly)

The above function will randomly output `red` or `green`, but never `blue`.

If you wish to return more than one output candidate at a time, you can accomplish this with the double dash operator, also known as the "output determinant" (according to dodgy machine translation).

```c
OnOutputDeterminant
{
	"red"
	--
	"green"
	--
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.OutputDeterminant)

The above function will output `redgreenblue`

If there are multiple output candidates in a section separated by the output determinant, that section will have the options in it chosen at random.

```c
OnRandomMiddle
{
	"red"
	--
	"green"
	"blue"
	--
	"yellow"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.RandomMiddle)

The above function will output either `redgreenyellow` or `redblueyellow`, at random.

One final note before moving on. There are also the options `void` and `parallel`.

`void` will cause the statement after it to not be an output candidate.

```c
OnOnlyOneCandidate
{
	void 2
	1
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.OnlyOneCandidate)

The above function will return a `1`, but it will never return the `2`

This is primarily used for running functions that have a return value, but you only need the function to run and you don't want the return value.

`parallel` is used with arrays, and will turn all of the elements of an array into individual output candidates.

```c
OnThreeCandidates
{
	_colors = ("red","green","blue")
	
	parallel _colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L7.ThreeCandidates)

The above function will return either `red`, `green`, or `blue`, at random, rather than the array `red,green,blue`.

---

# Further Context

Oh boy! Random returns! Isn't *that* fun. If you're an experienced programmer, I can feel you weeping from here. It's ok, we'll kinda fix it next lesson. I swear it's actually really useful for the particular niche this language fills, most of the time. But if your code ever seems like the outputs are changing randomly, *check for accidental returns first.*

Complaints aside, I want to make two notes about common issues! First up, if you have ever written something like `newvar == 0` when you meant to put `newvar = 0`, you might have seen a `1` be output to the balloon. This is why! The `newvar == 0` is correctly read as a comparison rather than an assignment, the output of which is `1`. And since this isn't being assigned to anything, it's now an output candidate too! I've had this happen before in my OnFirstBoot, so sometimes when people would install my ghost, it would just say `1` instead of my carefully crafted first boot dialogue. If you ever see random `1`s or `0`s in your ghost's dialogue, check for these first!

The other thing is to address what I mentioned before when we first talked about loops. I mentioned that if you write outputs directly in a loop, it will not behave how you expect. This is why. When you write a loop like this...

```c
OnRandomLoopOutput
{
	for _i = 0; _i < 10; _i++
	{
		_i
	}
}
```

What this is actually doing is generating *10 different output candidates.* With my visualization example I was using before, it would look something like this once the loop has finished:

```c
OnRandomLoopOutput
{
	for _i = 0; _i < 10; _i++
	{
		0
		1
		2
		3
		4
		5
		6
		7
		8
		9
	}
}
```

So, of course, since all of these numbers aren't being assigned to anything... They are output candidates, and YAYA will cheerily pick from them at random, completely befuddling any poor dev that isn't already familiar with this concept.

As I mentioned before, using a local variable to store your desired output is one way to get around this. We'll see another way around it in the next lesson.

Anyways, all that aside, the output determinant is actually really useful for a lot of ghost things. It is used as a common way to write menus:

```c
OnMainMenu
{
	"\![*]\q[Menu item 1,OnMenu1]\n"
	--
	"\![*]\q[Menu item 2,OnMenu2]\n"
	--
	"\![*]\q[Menu item 3,OnMenu3]\n"
	--
	"\![*]\q[Menu item 4,OnMenu4]\n"
	--
	"\![*]\q[Menu item 5,OnMenu5]\n"
}
```

It is also used to add variations to dialogues:

```c
RandomTalk : nonoverlap
{
	"\0What was that!? "
	--
	"\1What!? "
	"\1Huh!? "
	"\1Eek! "
	--
	"\0Oh, nevermind, it was just a piece of dust floating around lol"
	"\0Made you look heehee"
	"\0Scary!!!"
}
```
With the above code, each character's responses will vary each time the dialogue is said. It can be more complex than this, but you get the idea. If used well it can help liven up dialogues.

[Next lesson >>](../module_03_flow_control/08_brackets_and_modifiers.md)

[<< Previous lesson](../module_03_flow_control/06_continue_break.md)
