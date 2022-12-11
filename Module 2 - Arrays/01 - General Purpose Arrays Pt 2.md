# 01 - General Purpose Arrays Part 2


[Next lesson >>]()

[<< Previous Lesson]()

Now, we will cover more complicated array operations.

There is another way to manipulate elements in general arrays in YAYA. YAYA does not (currently) support multidimensional arrays. Instead, if you write an array inside of an array, the array elements will be combined into a brand new array.

```c
OnCombineArrays
{
	_colors = ("red",("green","yellow"),"blue")
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.CombineArrays)

The output of the above function will be `red,green,yellow,blue`

This means, you can also add and insert array elements using this method.

```c
OnCombineAtEnd
{
	_colors = ("red","green","blue")
	_colors = (_colors,"yellow") //Equivalent of (("red","green","blue"),"yellow")
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.CombineAtEnd)

The output of the above function will be `red,green,blue,yellow`

```c
OnCombineAtStart
{
	_colors = ("red","green","blue")
	_colors = ("yellow",_colors) //Equivalent of ("yellow",("red","green","blue"))
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.CombineAtStart)

The output of the above function will be `yellow,red,green,blue`

This can also be combined with index numbers for finer control.

```c
OnCombineInMiddle
{
	_colors = ("red","green","blue")
	_colors[1] = (_colors[1],"yellow") //Equivalent of ("green","yellow"), which results in ("red",("green","yellow"),"blue")
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.CombineInMiddle)

The output of the above will be `red,green,yellow,blue`


You can also write ranges of numbers in the index. First, specify the index number to start the range at, and then the index number to end the range at, inclusive. So `[2,6]` covers 2, 3, 4, 5, and 6. If index numbers are specified that don't have corresponding elements, they will be ignored.

```c
OnGetRangeOfElements
{
	_hues = ("red","orange","yellow","green","cyan","blue","purple","magenta")
	_colors = _hues[2,6]
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.GetRangeOfElements)

The output of the above function will be `yellow,green,cyan,blue,purple`

Note that assigning a range of indices to a single value will collapse the whole range into a single element.

```c
OnCollapseRangeOfElements
{
	_hues = ("red","orange","yellow","green","cyan","blue","purple","magenta")
	_hues[2,6] = "black"
	_hues
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.CollapseRangeOfElements)

The output of the above function will be `red,orange,black,magenta`


Finally, you can do simple operations on arrays. This includes addition, subtraction, multiplication, division, modulus, and concatenation. Any of these operations will be computed for **all** array elements.

```c
OnMultiplyArray
{
	_evens = (2,4,6,8)
	_evens *= 2
	_evens
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.MultiplyArray)

The output of the above function will be `4,8,12,16`. Each value of the array has been multiplied by 2.

```c
OnConcatenateArray
{
	_colors = ("red","green","blue")
	_colors += "-ish"
	_colors
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.ConcatenateArray)

The output of the above function will be `red-ish,green-ish,blue-ish`. Each string in the array has had "-ish" concatenated onto the end of it.

If you perform concatenation with two arrays, it will create every possible combination of the two.

```c
OnConcatenateTwoArrays
{
	_let = ("A","B","C")
	_num = ("1","2","3")
	_let + _num
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M2.L1.ConcatenateTwoArrays)

The output of the above function will be `A1,A2,A3,B1,B2,B3,C1,C2,C3`

---

# Further Context

All of these array operations are a little more niche, at least in my experience. As a matter of fact, I don't believe I have any examples from my already-existing work to draw from. If you come up with some practical uses of these, let me know and I would love to feature them here!

Anyways, the one thing you definitely *should* pay close attention to is that behavior where nested arrays all become part of the same array. That will show up later when we learn about functions. Sometimes it might get in your way if you're not expecting it, so just know it happens.

Also note, before we move on, that this module may get new sections added in the future! This one in particular you should watch out for.

[Next lesson >>]()

[<< Previous Lesson]()