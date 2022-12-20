# Module 01 - Basic Building Blocks

## Lesson 08 - Logical Operators

[Next Module >>](../module_02_arrays/00_general_purpose_arrays_pt_1.md)

[<< Previous Lesson](../module_01_basic_building_blocks/07_comparisons.md)

Now then, we know all of the comparison operators, but right now they are very simple. What if we need to check multiple things at once? There are a few additional operators to help with this.

First of all, we want to may check if more than one thing is true. We can do this by chaining comparisons together with the AND operator, `&&`.

```c
OnLogicalAnd
{
	_i = 10
	_j = 20
	
	_i == 10 && _j == 20
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.LogicalAnd)

The above function will output `1`, since `_i` is equal to `10` **and** `_j` is equal to `20`.

As you can see, we combined two different checks. The operation will only be considered true if *both* operations on either side of the && are true.

You can use as many of these as you like, as well.

```c
OnMultipleAnds
{
	_a = 1
	_b = 2
	_c = 3
	
	_a == 1 && _b == 2 && _c == 3
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.MultipleAnds)

The above function will output `1`, since the values all match what the operation is checking for.


Sometimes, you want to check if either condition is true, but without requiring that both are true. You can accomplish this with the OR operator, `||`.

```c
OnLogicalOr
{
	_i = 10
	_j = 20
	
	_i == 10 || _j == 10
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.LogicalOr)

The above function will output `1`. Even though `_j` is not equal to `10`, `_i` *is* equal to `10`.

An OR operation will be considered true if *either* of the operations evaluates to true.

You can also chain multiple of these together.

```c
OnMultipleOrs
{
	_a = 1
	_b = 2
	_c = 3
	
	_a == 1 || _b == 1 || _c == 1
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.MultipleOrs)

The above function will output `1`, even though only one of the checks is true.

Now then, what happens if we combine them? You can do that too, but you must be mindful of the order of operations. AND has higher priority. This can be changed with parenthesis, just like the other operators.

```c
OnAndOr
{
	_hour = 10
	_minute = 20
	
	_hour == 10 || _hour == 20 && _minute == 30
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.AndOr)

The above function will output `1`, since the AND is evaluated first. `_hour == 10` is true, but `_hour == 20 && minute == 30` is not, because `_hour` is not `20` nor is `_minute` `30`.

Assuming that we want this function to output `1` when the hour is `10` or `20` but only if the minute is also `30`, this setup is not what we want, and the function will output `1` too often.

```c
OnAndOr2
{
	_hour = 10
	_minute = 20
	
	(_hour == 10 || _hour == 20) && _minute == 30
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.AndOr2)

The above function will output `0`. The OR check is true because the `_hour` is set to `10`, but the `_minute` is not also `30`.


Finally, there is the logical NOT operator. The `!` reverses the outcome of any formula or function. We can add it before the names of functions and variables, or we can enclose forumlas in parenthesis and reverse the output. We've already seen this effect before, with `!=` being the opposite of `==`.

```c
OnLogicalNot
{
	_i = 10
	!(_i == 20)

}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L8.LogicalNot)

The above function will output `1`, since the operation `_i == 20` returns a `0` (False), which is then reversed to a `1` (True) by the `!` operator.

The parenthesis in this case are used to make the `!` operator reverse the *outcome* of the operation, rather than just the contents of `_i`.

---

## Further Context

Now I can properly show where inclusive operators are more useful! Here's an example that you can see in many ghosts, which breaks down the day into a few different blocks of time.

```c
timeslot
{
	if hour >= 5 && hour <= 8; "earlymorning"
	elseif hour >= 9 && hour <= 11; "morning"
	elseif hour >= 12 && hour <= 14; "lunch"
	elseif hour >= 15 && hour <= 17; "afternoon"
	elseif hour >= 18 && hour <= 20; "evening"
	elseif hour >= 21 && hour <= 24; "latenight"
	else; "midnight"
}
```

Here's another example of the semicolons from way back at the start of this module! But that aside, you can see that each of these checks represent a range of numbers. So the first check there, `if hour >= 5 && hour <= 8`, means 5-8, including both 5 and 8. That seems a lot more intuitive to me than writing `if hour > 4 && hour < 9`. But again, whatever makes more sense to you.

Anyways, in relation to this lesson, you can see this is a way to use the && operator. Using it in conjunction with the less than and greater than operators is a way to express a range of numbers.

[Next Module >>](../module_02_arrays/00_general_purpose_arrays_pt_1.md)

[<< Previous Lesson](../module_01_basic_building_blocks/07_comparisons.md)
