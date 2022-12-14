# Lesson 00 - Parameters

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/01%20-%20SHIORI%20Events%20vs%20Functions.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/08%20-%20Brackets%20and%20Modifiers.md)

When calling functions, it is often necessary to include extra information for the function to use. To accomplish this, information may be passed to a function as **parameters**.

There are two types of parameters in YAYA. **Arguments**, and **references**. First, we will cover arguments.

When you write the name of the function to call, you may optionally add a set of parenthesis after, with an array of arguments to send.

```c
OnSumFunction
{
	Sum(1,2)
}

Sum
{
	_argv[0] + _argv[1]
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L0.SumFunction)

The above function would output the integer `3`

In the function that is called, an array called `_argv` (Probably stands for **Arg**ument **V**alue) will automatically be generated, containing the contents of the array that were sent by the function call. Additionally, a variable called `_argc` (Probably stands for **Arg**ument **C**ount) will be generated, which holds the number of arguments that were sent.

```c
OnCountFunction
{
	CountA("red","orange","yellow","green","cyan","blue","purple","magenta")
}

CountA
{
	_argc
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L0.CountFunction)

The above function would output the integer `8`, which is the number of arguments sent to the Count function.

Note also that if you send a variable containing an array, each of the elements of that array will be a different argument, since the arguments are just an array. So the code below is functionally the same as the above.

```c
OnCountFunction2
{
	_hues = ("red","orange","yellow","green","cyan","blue","purple","magenta")
	
	CountB(_hues)
}

CountB
{
	_argc
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L0.CountFunction2)

The above function would output the integer `8`

Note that the only way to send an array all as a single element is by converting it to a simple array. More on this below.

This can be used to pass around information without needing to create global variables. This could take many forms, depending on what the function's purpose is. If it's a function that reads files, you may send it a file path. If it's a function that does a math operation, you might send it some numbers. If it manipulates a string, you might send it a string.


There is also a special operator that can be used when sending parameters. It is the `&` feedback operator. By adding this operator before a variable name that is passed as a parameter, any changes made to the argument that is created from that variable will affect the original variable itself.

```c
OnFeedbackOperator
{
	_fav = "red"
	_secondfav = "green"
	ChangeFav(&_fav,_secondfav)
	"I like " + _fav + " and " + _secondfav
}

ChangeFav
{
	_argv[0] = "blue"
	_argv[1] = "yellow"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L0.FeedbackOperator)

The output of the above function would be `I like blue and green`. This is because, since `_fav` is sent using the feedback operator, any changes made to `_argv[0]` in the `ChangeFav` function are also applied to `_fav`. However, `_secondfav` is *not* sent using the feedback operator, so it remains unchanged even though a change is applied to `_argv[1]`.

---

# Further Context

Alright, so I said above that the only way to send an array all as a single argument is by sending it as a simple array. Why is that?

Well, I believe the reason is the behavior of nested arrays in YAYA. As mentioned back in the array module, when you nest two arrays together, they are combined into one single array. So `("red",("blue","green"),"yellow")` becomes `("red","blue","green","yellow")`.

So, consider if you were to send arguments like this:

```c
OnCountFunction3
{
	_hues = ("blue","green")
	
	Count("red",_hues,"yellow")
}

Count
{
	_argc
}
```

Do you see what I see? That `_hues` represents an array, but the list of arguments is itself an array! So if we use our visualization technique on this...

```c
OnCountFunction3
{
	_hues = ("blue","green")
	
	Count("red",("blue","green"),"yellow")
}

Count
{
	_argc
}
```

Aha! Sneaky, sneaky. So, what if I *did* want to send `blue,green` as a single argument and not two separate arguments? This is another case where simple arrays come in handy, as a sort of workaround. Because simple arrays are *literally just strings,* they are not affected by this nesting behavior. We'll go over how converting arrays is actually done in the next module, but for now, here's an example.

```c
OnCountFunction3
{
	_hues = ("blue","green")
	_hues = TOSTR(_hues)
	
	Count("red",_hues,"yellow")
}

Count
{
	_argc
}
```

This function will only output `3`, instead of `4` like the previous function. If we use our visualization method this time...

```c
OnCountFunction3
{
	_hues = ("blue","green")
	_hues = TOSTR(_hues)
	
	Count("red","blue,green","yellow")
}

Count
{
	_argc
}
```

You will notice here that `"blue,green"` is a single string! It's subtle, though.

It's not particularly useful to do this for this function, but I have *definitely* needed this technique a few times in my own work. Sometimes, you need to put another argument after the array, but the array is also of arbitrary length. If you can't tell how long the array will be, you can't pick out which argument comes after it!

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/01%20-%20SHIORI%20Events%20vs%20Functions.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/08%20-%20Brackets%20and%20Modifiers.md)