# Module 01 - Basic Building Blocks

## Lesson 07 - Comparisons

[Next lesson >>](../module_01_basic_building_blocks/08_logical_operators.md)

[<< Previous Lesson](../module_01_basic_building_blocks/06_order_of_operations.md)

Next, we need to know about comparison operators. These are operators that compare two values, and tell you if their comparison is true or not. The most basic of these is the equality operator, `==`.

Before, we saw that writing a single equals sign performs an **assignment** operation. There is also the double equals sign, `==`, which performs a **comparison** operation. If the operands on both sides of the double equals sign are equal, then the result will be `1` (True). If they are not equal, then the result will be `0` (False).

**These two are very easy to mix up**, and even programmers with decades of experience write the wrong one by mistake sometimes. Just be mindful of it, and if your code isn't functioning properly, always double check that your equals signs are correct.

```c
OnEqual
{
	_i = 10
	_i == 10
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.Equal)

The output of the above function will be the integer `1`, since the value of `_i` is equal to `20`.

There is also the opposite of the equality operator, which is `!=`. This checks if two values are NOT equal, and returns `1` (True) if they are not equal, and `0` (False) if they are equal.

```c
OnNotEqual
{
	_i = 10
	_i != 20
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.NotEqual)

The above function will output the integer `1`, since the value of `_i` is *not* equal to `20`.

Next, we have comparison operators for greater than and less than. These are, as you might expect, be written with `>` and `<`. As with the equality operators, they will return a `1` if the statement is true, and `0` if it is false.

```c
OnLessThan
{
	_i = 10
	_i < 20
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.LessThan)

The above function will output `1`, since `_i` is less than `20`.

```c
OnGreaterThan
{
	_i = 10
	_i > 20
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.GreaterThan)

The above function will output `0`, since `_i` is *not* greater than `20`.

Note, **if the operands on both sides are equal, this will be considered false.** `2` is not greater than `2`, after all.

If you _do_ want to check if the operands are 'greater than or equal to', or 'less than or equal to', there are operators for that as well. They are `>=` and `<=`.

```c
OnLessThanOrEqual
{
	_i = 10
	_i <= 10
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.LessThanOrEqual)

The above function will output `1`, since `_i` is equal to `10`, even though it's not less than `10`.

```c
OnGreaterThanOrEqual
{
	_i = 10
	_i >= 10
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.GreaterThanOrEqual)

The above function will output `1`, since `_i` is equal to `10`, even though it's not greater than `10`.

Use whichever of these makes more sense to you. You may find that it varies depending on what sort of function you're writing.


Finally, there is one more set of operators, which are for strings. The `_in_` operator can be used to check if a string is within another string, and `!_in_` can likewise be used to check if a string is *not* within another string. Note that this check is case sensitive.

```c
OnStringIn
{
	"world" _in_ "Hello, world!"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.StringIn)

The above function will output `1`, because "world" is found in "Hello, world!"

```c
OnStringNotIn
{
	"earth" !_in_ "Hello, world!"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L7.StringNotIn)

The above function will output `1`, because the string "earth" is not found anywhere in "Hello, world!"

---

## Further Context

If you're like me and you have trouble remembering which sign is greater than and which sign is less than, hi! I have a tip that may or may not help!

I always read these signs from left to right, since that's the way English text is written. (If your language reads text from right to left, sorry!) The left side of the symbol is the one you want to pay attention to; is it wide, or is it narrow and pointy? If the wide side is first, then it's *greater* than. If the smaller side is first, it's *less* than. Similarly, some folks get confused whether the operators should be written like `>=` or `=>`. It's `>=`, because it's "greater than or equal to", and not "equal to or greater than"! ... These phrases stick in my brain and help me, but I can't guarantee they'll do anything for you.

Anyways, something you might want some more context for is the `>=` vs `>`, and `<=` vs `<`. Basically, `>=` and `<=` are *inclusive*, while `>` and `<` are *exclusive*. So a range of >= 10 and <= 15 includes the numbers 10, 11, 12, 13, 14, and 15. A range of > 10 and < 15 includes the numbers 11, 12, 13, and 14.

In general, you can pick whichever of these makes more sense to you. But sometimes, one just expresses an operation more clearly than the other.

```c
if boredom > 0
{
	boredom--
}
```

This code could be used in a mood system, to reduce the character's boredom when something is going on, by 1 point at a time. Here, we wouldn't want to use >=, because we want the value to stop at 0 and not go under. If we used >= here, we would have to express it as `if boredom >= 1`, which isn't quite as intuitive.

On the flip side, here's an example where the inclusive operators make more sense.

```c
if friendship >= 100
{
	"Heya friendo!"
}
else
{
	"Yo, what's up?"
}
```

Well, whether the inclusive operator makes more sense here is up to individual preference, I'm sure. But for me, I definitely prefer seeing the round number 100 there instead of having to write `if friendship > 99`. It just makes the numbers easier to work with in my head!

[Next lesson >>](../module_01_basic_building_blocks/08_logical_operators.md)

[<< Previous Lesson](../module_01_basic_building_blocks/06_order_of_operations.md)
