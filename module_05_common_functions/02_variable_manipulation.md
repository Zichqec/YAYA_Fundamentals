# Module 05 - Common Functions

## Lesson 02 - Variable Manipulation

[Next lesson >>](../module_05_common_functions/03_array_manipulation.md)

[<< Previous lesson](../module_05_common_functions/01_type_manipulation.md)

When working with global variables, sometimes you will need to check if the variable you want already exists or not. For this purpose, there is `ISVAR`. `ISVAR` takes a single argument, which is the name of the variable you want to check for *as a string.* If such a variable exists, it will return `1`. If not, it will return `0`.

```c
OnCheckVariableExists
{
	if !ISVAR("appreciation")
	{
		appreciation = 0
	}
	appreciation += 2
	appreciation
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L2.CheckVariableExists)

The above function will output the current value of the `appreciation` variable.

With the setup above, even if the `appreciation` variable did not exist before this code ran, it would still be properly initialized as an integer. That way, we can ensure nothing strange happens.

Additionally, sometimes you need to erase a variable once you're done with it to keep your save file from getting bloated, or to make sure old values don't interfere with other functions. For this, there is `ERASEVAR`. `ERASEVAR` takes the name of the variables you want to delete *as strings*. You can specify as many as you like, as long as you make them separate arguments.

```c
OnEraseUnneededVariables
{
	j = 20
	k = j + appreciation
	
	"%(appreciation) + %(j) is %(k)"
	
	ERASEVAR("appreciation","j","k")
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L2.EraseUnneededVariables)

The output of the above will change based on the value held in the `appreciation` variable. `ERASEVAR` itself has no return, but the `appreciation`, `j`, and `k` variables will no longer exist once it executes.

---

## Further Context

The whole business with writing the variable names in these *as strings* has confused me before, so I will mention it in more detail here. The proper usage of ISVAR, for example, looks like `ISVAR("appreciation")`, *not* `ISVAR(appreciation)`.

If you think about it with our visualization technique, `ISVAR(appreciation)` would look something like `ISVAR(57)` (if the `appreciation` value was 57), which doesn't really make sense. So, make sure you use strings here. When you're looking up functions on AYAYA, keep an eye out for this sort of thing.

[Next lesson >>](../module_05_common_functions/03_array_manipulation.md)

[<< Previous lesson](../module_05_common_functions/01_type_manipulation.md)
