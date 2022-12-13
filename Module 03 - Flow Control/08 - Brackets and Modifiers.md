# Lesson 08 - Brackets and Modifiers

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/00%20-%20Parameters.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/07%20-%20return%20and%20Output%20Candidates.md)

Finally, there are brackets, and with them function modifiers.

You can use brackets to group output candidates together. Each set of brackets will choose randomly from the output candidates within it, and the result will be added to the possible output candidates on the level that the brackets were placed.

```c
OnHalfRed
{
	"red"
	{
		"green"
		"blue"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.HalfRed)

The above function will output `red` 50% of the time. Otherwise, it will choose between one of the two other options, resulting in a 25% chance to output `green` and a 25% chance to output `blue`

Note that output determinants can also be contained in brackets, and if so, will only affect the output candidates within those brackets.

```c
OnHalfRedExclamation
{
	"red"
	{
		"green"
		"blue"
		--
		"!"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.HalfRedExclamation)

The above function will output `red` 50% of the time, `green!` 25% of the time, and `blue!` 25% of the time.

Brackets can also be nested infinitely deep.

```c
OnDeeperNesting
{
	"red"
	{
		"green"
		{
			"blue"
			"yellow"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.DeeperNesting)

The above function will output `red` 50% of the time, `green` 25% of the time, `blue` 12.5% of the time, and `yellow` 12.5% of the time.

Note that this also applies to brackets that have a control structure attached, like if/elseif/else and loops. Any time you see brackets, this effect will apply.


Because of this effect, that means if you are writing something like dialogue pools for a ghost, any dialogue within `if` checks would have a reduced probability to appear compared to dialogue that is not in an `if` check. This behavior can be very much unwanted, but there are a few ways to change it.

First of all, modifiers can be applied in two different ways. They may be added after the name of a function, attached with a `:`.

```c
OnModifierOnFunction : all
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.ModifierOnFunction)

The above function will output `redgreenblue`

This is the most common way function modifiers are applied. We'll worry about what this one does exactly in a moment. If you apply no modifier at all, the modifier will default to **random**, which will pick the output from available candidates at random.

The other way to apply them is before a set of brackets. In this case, you write the modifier first, then a `:`, and then your opening bracket.

```c
OnModifierOnBrackets
{
	red
	
	all : {
		"green"
		"blue"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.ModifierOnBrackets)

The above function will output either `red` or `greenblue`, at random.

This modifier applies *only* to the output candidates within the brackets it attached to, and overrides any modifier that is applied to the whole function.

So then, what are the modifiers? First of all, let's go over the basic ones.


**random** is a modifier that makes output candidates be selected from at random. As mentioned, this is the default modifier if you don't write any, so you usually don't need to write this. However, it can be useful for bracketed sections as outlined above, and also for the special modifiers we will see below.

```c
OnRandomModifier : random
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.RandomModifier)

The above function will output `red`, `green`, or `blue`, at random each time it is run.


**nonoverlap** is a modifier that makes sure each output candidate is output at least once before any repeats are shown. This is often used for dialogue pools, to make the character say all of their possible dialogues before they repeat themselves. nonoverlap will be reset if the number of possible output candidates ever changes, so you may see some dialogues repeat before you would expect.

```c
OnNonoverlapModifier : nonoverlap
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.NonoverlapModifier)

The above function will output `red`, `green`, or `blue`, in any order. However, you will always see one of each color before you see any of the colors output a second time.

Also note, if you have bracketed sections in here, they will be treated as a single option for nonoverlap! Once that set of brackets is picked, it won't be picked again until nonoverlap resets. We'll cover how to get around that later.

```c
OnNonoverlapWithBrackets : nonoverlap
{
	"red"
	{
		"green"
		"blue"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.NonoverlapWithBrackets)

The above function will have a 50% chance to output `red`, and a 50% chance to output either `green` or `blue`. But note that it will *always* pick `red` every other time, because once the set of brackets is chosen once, it will not be chosen again until the nonoverlap resets.


**sequential** is a modifier that makes the output candidates be output in sequential order each time it is called, from top to bottom. It is reset if the number of output candidates changes.

```c
OnSequentialModifier : sequential
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.SequentialModifier)

The above function will first output `red`, then `green` when called again, and `blue` when called again. Then, it will restart from the top and output `red` next time it is called, etc.

Brackets here work much like with nonoverlap. A set of brackets is treated as a single candidate, so once it is output a single time, the next candidate after the set of brackets will be chosen next time.

```c
OnSequentialWithBrackets : sequential
{
	"red"
	{
		"green"
		"yellow"
	}
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.SequentialWithBrackets)

The above function will first output `red`, then either `green` or `yellow` when called again, then `blue` when called a third time. Then, it will restart from the top and output `red` the next time it is called, etc.


**void** is a modifier that makes the function not return anything. The code inside will still execute, but nothing will be returned or displayed.

```c
OnVoidModifier : void
{
	i += 1
	i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.VoidModifier)

In the above function, `1` will be added to the value of i, but nothing will be output.


**array** is a modifier that returns all output candidates as a general purpose array.

```c
OnArrayModifier : array
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.ArrayModifier)

The above function will return the array `red,green,blue`


**all** is a modifier that concatenates all output candidates and outputs them together. If you are used to other programming languages, this function modifier may help YAYA behave more how you would expect. (You can think of the output candidates as being in a print command this way, though you will have to add linebreaks yourself.)

```c
OnAllModifier : all
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.AllModifier)

The above function will output `redgreenblue`


**last** is a modifier that outputs only the last output candidate in a function.

```c
OnLastModifier : last
{
	"red"
	"green"
	"blue"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.LastModifier)

The above function will only ever output `blue`


Those are all of the basic modifiers. However, there are some additional modifiers that can be added to the `random`, `nonoverlap`, `sequential`, and array modifiers.

First of all, the pool modifier. This can be attached to the modifiers I mentioned, like `random_pool` (can also be writted as just `pool`), `nonoverlap_pool`, `sequential_pool`, and `array_pool`.

The addition of `pool` makes it so that **all** output candidates in a function, even if they are nested in brackets, are given equal probabilities to be picked. (This also means they will be treated as separate dialogues for `nonoverlap` and `sequential`!)

```c
OnHalfRed2
{
	"red"
	{
		"green"
		"blue"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.HalfRed2)

The above function is the example from before with how brackets affect probabilities. Each of the dialogues within the brackets have a 25% chance to be chosen.

```c
OnPoolModifier : pool
{
	"red"
	{
		"green"
		"blue"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.PoolModifier)

When we add `pool` to the function, all of the dialogues are given an equal chance to be chosen instead of it being affected by the brackets. So 33% of the time it will output `red`, 33% of the time it will output `green`, and 33% of the time it will output `blue`.

There is also the `melt` modifier. This is similar to the `parallel` function mentioned in the previous lesson; any arrays within a function that has a melt modifier will have each element used as a separate output candidate. This is primarily used with the second way of writing function modifiers.

IMPORTANT NOTE: at the time of writing, this is currently bugged. So, take this one with a grain of salt. But what I am describing here is, to the best of my knowledge, the intended effect.

```c
OnMeltModifier
{
	"red"
	
	melt_random: {
		("green","blue")
		("yellow","purple")
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L8.MeltModifier)

This function will output `red`, `green`, `blue`, `yellow`, or `purple`, at random. (It is not a pool function, so 50% of the time the output will be `red`.)

---

# Further Context

What fun function modifiers are! `nonoverlap` you may already be familiar with, as most ghosts have this applied to their `RandomTalk` function. There are a couple of pitfalls that people often fall into with `nonoverlap` though, and you can see this a little easier if you play with the `sequential` modifier, since it has the same quirks.

So I said that the nonoverlap behavior resets if the number of output candidates changes. What does that mean, in context? Here's something people do sometimes, when they want a rare dialogue. The `RAND` in this function will make this dialogue available only 50% of the time.

```c
RandomTalk : nonoverlap
{
	"Some dialogue"
	"Another dialogue"
	"A third dialogue"
	if RAND(2); "A rare dialogue!"
}
```

So, what's the problem with this? Seems simple, right? Well you see, the problem is that this `RAND` runs every time that `RandomTalk` is called. Each time the ghost says a random dialogue, it is a flip of the coin whether the random dialogue is available or not... a flip of the coin whether there are 3 output candidates, or 4. Which means that each time the function runs, there is a 50% chance that the nonoverlap effect will reset, effectively negating it. This effect is *much* worse as you add more dialogues. If you want to see this effect in practice, try running this code with the sequential modifier instead:

```c
RandomTalk : sequential
{
	"Some dialogue"
	"Another dialogue"
	"A third dialogue"
	if RAND(2); "A rare dialogue!"
}
```

You'll notice that even though `sequential` should make it output in order from top to bottom each time it is run, it very frequently goes back to the first dialogue, and it rarely makes it to the end. That's because, as with `nonoverlap`, 50% of the time the number of output candidates will be different from the last time it ran, and therefore it has to start over again.

So what's the fix? Just being mindful with how you set up your checks inside of a function with one of these modifiers, really. Your goal is to make sure that your dialogue pool has the same number of output candidates as often as possible. My advice is to avoid `RAND` altogether in a function like this. Having a chance for it to reset each time a dialogue is said really renders `nonoverlap` useless, so just don't use them together.

If you *really* want to use `RAND`, you could consider doing something like this:

```c
RandomTalk : sequential
{
	"Some dialogue"
	"Another dialogue"
	"A third dialogue"
	if RAND(2); "A rare dialogue!"
	else; "A second rare dialogue!"
}
```

This way, no matter which rare dialogue is picked, there are always 4 output candidates.

I don't really strive for perfection with the `nonoverlap` modifier, since my ghosts tend to have different dialogues available depending on the time of day, which means every couple of hours the nonoverlap effect is going to reset unless I really take the time to always have the same number of dialogues available. And that doesn't sound all that fun, really. If the dialogues have changed that much, then maybe it's fine to have the effect reset. So I wouldn't stress too terribly much about it, just avoid stuff that changes super often.

Alright, that aside, I have a few more notes before we finally leave this module! I love the `all` modifier, it is my very favorite. You know the menu examples I had for you before? I find them both to be a little clunky. But with the `all` modifier, they can be simplified to just this:

```c
OnMainMenu : all
{
	"\![*]\q[Menu item 1,OnMenu1]\n"
	"\![*]\q[Menu item 2,OnMenu2]\n"
	"\![*]\q[Menu item 3,OnMenu3]\n"
	"\![*]\q[Menu item 4,OnMenu4]\n"
	"\![*]\q[Menu item 5,OnMenu5]\n"
}
```

Ahh... Clean, doesn't break syntax highlighting... This is the primary way I write menus.

Finally, one more example with our little visualization technique, to show off how I think of bracket nesting (in functions without a pool modifier).

```c
OnMultipleNestedBrackets
{
	"red"
	{
		"green"
		{
			"blue"
			"yellow"
		}
		{
			"purple"
			"orange"
		}
	}
}
```

See this example? Now again, this is probably not *exactly* how it works, but it is a useful mental model for me. First, we start with those innermost brackets. Step 1 is determining which of those options should be chosen.

```c
OnMultipleNestedBrackets
{
	"red"
	{
		"green"
		"blue"
		"purple"
	}
}
```

Oh cool! Looks like `blue` won over `yellow`, and `purple` won over `orange`. It's kind of like a tournament to me. Next, we're still in brackets, so now it has to choose between `green`, `blue`, and `purple`.

```c
OnMultipleNestedBrackets
{
	"red"
	"purple"
}
```

`purple` wins again! I'm not biased I swear. Anyways, now there are no other brackets left, so all that is left is for YAYA to pick between these two options and output them.

That frame of mind helped me to wrap my head around why my dialogue probabilities were all wonked up all the time. Try applying that to a dialogue pool like this!

```c
RandomTalk : nonoverlap
{
	"Hi!"
	if friendship >= 100
	{
		"You're such a cool friend!"
		"Thanks for hanging out with me!"
		"Besties~! ♥"
		"What're we gonna do today?"
		"What's up friendo!!"
		"Yo!"
		"Hey hey hey, it's my cool friend!"
		"I'm running out of things to say about my cool friend!"
		"friend friend friend friend friend"
	}
}
```

So many dialogues when friendship is high! Wow! Oh but wait, there are brackets around those dialogues... Off to the tournament they go! And the result, after one round...?

```c
RandomTalk : nonoverlap
{
	"Hi!"
	"What's up friendo!!"
}
```

... Oh.

Yeah. If you've ever seen your ghost output the same dialogues over and over even though they have lots of dialogues available, this is why. Welcome to hell. Add the `pool` modifier, it'll save your life! With the `pool` modifier added, it would look like this instead, when friendship is high.

```c
RandomTalk : nonoverlap
{
	"Hi!"
	"You're such a cool friend!"
	"Thanks for hanging out with me!"
	"Besties~! ♥"
	"What're we gonna do today?"
	"What's up friendo!!"
	"Yo!"
	"Hey hey hey, it's my cool friend!"
	"I'm running out of things to say about my cool friend!"
	"friend friend friend friend friend"
}
```

*Much* better.

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/00%20-%20Parameters.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/07%20-%20return%20and%20Output%20Candidates.md)
