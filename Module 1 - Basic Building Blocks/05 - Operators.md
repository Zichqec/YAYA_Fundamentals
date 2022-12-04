# Lesson 05 - Operators

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/06%20-%20Order%20of%20Operations.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/04%20-%20Variables.md)

To make good use of variables, we need to be able to do more than just directly assign values to them. YAYA comes with a list of different operators, most of which are pretty straightforward. Note: operators are not just for variables! They're also often used for checks, or with functions/plain numbers instead of variables.

We'll go over the + operator first. This simply adds two values together. If you write `_var = 1 + 1`, `_var` will now store the value `2`. If you write `_var = _var + 1`, you've added `1` to whatever value was stored in `_var`, incrementing it.

```c
OnBasicAddition
{
	_var = 5
	_var = _var + 1
	_var
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.BasicAddition")


The above function will output the integer `6`

It's a little clumsy to write it out that way, though. There are two shortcuts provided to make this easier to write. If you write `_var += 1`, it will add `1` and assign it to `_var` all in one go. So `_var = _var + 1` and `_var += 1` are the same thing.

Make note, `_var + 1` and `_var += 1` are different! `_var + 1` does not actually assign the value. This is useful if you need to perform a check and don't want to change the contents of the variable.

```c
OnAddWithoutAssigning
{
	_var = 5
	_var + 1
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.AddWithoutAssigning")

The above function will output `6`, but the value assigned to `_var` will still be `5`. This is because we have written an operation directly here, and are getting the results of the operation, rather than the contents of var on its own. Operations that are not assigned to anything are treated as values to be output.

```c
OnAddAndAssign
{
	_var = 5
	_var += 1
	_var
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.AddAndAssign")

The above function will output `6`, which is the value that `_var` currently holds.

Alright, that was a bit long for the simplest operator, but with that framework in mind the rest are very simple to understand. A single operator symbol, like `+` on its own, means that the value will not be assigned; an operator symbol like `+` followed by an `=`, like `+=`, means that it will perform the operation and assign the value. Now, here is a list of all the operators YAYA has.

```
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus
```

These should be fairly straightforward, though division and modulus are a bit special. Any of them can be written with an equals sign after them, if you want to assign while you perform the operation. So `-` can be `-=`, `*` can be `*=`, etc.

(Note that all of the assignment operators like `=` and `+=` can also be written with a `:` before the `=`, like `:=` and `+:=`. This does not have any special meaning, and is maintained for compatibility reasons.)

```c
OnMultiplyAndAssign
{
	_var = 5
	_var *= 3
	_var
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.MultiplyAndAssign")

The above function will output `15`

Division gets tricky based on what kind of number you give it. If you're dividing a real number, you will get the answer back as a real number. So, if you do `5.0 /= 2`, you will get `2.500000`. However, if you divide an integer, you will get a whole number back, minus the remainder. So `5 / 2` will give you `2`.

```c
OnDivideInteger
{
	7 / 2
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.DivideInteger")

The above function will output the integer `3`

You may be wondering where the remainder has gone. That's what the modulus operator is for. The modulus operator also does division, but the result it gives you is the remainder of the division operation. This is very useful for things like determining if your variable contains an even number, for example.

```c
OnModulusExample
{
	7 % 2
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.ModulusExample")

The above function will output the integer `1`

When you divide 7 by 2, the answer is 3 with a remainder of 1. So the `/` operator gives you the 3, and the `%` operator gives you the 1.


There are also two special shorthand operators. `++` is called the incrementer, and will add `1` to a value and assign it. So, `_var++` is shorthand for `_var += 1`. The decrementer is much the same, but for subtraction. `--` is the decrementer, and subtracts `1` from a value, and assigns it. `_var--` is shorthand for `_var -= 1`.

Note that these can *only* raise or lower the value by 1 at a time.

```c
OnIncrementer
{
	_var = 1
	_var++
	_var
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.Incrementer")

The above function will output the integer `2`


Finally, the `+` operator can also be used with strings, but has a different meaning. With strings, it performs **concatenation**. Concatenation is when you join two strings together as a single string.

```c
OnConcatenate
{
	"Hello, " + "world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L5.Concatenate")

The above function will output a single string, `Hello, world!`


If the types of your operands do not match (such as adding a string to an integer), the output will follow these rules:

• Integers and real number operations will result in a real number.
• Integers or real numbers added to strings will be converted to strings and concatenated.
• Other operations on integers/real numbers and strings cannot be performed, and will return an empty string.
• Comparison operators with integers/real numbers and strings will convert the numbers to strings and compare them according to lexicographical order.


There are other types of operators, mostly to do with comparing values as mentioned in that last example, but we'll cover those soon.

---

# Footnotes

Now we're getting somewhere! I want to give a real example of modulus in use, because it is a fantastic operator. Admittedly, its uses tend to be a little more niche, but once you get how it works it's really useful.

Here's that petting code from the last lesson:

```c
//When the mouse is over the ghost
OnMouseMove
{
	if reference4 != "" //This is checking if the mouse cursor is over a hitbox
	{
		stroke++
		if stroke % 40 == 0 //This just makes the user have to stroke for a little while before a petting dialogue will happen
		{
			totalpets += 1
			"You're petting me???"
		}
	}
	else
	{
		stroke = 0
	}
}
```

See the `stroke % 40` in there? Let me break this down for you.

OnMouseMove happens whenever the mouse moves, and it can happen several times a second. I'm not certain what the exact criteria is, but basically, any tiny twitch of the mouse cursor will make OnMouseMove happen. That means, if you didn't put in this extra code, your ghost would say petting dialogues the instant the user touched them, and would spam those dialogues really rapidly! It's kind of an unpleasant effect.

So! The solution here is simple. We have a variable called stroke, which starts at 0, and is reverted to 0 any time the mouse leaves the hitboxes. But if the mouse *is* on a hitbox, then stroke will go up by 1 each time the mouse moves a little.

Then, we use the modulus operator. Here, we are checking the result of dividing the value of stroke by 40. If it's 0, then stroke must be a multiple of 40! 40 is an arbitrary value here, it's just the default value most ghosts have. You could use something else if you don't like the timing.

So why use modulus here, and not just check if stroke is 40, and then reset it afterwards? Well, a lot of ghosts do go that route. But modulus here opens up another opportunity for us. Check this out.

```c
//When the mouse is over the ghost
OnMouseMove
{
	if reference4 != "" //This is checking if the mouse cursor is over a hitbox
	{
		stroke++
		if stroke % 40 == 0 //This just makes the user have to stroke for a little while before a petting dialogue will happen
		{
			totalpets += 1
			
			if stroke / 40 >= 5
			{
				"Will you cut it out already???"
			}
			else
			{
				"You're petting me???"
			}
		}
	}
	else
	{
		stroke = 0
	}
}
```

Here, we have added an extra check. If we divide the stroke variable by 40, we get the number of total pets that the user has performed in a row (since stroke resets when the mouse leaves the hitbox). So, we check if that number is 5 or higher, and if so, we give an alternative comment. A very simple implementation of a continuous-petting feature!

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/06%20-%20Order%20of%20Operations.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/04%20-%20Variables.md)