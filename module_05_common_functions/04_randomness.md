# Module 05 - Common Functions

## Lesson 04 - Randomness

[Next lesson >>](../module_05_common_functions/05_eval.md)

[<< Previous lesson](../module_05_common_functions/03_array_manupulation.md)

There is no true randomness in programming. Not without using something like random.org's atmospheric noise randomness. However, YAYA has pseudo-randomness that gets close enough for most purposes that you'll probably be using this language for.

First, there is the `RAND` function. `RAND` takes 1 argument, an integer of **how many** random numbers you want it to draw from. If you specify `3`, the outputs can be `0`, `1`, or `2`. If you specify `5`, then the outputs can be `0`, `1`, `2`, `3`, or `4`. If you don't specify a maximum, it will use the maximum integer limit instead.

```c
OnRandomNumber
{
	_rand = RAND(10)
	
	"I'm thinking of the number... %(_rand)"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L4.RandomNumber)

The above function will output a string like `I'm thinking of the number... 6`, but the number will be a random number from 0 to 9.

If you would like the numbers output in this example to be from 1 to 10, you could use RAND(10) + 1 instead. Use whichever feels more intuitive to you.

Being that it is a pseudo-random number generator, you can change what seed it uses. If you don't specify a seed, it will use the system time. But if you want to specify one, you can use the `SRAND` option to set it to whatever you like; be it an integer, real number, or string.

```c
OnChangeRandomSeed
{
	void SRAND(0)
	_rand = RAND(10)
	
	"I'm thinking of the number... %(_rand)"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L4.ChangeRandomSeed)

The above function will always output `I'm thinking of the number... 7`, because we are setting the seed each time before we run it. It is advised to be careful with this function, as some of the base dic files in various libraries may make use of `RAND`. (Again, we'll cover what libraries are later, but you will almost certainly be using one.)

Next, there is `ANY`. `ANY` is a function that works on arrays, both general purpose arrays and simple arrays. It simply selects and returns a random element of the array.

```c
OnRandomArrayElement
{
	_colors = ("red","green","blue")
	_color = ANY(_colors)
	
	"My favorite color is %(_color)!"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L4.RandomArrayElement)

The above function will output either `My favorite color is red!`, `My favorite color is green!`, or `My favorite color is blue!`, at random.

`ANY` is handy for quickly choosing a random element, but sometimes you want to manipulate the element it chose. To accomplish this, you can get the index number of the last chosen element with `LSO`, which stands for **Last Selection Order**.

```c
OnTwoRandomElements
{
	_colors = ("red","green","blue")
	_color1 = ANY(_colors)
	_colors[LSO] = IARRAY //Erase the chosen color from the array so it can't be picked again
	_color2 = ANY(_colors)
	
	"My favorite color is %(_color1)! Oh, but I also like %(_color2)..."
	
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L4.TwoRandomElements)

The above function will output the string with random colors chosen, such as `My favorite color is blue! Oh, but I also like red...`. However, because we erase the first color that is picked from the array, we prevent it from being chosen a second time. This prevents awkward outputs like `My favorite color is blue! Oh, but I also like blue...`

---

## Further Context

There is a common pitfall I have seen folks run into when using `RAND`, so I will warn you of it now. If you want to use a random number in a stack of if/elseifs, *don't write the function multiple times.* Each time you write it, it will generate a *new* random number. So for example...

```c
OnRandom
{
	if RAND(10) == 0
	{
		"Something rare"
	}
	elseif RAND(10) <= 2
	{
		"Something uncommon"
	}
	elseif RAND(10) <= 5
	{
		"Something else uncommon"
	}
	else //6 and up
	{
		Something common"
	}
}
```

This may look simple, but it is deceptive. For you see, if we use our visualization technique...

```c
OnRandom
{
	if 9 == 0
	{
		"Something rare"
	}
	elseif 7 <= 2
	{
		"Something uncommon"
	}
	elseif 3 <= 5
	{
		"Something else uncommon"
	}
	else //6 and up
	{
		Something common"
	}
}
```

Hm! That seems not right. This is the equivalent of throwing 3 separate dice and seeing if any of them match (but in a particular order), instead of rolling a single dice and seeing which option it picked. In this example it probably doesn't matter too much, but it can mess other functions up very badly, and I highly recommend avoiding this.

The better way to do this is to assign the output of a single `RAND` to a local variable, and then check *that*.

```c
OnRandom
{
	_rand = RAND(10)

	if _rand == 0
	{
		"Something rare"
	}
	elseif _rand <= 2
	{
		"Something uncommon"
	}
	elseif _rand <= 5
	{
		"Something else uncommon"
	}
	else //6 and up
	{
		Something common"
	}
}
```

Now, if we visualize that...

```c
OnRandom
{
	_rand = RAND(10)

	if 4 == 0
	{
		"Something rare"
	}
	elseif 4 <= 2
	{
		"Something uncommon"
	}
	elseif 4 <= 5
	{
		"Something else uncommon"
	}
	else //6 and up
	{
		Something common"
	}
}
```

Much better, right? Now the number is consistent throughout.

[Next lesson >>](../module_05_common_functions/05_eval.md)

[<< Previous lesson](../module_05_common_functions/03_array_manupulation.md)
