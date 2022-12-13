# Lesson 04 - for Loops

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/05%20-%20foreach%20Loops.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/03%20-%20while%20Loops.md)

`for` loops can seem a bit more intimidating at first, but they are generally a little safer than while loops since you write all of the conditions for the loop in the declaration at the top. This makes it less likely you will accidentally write an infinite loop.

A `for` loop's declaration has 3 parts: the instantiation, the condition, and the incrementer. These are separated by semicolons.

The **instantiation** is a variable that is created or a function that is run before the loop begins.

The **condition** is much like the condition of a `while` loop; if the condition is true, the loop will continue to run until the condition is not true.

The **incrementer** is an action that happens when the end of the loop body is reached, before it begins to run again.

```c
OnFor0to10
{
	_display = ""
	for _i = 0; _i < 10; _i++
	{
		_display += _i
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L4.For0to10)

The output of the above function will be the string `0123456789`

As you can see, the declaration of the `for` loop looks a bit more complicated than the `while` loop. However, there is also no need to add separate lines of code to manage the `_i` variable. This way, you can see all the conditions for the loop up top, no matter how much code is inside it.

`_i = 0` is the instantiation. This creates a new variable called `_i`, and sets it to `0`. Next is the condition, `_i < 10`. This means that the loop will continue to run until `_i` is greater than or equal to 10. And finally, `_i++` is the incrementer. Every time the end of the loop is reached, `_i` will be incremented by 1.

It is still very possible to create infinite loops with for loops. If the `_i++` was swapped for `_i--`, the loop would continue to run forever, because `_i` would never be greater than or equal to 10.

---

# Further Context

I used to be really scared of `for` loops, and I used `while` loops for everything. But then I realized it's mostly just a way of making the code cleaner by putting the basic loop handling all at the top, and now I barely ever use `while`. Funny how that happens! Anyways, what I'm saying is, `for` loops are lovely, even if it takes you a little to warm up to them. But really, you can use whichever makes more sense for you.

Here's an example of a `for` loop in one of my ghosts. This for loop creates a progress bar display while doing network updates.

```c
OnUpdate.OnDownloadBegin
{
	_progress = TOINT(reference1) + 1
	_total = TOINT(reference2) + 1

	"\0\s[0]\b2\_qDownloading %(reference0)...\n\n\f[name,courier new]"
	--
	_display = ""
	for _i = 0; _i < _total; _i++
	{
		_empty = "□" //Files that have not been downloaded yet
		_filled = "■" //Files that have already been downloaded

		//If _i is less than the number of the file we're currently downloading, this will pick the filled character
		//Otherwise, it'll pick the empty character
		_display += (_empty,_filled)[_i < _progress]
	}
	--
	"%(_display)\n\n%(_progress)/%(_total)\e"
}
```

This is a really simple loop. It just runs for the number of total files in the update, and picks the appropriate empty/filled character to display based on what file this is! The result is a progress bar that looks like this: `■■■■□□□□□□`

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/05%20-%20foreach%20Loops.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/03%20-%20while%20Loops.md)