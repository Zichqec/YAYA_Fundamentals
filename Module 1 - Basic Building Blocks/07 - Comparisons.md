# Lesson 07 - Comparisons

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/08%20-%20Logical%20Operators.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/06%20-%20Order%20of%20Operations.md)

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

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.Equal")

The output of the above function will be the integer `1`, since the value of `_i` is equal to `20`.

There is also the opposite of the equality operator, which is `!=`. This checks if two values are NOT equal, and returns `1` (True) if they are not equal, and `0` (False) if they are equal.

```c
OnNotEqual
{
	_i = 10
	_i != 20
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.NotEqual")

The above function will output the integer `1`, since the value of `_i` is *not* equal to `20`.

Next, we have comparison operators for greater than and less than. These are, as you might expect, be written with `>` and `<`. As with the equality operators, they will return a `1` if the statement is true, and `0` if it is false.

```c
OnLessThan
{
	_i = 10
	_i < 20
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.LessThan")

The above function will output `1`, since `_i` is less than `20`.

```c
OnGreaterThan
{
	_i = 10
	_i > 20
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.GreaterThan")

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

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.LessThanOrEqual")

The above function will output `1`, since `_i` is equal to `10`, even though it's not less than `10`.

```c
OnGreaterThanOrEqual
{
	_i = 10
	_i >= 10
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L7.GreaterThanOrEqual")

The above function will output `1`, since `_i` is equal to `10`, even though it's not greater than `10`.


Use whichever of these makes more sense to you. You may find that it varies depending on what sort of function you're writing.

---

# Footnotes

If you're like me and you have trouble remembering which sign is greater than and which sign is less than, hi! I have a tip that may or may not help!

I always read these signs from left to right, since that's the way English text is written. (If your language reads text from right to left, sorry!) So I think of the first part of the symbol, the left side, as matching with the first word in 'greater than' or 'less than'. Greater than has the wide end on the left! GREATER than. >. Less than has the small end on the left. less THAN. <. ... This makes a lot of sense in my head, I swear.

Anyways, something you might want some more context for is the `>=` vs `>`, and `<=` vs `<`. Basically, >= and <= are *inclusive*, while > and < are *exclusive*. So a range of >= 10 and <= 15 includes the numbers 10, 11, 12, 13, 14, and 15. A range of > 10 and < 15 includes the numbers 11, 12, 13, and 14.

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

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/08%20-%20Logical%20Operators.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/06%20-%20Order%20of%20Operations.md)