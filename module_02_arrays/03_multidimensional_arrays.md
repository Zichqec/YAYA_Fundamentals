# Module 02 - Arrays

## Lesson 03 - Multidimensional Arrays

[Next module >>](../module_03_flow_control/00_if_elseif_else.md)

[<< Previous Lesson](../module_02_arrays/02_simple_arrays.md)

Finally, there are **multidimensional** arrays. YAYA does not (currently) support true multidimensional arrays, but you can use simple arrays like multidimensional arrays. A multidimensional array is an array where each element is itself another array.

To create a multidimensional array, you will need two different delimiters. Then, when you want to retrieve a value, you can specify two indices, one after another in separate square brackets, and specify the delimiters as appropriate.

```c
OnSelectFromMultiArray
{
	_array = "A|1|#,B|2|$,C|3|%"
	_array[1][0,"|"]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L3.SelectFromMultiArray)

The output of the above function will be `B`. This is because `_array[1]` outputs `B|2|$`, and then we access that smaller string using | as the delimiter, and extract the `B` since it is element 0. Remember that if no delimiter is specified, it uses comma by default.

It may be helpful to think of two dimensional arrays like a grid. The above array can be visualized in this way:

```
       [0] [1] [2]
[0,"|"] A   B   C
[1,"|"] 1   2   3
[2,"|"] #   $   %
```

You can create as many delimiters as you like to add as many dimensions as you like. But be warned that past 3 dimensions, it becomes much more difficult to grasp.

```c
On3dArray
{
	_array = "red:1|green:2|blue:3,apple:A|orange:B|pear:C,broccoli:X|celery:Y|corn:Z"
	_array[1][2,"|"][0,":"]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L3.3dArray)

The above function will output `pear`. `_array[1]` is `apple:A|orange:B|pear:C`, then the `[2,"|"]` of that results in the substring `pear:C`, and then the `[0,":"]` on that final string results in `pear`.

The limitations of these multidimensional arrays are that *everything is always stored as a string*, as mentioned before. Also, *you cannot assign values when specifying multiple indices.* If you want to assign a new value to a multidimensional array, you must extract the part you want to change, change it, then reassemble the array.

```c
OnEditMultiArray
{
	_array = "A|1,B|2,C|3"
	_to_change = _array[1]
	_to_change[0,"|"] = "X"
	_array[1] = _to_change
	_array
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L3.EditMultiArray)

The above function will output `A|1,X|2,C|3`

You can also combine general arrays with simple arrays to create multidimensional arrays.

```c
OnCreateMultiFromArrays
{
	_rgb = "red,green,blue"
	_cmy = "cyan,magenta,yellow"
	_colors = (_rgb,_cmy)
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L3.CreateMultiFromArrays)

The above function will output the array `("red,green,blue","cyan,magenta,yellow")` (Displayed in the balloon as `red,green,blue,cyan,magenta,yellow`, but these are two separate array elements). You could access individual elements of the array the same way as with the pure simple arrays. However, as long as you use commas, you will not need to specify a delimiter in your indices unless you add a third dimension. This is because general purpose arrays never need a delimiter specified, and the simple arrays are using commas, so they don't need a delimiter specified either.

With the above function, `_colors[1][2]` would return `yellow`, since `cyan,magenta,yellow` is element 1 of the general array, and `yellow` is element 2 of that simple array.

---

## Further Context

Multidimensional arrays are a bit of a pain to work with at times, since you can't edit them directly. However, they do allow you to do very powerful things. Some purposes for multidimensional arrays:


* Storing several different pieces of data about multiple different characters, all in one array
* A shop setup where each item is a part of an array, and also has an array of data specifying its price, flavor text, availability conditions, and more.
* A todo list system, where the first element of each array is the name of the list, and each element after is a task to be completed


This is just a small sample of ideas to get you thinking, there are many more things you can do with this! Just make certain you pick good delimiters; if you are letting the user store arbitrary data in an array, you have to account for the fact that they just might input the character you are using as a delimiter, and break your whole setup. So, you need a plan to deal with that.

I'll talk about it more in a future module, but `C_BYTE1` is my favorite delimiter. In ghosts specifically, this sequence types a 0x01 character, which is something profoundly unlikely to end up in an input box somehow unless the user is deliberately trying to break things. The base dic files for ghosts use it for this reason, I believe. So, I have co-opted it into my own code.

My other favorite is the `|` character, as you can see above. This one is a pretty good visual indicator of different elements, and for cases where you're not dealing with user input, it's usually sufficient. It doesn't appear in words or sentences, and it's not a valid character in filenames, which is very handy if you're dealing with files.

Here is a real example of a SHIORI event that outputs a multidimensional array! A 3 dimensional array, in fact. In **OnNotifyDressupInfo**, a reference variable is generated for each dressup that the ghost has. So this is already one array, technically. (In YAYA, references *are* actually stored as an array, but we won't worry about that for now.) Then, each reference variable contains an array of data about that dressup. This information is delimited by C_BYTE1. And finally, the "option" section of each array may have multiple options, which are delimited by commas.

The following code combs through each reference to find all of the *active* dressups, and makes a list of them in a new array.

```c
//Each reference has data stored in this order:
//Character ID, category name, part name, option, valid / invalid 0, thumbnail path
OnNotifyDressupInfo
{
	currentdressups = IARRAY
	
	//Has to be reference.raw because parts of this are delimited with C_BYTE1 - this is to do with auto type convert, more on that in a later module!
	foreach reference.raw; _dressup
	{
		if _dressup[4,C_BYTE1] == 1 //If this dressup is currently in use
		{
			currentdressups ,= _dressup[0,2,C_BYTE1]
		}
	}
}
```

The array created by this function will list each dressup by which character it belongs to, what category it's in, and what the name of that specific dressup is.

[Next module >>](../module_03_flow_control/00_if_elseif_else.md)

[<< Previous Lesson](../module_02_arrays/02_simple_arrays.md)
