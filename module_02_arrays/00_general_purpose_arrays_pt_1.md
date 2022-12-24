# Module 02 - Arrays

## Lesson 00 - General Purpose Arrays Part 1

[Next lesson >>](../module_02_arrays/01_general_purpose_arrays_pt_2.md)

[<< Previous module](../module_01_basic_building_blocks/08_logical_operators.md)

Arrays, in short, are lists of values. In YAYA, there are (currently) two different types of arrays. The first one we will focus on is **general purpose arrays**, which are similar to what you will find in other programming languages.

General purpose arrays (sometimes translated as "generic arrays") are another type of variable. Except, instead of holding one value, they hold multiple values. This is useful for many things, from storing arbitrary amounts of data, to keeping your code cleaner by having fewer randomly named variables.

To create a general array, you must enclose your desired starting values in parenthesis, with the values separated by commas.

```c
OnCreateArray
{
	_colors = ("red","green","blue")
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.CreateArray)

The above function will output `red,green,blue`

Alternatively, you can initialize an empty general array with IARRAY.

```c
OnCreateEmptyArray
{
	_colors = IARRAY
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.CreateEmptyArray)

The above function will not output anything at all, because there is nothing in the array. However, this is not the same as setting `_colors` to an empty string with `""`, as we will soon see.

Note that arrays can hold integers, real numbers, and strings, or any mix of the three.

```c
OnMixedArray
{
	_array = (3,"red",2.7)
	_array
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.MixedArray)

The above function will output `3,red,2.7`

To add an element to the end of an array, you can use the `,=` operator.

```c
OnAddToArray
{
	_colors = IARRAY
	_colors ,= "red"
	_colors ,= "green"
	_colors ,= "blue"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.AddToArray)

The above function will output `red,green,blue`

To access each element of the array, you can write an index number in square brackets after the array name. Arrays are indexed from 0, which means the first element (red) will be index 0, the second element (green) will be index 1, and so on.

```c
OnSelectFromArray
{
	_colors = ("red","green","blue")
	_colors[1]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.SelectFromArray)

The above function will output `green`

You can also use variables or the output of functions as the index, so long as they are an integer.

```c
OnUseFunctionAsIndex
{
	_colors = ("red","green","blue")
	_colors[UsedAsIndex]
}

UsedAsIndex
{
	1 + 1
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.UseFunctionAsIndex)

The above function OnUseFunctionAsIndex will output `blue`, because  **returns** `2`, and index 2 of the `_colors` array is `blue`.

Note that you also don't have to store your arrays with a name for this to work; you can also use indices if you write the array directly.

```c
OnIndexDirectly
{
	("red","green","blue")[1]
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.IndexDirectly)

The above function will output `green`

You can use indices in combination with the `,=` operator to insert array elements at any point in the array.

```c
OnAssignInMiddle
{
	_colors = ("red","green","blue")
	_colors[1] ,= "yellow"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.AssignInMiddle)

The above function will output `red,green,yellow,blue`. Note that the "yellow" is inserted *after* element 1, "green", rather than at the start of the array. With this method, the added element will always be *after* the index number you specify.

You can also overwrite existing elements by assigning them a new value with `=`.

```c
OnChangeElement
{
	_colors = ("red","green","blue")
	_colors[2] = "yellow"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.ChangeElement)

The output of the above will be `red,green,yellow`

You can also assign new elements this way, by specifying an index number that doesn't exist. This works with any positive integer, even if it's not immediately after the previous element. Any inbetween elements that do not exist yet will be assigned as empty array elements.

```c
OnAssignOutOfRange
{
	_colors = ("red","green","blue")
	_colors[5] = "orange"
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.AssignOutOfRange)

The above will output `red,green,blue,,,orange`. Note the empty elements between "blue" and "orange".

You can remove array elements with IARRAY. This is not the same as setting an element to an empty string. If you set an element to an empty string, it will keep the positions of all the other elements. If you set an element to IARRAY, all the elements after it will shift back by 1 to fill in the empty spot.

```c
OnRemoveElement
{
	_colors = ("red","green","blue")
	_colors[1] = IARRAY
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.RemoveElement)

The above function will output `red,blue`.

```c
OnBlankElement
{
	_colors = ("red","green","blue")
	_colors[1] = ""
	_colors
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M2.L0.BlankElement)

The above function will output `red,,blue`. Note the empty string element in the middle.

---

## Further Context

Arrays are so important if you want to do anything complicated. They are one of my favorite things in programming because they unlocked so much for me once I figured them out! Arrays are your friend, don't fear them.

So, what might you want to do with an array? There are lots of things. Here are a few things I've used them for in my own ghosts:

* Flexible inventory system where items can be added when bought and removed once used
* Lists of available shells/dressups, for display in menus
* Tracking a list of what actions the user has done at least once in the day, so that they can be given extra friendship points/money the first time they do them (think daily activities)
* Tracking a list of what songs the user has played for the ghost, so that the ghost can remember and comment on songs it has heard before
* Creating a whole system of custom word lists the user can create, for use in minigames like hangman and word search

As you can see, there's *tons* of potential! The full potential of arrays will be unlocked once we start talking about loops in the next module, but for now, here's a simple example:

```c
//Gives a random ingredient
OnGiveIngredient
{
	_ingredient = ingredients //Pick a random ingredient and save it in a local variable, because we'll need it more than once
	IngredientsToday ,= _ingredient
	
	
	"Ooh, some %(_ingredient)?\w8 Thanks!"
}

//Displays all randomly ingredients that have been given in a list, in the order they were given
OnDisplayIngredients
{
	_display = ""
	foreach IngredientsToday; _ingredient
	{
		_display += "\![*]%(_ingredient)\n"
	}
	"%(_display)\n\![*]\q[Back,OnMainMenu]"
}

//Random ingredients to be picked from
ingredients
{
	"basil"
	"thyme"
	"sugar"
	"horseradish"
}
```

[Next lesson >>](../module_02_arrays/01_general_purpose_arrays_pt_2.md)

[<< Previous module](../module_01_basic_building_blocks/08_logical_operators.md)
