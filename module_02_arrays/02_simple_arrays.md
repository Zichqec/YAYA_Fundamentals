# Module 02 - Arrays

## Lesson 02 - Simple Arrays

[Next lesson >>](../module_02_arrays/03_multidimensional_arrays.md)

[<< Previous Lesson](../module_02_arrays/01_general_purpose_arrays_pt_2.md)

The other type of array is called a "simple" array. These arrays are just strings, but by adding indices, you can have YAYA treat the content of the string as different elements. By default, strings are **delimited** by commas, which means that the string is split up into elements by commas. Note also that these arrays will *only* store values as strings, they will not store any other data types.

```c
OnCreateSimpleArray
{
	_colors = "red,green,blue"
	_colors[1]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L2.CreateSimpleArray)

The output of the above function is `green`

You can also use characters other than commas to divide up the string. The character that is used as a divider in the array is called a **delimiter**. In order to specify a different delimiter, you can write it after the index number, in quotes. This works even if you specify a range of indices.

```c
OnSelectFromSimpleArray
{
	_colors = "red|green|blue"
	_colors[1,"|"]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L2.SelectFromSimpleArray)

The above function will output `green`

Note that delimiters are not restricted to a single character. `|-|`, `spaghetti`, and `68` are all valid delimiters. Any string of characters may be used. Also note that you can use single quotes instead of double quotes around the delimiter, if desired.

You can overwrite elements in simple arrays much the same as with general arrays. However, you cannot use the `,=` operator to add a new array element, since these are simply variables with a string data type. You *can,* however, use concatenation to add more onto the end of the string.

```c
OnAddToSimpleArray
{
	_colors = "red|green|blue"
	_colors += "|yellow"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L2.AddToSimpleArray)

The output of the above function will be `red|green|blue|yellow`

You could also use indices for finer control of where you insert a value, as before.

```c
OnInsertInSimpleArray
{
	_colors = "red|green|blue"
	_colors[1,'|'] += "|yellow"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L2.InsertInSimpleArray)

The above function will output `red|green|yellow|blue`

---

## Further Context

Ahh, simple arrays... some may not even want to call them arrays at all. However, they are very useful in some instances. We'll see in the next lesson, but since they don't have the behavior of general purpose arrays where nested arrays all become one array, that allows them to work around the occasional issue that is presented by that!

They are also a little quicker to write, if you don't need any data type other than strings, and don't need any of the more complicated operations.

One of the ways you may already have seen simple arrays are in what is colloquially called "double envelopes"! These are simply an function where the result that is picked is a simple array. Then some code breaks down the simple array, and the different pieces can be used in dialogue.

```c
RandomTalk : nonoverlap
{
	_worddefinition = WordDefinitions //This picks an element from the array and stores it in _worddefinition
	_word = _worddefinition[0] //This gets just the word
	_definition = _worddefinition[1] //This gets just the definition
	
	"Did you know that %(_word) means ""%(_definition)""?"
}

//A list of random words + definitions to be picked from. The first element of each is the word, and the second element of each is the definition for that word.
WordDefinitions
{
	"Cattywampus,askew"
	"Discombobulated,confused or disconcerted"
	"Kerfuffle,a commotion or fuss"
	"Macrosmatic,having a good sense of smell"
	"Ragazine,a magazine of inferior quality"
}
```

When should you use a general purpose array vs a simple array? Really, it's mostly up to you. If you need to store numbers, use a general purpose array. Otherwise, if you find a simple array is suitable for your needs and is quicker to type, then go for it. However, they do have one very important use that we will see in the next lesson, which general purpose arrays cannot do.


[Next lesson >>](../module_02_arrays/03_multidimensional_arrays.md)

[<< Previous Lesson](../module_02_arrays/01_general_purpose_arrays_pt_2.md)
