# Module 05 - Common Functions

## Lesson 01 - Type Manipulation

[Next lesson >>](../module_05_common_functions/02_variable_manipulation.md)

[<< Previous lesson](../module_05_common_functions/00_string_manipulation.md)

Next up is type manipulation. Sometimes, you have variables stored as one type, and you need to convert them to another.

First of all, the `GETTYPE` function. You can use `GETTYPE` to check what type a variable is. It takes one argument, which is the variable which you want to check the type of.

It will return `1` for integers, `2` for real numbers, `3` for strings, and `4` for arrays. `0` means an internal error occurred.

```c
OnGetType
{
	_some_string = "123.4"
	GETTYPE(_some_string)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.GetType)

The above function will return `3`

Now, what if we wanted that string to be an integer instead, so we could do math with it? `TOINT` is a function that takes a single argument, and attempts to convert it into an integer. If it fails, because the data it was given cannot be converted, it will output `0`. Otherwise, it will output the new integer.

Note that if you give it a real number, anything after the decimal point will be lost.

```c
OnConvertToInt
{
	_some_string = "123.4"
	_some_string = TOINT(_some_string)
	_some_string += 2
	_some_string
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.ConvertToInt)

The output of the above function will be `125`

`TOREAL` is much the same, but it converts other data types to real numbers. It will return `0.000000` if it fails.

```c
OnConvertToReal
{
	_some_string = "123.4"
	_some_string = TOREAL(_some_string)
	_some_string -= 0.2
	_some_string
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.ConvertToReal)

The output of the above function will be `123.200000`

There is also `TOSTR`, which converts other data types to strings. If `TOSTR` fails, it will return nothing.

```c
OnConvertToString
{
	_some_int = 123
	_some_int += 2
	_some_int = TOSTR(_some_int)
	_some_int += "!"
	_some_int
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.ConvertToString)

The output of the above function will be `125!`

Note that `TOSTR` can also be used to convert a general purpose array to a simple array separated by commas.

```c
OnConvertArrayToString
{
	_colors = ("red","blue","green")
	_colors = TOSTR(_colors)
	GETTYPE(_colors)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.ConvertArrayToString)

The above function will output `3` (General purpose arrays and simple arrays look the same when output to a ghost's balloon, so it is easier to show this change with `GETTYPE`.)

Finally, there is `SPLIT`. `SPLIT` converts a string to a general purpose array, by splitting up the string into different elements. You must specify which character/string it should split on (the character that the simple array is using as the delimiter). It takes 2 arguments; the string to split, and which character it should split on.

```c
OnConvertStringToArray
{
	_colors = "red,blue,green"
	_colors = SPLIT(_colors,",")
	GETTYPE(_colors)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L1.ConvertStringToArray)

The above function will output `4`

---

## Further Context

Changing the types of variables isn't something you usually want to do too often. At least when global variables are involved, it's important to have them consistently be the same type. But sometimes, you do need to switch things around. Particularly references, and especially if you have auto type convert off (we'll cover that later). It is also very important for multidimensional arrays, if you are storing numbers in them, since the arrays can only actually hold information as strings.

`SPLIT` and `TOSTR` for arrays is also very important. As mentioned previously, sometimes you need to make a general purpose array into a simple array, to avoid the nesting behavior. Or maybe you're working with part of a multidimensional array, and you really need it to be a general purpose array while you're modifying its elements.

```c
OnEditMultiArray
{
	_array = "A|1,B|2,C|3"
	_to_change = SPLIT(_array[1],"|")
	_to_change[1] = IARRAY
	_array[1] = TOSTR(_to_change)
	_array
}
```

Here's a modified version of an example used back in the arrays module. You can see that this time, I use SPLIT and TOSTR to convert it to a general purpose array (so I can use IARRAY) and then back again.

[Next lesson >>](../module_05_common_functions/02_variable_manipulation.md)

[<< Previous lesson](../module_05_common_functions/00_string_manipulation.md)
