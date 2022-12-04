Different operations have different levels of priority. Multiplication, division, and modulus have higher priority than addition and subtraction, which have higher priority than assignment.

```c
OnAssignAddition
{
	_i = 10 + 2
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L6.AssignAddition")

The above function will output the integer `12`. This is because `10 + 2` is run first, resulting in 12, and *then* the 12 is assigned to `_i`.

When there are multiple operations of the same priority, they are run from left to right.

```c
OnAssignUninitializedVar
{
	_i = _j = 10
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L6.AssignUninitializedVar")

The above function will not output anything. `_j` will contain the integer `10`, but `_i` will be empty. This is because `_i = _j` is run first, but `_j` doesn't contain anything at this time. Then, `_j = 10` is run, and the value is assigned to `_j`.


You can give operations a higher priority level by surrounding them in parenthesis.

```c
OnAssignResult
{
	_i = (_j = 10)
	_i
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L6.AssignResult")

The above function will output the integer `10`. Both `_i` and `_j` will contain the integer `10`. Since these are both assignment operations they have the same priority, but the parenthesis raise the priority level of `_j = 10`. Therefore, `_j = 10` is run first, and `_i = _j` is run afterwards, assigning `_i` the value of `_j`.

The exact priority depends on how deeply nested in parenthesis an operation is. So, this can get pretty tricky. (This example is taken from [AYAYA](https://emily.shillest.net/ayaya/index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E6%96%87%E6%B3%95/4.%E6%BC%94%E7%AE%97#q7b01c6f).)

```c
OnIncorrectOrder
{
	_output = (_i = 10) + (2 * (_i + 10))
	_output
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L6.IncorrectOrder")

The above function will output the string `"10"`, rather than the integer `50` as you might expect. This is because even though `_i = 10` is enclosed in parenthesis, it does not raise the priority high enough for it to run before the other operations. `_i + 10` will run first because it is the most deeply nested. Because `_i` is not initialized yet, YAYA will consider it an empty string, and will convert the `10` to a string also and perform concatenation. So `_i` will hold the string `"10"`.

Next, the assignment operation and multiplication operation are both on the same level of parenthesis, but multiplication has higher priority than assignment. So, `2 * "10"` (Or `(2 * ("10")` as it's written above) will run. Multiplication on a string is not a valid operation, so the result will be an empty string.

Next, it will run `_i = 10`, since that is the only operation left in parenthesis. This will assign `10` to `_i`.

Finally, the result of the two groups will be added together. So, we are adding `10` to an empty string. Because we are adding an integer to a string, the integer will be converted to a string, and the results will be concatenated. This results in a string of `"10"`, rather than the integer `10`.

To change this to the desired output of the integer `50`, we need to add enough parenthesis to raise the priority of `_i = 10` above the other operations.

```c
OnCorrectOrder
{
	_output = (((_i = 10))) + (2 * (_i + 10))
	_output
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L6.CorrectOrder")

The above function will output the integer `50`. `_i = 10` runs first since it is most deeply nested. Then `_i + 10` runs, resulting in the integer `20`. Then, it is multiplied by `2` to get `40`, and the whole result is added to the `10` contained in `_i` that we assigned on the left.

Note that having two sets of parenthesis around `_i = 10` would not be enough. This is because it would put `_i = 10` on the same level as the `_i + 10`, and addition has higher priority than assignment.

---

# Footnotes

Order of operations can be tricky. It took me a while of staring at the AYAYA wiki to understand how that last example works! It's not really a practical example of anything, it's just for the sake of demonstration.

I don't really have a good context example at this point, because most of what I do doesn't involve operations this complicated. But, we will see order of operations come up again soon! But next time, it'll be without the tricky math.

[Next lesson>>]()

[<< Previous Lesson]()