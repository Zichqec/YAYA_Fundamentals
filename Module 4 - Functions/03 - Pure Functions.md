# Lesson 03 - Pure Functions

[Next lesson >>]()

[<< Previous Lesson]()

**Pure functions** are functions which do not affect anything outside of themselves. They may take in arguments and output a modified version of the information they took in, but unless you assign the new value, nothing will be changed.

```c
OnPureFunction
{
	_num = 2
	Square(_num)
}

Square
{
	_argv[0] * _argv[0]
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L3.PureFunction)

The above function outputs the integer `4`. But because we didn't assign the new value to `_num`, `_num` still holds the original value of `2`

Pure functions are great for keeping your code clean, and having utility functions that you can reuse anywhere. Because you aren't editing variables all over the place in your code, it is also easier to avoid bugs that are hard to track down. Having your code be modular this way means you can test each individual function to find where the issue lies.

---

# Further Context

Pure functions are my favorite. They are beautiful things, and once you see the light you will never go back. Or at least, that's how it happened for me.

My code got *so* much cleaner and less buggy once I learned what pure functions were and why to use them. Imagine, instead of your code snaking out into terrifying spaghetti tendrils that get modified all over the place, it could all be modular! Let me show you an example.

```c
Shuffle
{
	_output = IARRAY
	if GETTYPE(_argv) == 4 //If it's an array. General purpose arrays only!
	{
		while ARRAYSIZE(_argv) > 0
		{
			_rand = RAND(ARRAYSIZE(_argv))
			_output ,= _argv[_rand]
			_argv[_rand] = IARRAY
		}
	}
	else //If it's anything else it'll be treated as a string
	{
		_argv = TOSTR(_argv)
		while STRLEN(_argv) > 0
		{
			_rand = RAND(STRLEN(_argv))
			_output += SUBSTR(_argv,_rand,1)
			_argv = ERASE(_argv,_rand,1)
		}
	}
	_output
}
```

The above function will shuffle arrays or strings. If it's an array, it will put the elements in a random order. If it's a string, it will put the characters in a random order. Note that simple arrays are treated as strings.

You will notice, this function does not change any global variables. Instead, it simply returns the array/string after it has shuffled it. Why is that? Why just output the modified input?

Well, this means it can be used like so:

```c
OnShufflePlaylist
{
	PlaylistArray = Shuffle(PlaylistArray)

}
```

When we write it this way, we are assigning `PlaylistArray` the value that was output by the Shuffle function, the newly shuffled playlist. Easy enough. But we don't *have* to assign it if we don't want to. Or, we could assign the output of this to a local variable, etc. We're not locked in to a specific way of using this function, it can be used in different ways according to our needs.

This also means that if we want to shuffle something else, like say, a list of words for a minigame, we can use the same function which we know works well for shuffling arrays. Because we don't have to rewrite the function keyed to our new specific use, we reduce the risk of introducing bugs.

The other reason I am fond of pure functions is that they are *very* shareable. If your function is suited to general purpose use, it is easy to share it with someone else who needs it! It's much more difficult to share code with others if you have to scrape out all the parts of it that rely on your ghost's particular setup, and then instruct them on how it must be set up in theirs.

[Next lesson >>]()

[<< Previous Lesson]()