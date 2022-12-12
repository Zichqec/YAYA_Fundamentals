# 03 - Array Manipulation

[Next lesson >>]()

[<< Previous lesson]()

Arrays also have a few handy functions. First, we have already talked briefly about `IARRAY`. This is a function which takes no arguments, and simply generates a blank array.

```c
OnIArray
{
	_somearray = ("red","green","blue")
	_somearray[1] = IARRAY //Equivalent to ("red",(),"blue"), which will simply become the array ("red","blue") when combined
	_somearray
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L3.IArray)

The above function will output `red,blue`, as the "green" entry has been erased.

Next, there is `ARRAYSIZE`. `ARRAYSIZE` takes an array as an argument, and returns the number of elements in it.

```c
OnCheckArraySize
{
	_somearray = ("red","green","blue")
	ARRAYSIZE(_somearray)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L3.CheckArraySize)

The above function will output `3`

There is also `ASEARCH`, which can be used to search an array for a particular element. You give it two arguments; the **key**, which is the value to search for, and the **array** that you want to search in. It will return the index number of the first result it finds, or `-1` if it doesn't find anything. Note that it must be a perfect match for the whole element. (If you want to find a partial string, try the `RE_ASEARCH` function that we will cover in a later module).

```c
OnSearchArray
{
	_somearray = ("red","green","blue")
	ASEARCH("green",_somearray)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L3.SearchArray)

The above function will output `1`, since that is the position of the element containing "green".

Additionally, there is `ASEARCHEX`. `ASEARCH` only returns a single result, the first match it finds. But `ASEARCHEX` will search the entire array, and return an array of indices where matches were found.

```c
OnFindMultipleInArray
{
	_somearray = ("red","green","blue","red","green","blue","red","green","blue")
	ASEARCHEX("green",_somearray)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L3.FindMultipleInArray)

The above function will output `1,4,7`, the index numbers of each element that contains the string "green".

---

# Further Context

ARRAYSIZE and ASEARCH are favorites of mine! These were what made me realize what kinds of things I could really pull off with arrays. I use them all the time, *especially* ASEARCH. I've used it several times throughout code examples in this guide, even!

Despite that, for some reason I can never keep the order of arguments in ASEARCH straight. The proper order is "key, array". And it makes sense if you think about it; it's like I mentioned in the last module, if you have an array as an argument, the length of it could be anything. So, the key has to go first, that way it knows which one it is. Or it's easier to handle that way, anyways.

Here's a practical example of ASEARCH. One of my WIP ghosts has a setup where you can interact with her in various ways (playing minigames, playing music, changing dressup items, etc.), and each day you will get bonus friendship/money the *first* time you do any of these actions. That way, it encourages the user to do lots of varied things, instead of spamming one option.

The way this works is, she has an array of TodaysActions. When the user does an action, she will check if that action is *already* in the array. If it is, then she gives them the normal amount of points. If it is *not* in the array, then she will give extra points. And the array is reset every time she boots.

```c
OnWinHangman
{
	if ASEARCH("Won hangman",TodaysActions) == -1
	{
		TodaysActions ,= "Won hangman"
		money += 10
		friendship += 2
	}
	money += 5
	friendship += 1
	
	"Congrats, you got it!"
}
```

This is a simplified rendition. With this setup, the user gets 5 money and 1 friendship point for winning hangman normally. But if it's the first time they've won hangman that day, they will get a total of 15 money and 3 friendship points.

[Next lesson >>]()

[<< Previous lesson]()