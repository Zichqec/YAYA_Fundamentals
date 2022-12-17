# Lesson 06 - Order of Operations

[Next lesson >>](../module_01_basic_building_blocks/07_comparisons.md)

[<< Previous Lesson](../module_01_basic_building_blocks/05_operators.md)

Different operations have different levels of priority. Multiplication, division, and modulus have higher priority than addition and subtraction, which have higher priority than assignment.

```c
OnAssignAddition
{
	_i = 10 + 2
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L6.AssignAddition)

The above function will output the integer `12`. This is because `10 + 2` is run first, resulting in 12, and *then* the 12 is assigned to `_i`.

When there are multiple operations of the same priority, they are run from left to right.

```c
OnAssignUninitializedVar
{
	_i = _j = 10
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L6.AssignUninitializedVar)

The above function will not output anything. `_j` will contain the integer `10`, but `_i` will be empty. This is because `_i = _j` is run first, but `_j` doesn't contain anything at this time. Then, `_j = 10` is run, and the value is assigned to `_j`.


You can give operations a higher priority level by surrounding them in parenthesis.

```c
OnAssignResult
{
	_i = (_j = 10)
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L6.AssignResult)

The above function will output the integer `10`. Both `_i` and `_j` will contain the integer `10`. Since these are both assignment operations they have the same priority, but the parenthesis raise the priority level of `_j = 10`. Therefore, `_j = 10` is run first, and `_i = _j` is run afterwards, assigning `_i` the value of `_j`.


The exact order depends on how deeply nested in parenthesis each operation is. For example, `((_i = 10))` would run before `(_i = 10)`. However, note that this is also affected by the type of operation. So `((_i = 10))` runs *after* `((_i * 10`)), because even though they are on the same level of parenthesis, multiplication takes priority over assignment.

---

# Further Context

Order of operations can be tricky. Unfortunately, I don't really have a good context example at this point, because most of what I do doesn't involve operations this complicated. But, we will see order of operations come up again soon with something I *do* have experience with!

If you've got a good example of order of operations that I could show here, particularly with nesting in parenthesis, do get in touch.

[Next lesson >>](../module_01_basic_building_blocks/07_comparisons.md)

[<< Previous Lesson](../module_01_basic_building_blocks/05_operators.md)
