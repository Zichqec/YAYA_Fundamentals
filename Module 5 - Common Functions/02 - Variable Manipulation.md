# Lesson 02 - Variable Manipulation

[Next lesson >>]()

[<< Previous lesson]()

When working with global variables, sometimes you will need to check if the variable you want already exists or not. For this purpose, there is `ISVAR`. `ISVAR` takes a single argument, which is the name of the variable you want to check for *as a string.* If such a variable exists, it will return `1`. If not, it will return `0`.

```c
OnCheckVariableExists
{
	if !ISVAR("friendship")
	{
		friendship = 0
	}
	friendship += 2
	friendship
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L2.CheckVariableExists)

The above function will output `2`

With the setup above, even if the friendship variable did not exist before this code ran, it would still be properly initialized as an integer. That way, we can ensure nothing strange happens.

Additionally, sometimes you need to erase a variable once you're done with it to keep your save file from getting bloated, or to make sure old values don't interfere with other functions. For this, there is `ERASEVAR`. `ERASEVAR` takes the name of the variables you want to delete *as strings*. You can specify as many as you like, as long as you make them separate arguments.

```c
OnEraseUnneededVariables
{
	i = 10
	j = 20
	k = j + i
	
	"%(i) + %(j) is %(k)"
	
	ERASEVAR("i","j","k")
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M5.L2.EraseUnneededVariables)

The output of the above would be `10 + 20 is 30`. `ERASEVAR` itself has no return, but the `i`, `j`, and `k` variables will no longer exist once it executes.

---

# Further Context

The whole business with writing the variable names in these *as strings* has confused me before, so I will mention it in more detail here. The proper usage of ISVAR, for example, looks like `ISVAR("friendship")`, *not* `ISVAR(friendship)`.

If you think about it with our visualization technique, `ISVAR(friendship)` would look something like `ISVAR(57)` (if the friendship value was 57), which doesn't really make sense. So, make sure you use strings here. When you're looking up functions on AYAYA, keep an eye out for this sort of thing.

[Next lesson >>]()

[<< Previous lesson]()