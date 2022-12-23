# Module 05 - Common Functions

## Lesson 00 - String Manipulation

[Next lesson >>](../module_05_common_functions/01_type_manipulation.md)

[<< Previous module](../module_04_functions/05_recursion.md)

YAYA has many built in functions, for various purposes. Here, we will cover some of the basic ones to give you an idea of what's available and how they're used. We won't cover all of them though, and it would be a good idea to browse the [function list on the AYAYA wiki](https://emily.shillest.net/ayaya/index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0%E7%94%A8%E9%80%94%E5%88%A5%E4%B8%80%E8%A6%A7#o39fd008) to get an idea of what other functions there are.


First are the basic string manipulation functions. `TOUPPER` and `TOLOWER` are simple. Each takes a single string argument, and `TOUPPER` returns the same string but with all uppercase letters, while `TOLOWER` returns the same string but with all lowercase letters.

```c
OnUppercase
{
	TOUPPER("Hello, world!")
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L0.Uppercase)

The above function will return the string `HELLO, WORLD!`

Next, we have `STRLEN`. `STRLEN` also takes a single string argument, and returns the number of characters that make up that string.

```c
OnStringLength
{
	STRLEN("Hello, world!")
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L0.StringLength)

The above function will return the integer `13`

Additionally, there is `SUBSTR`. `SUBSTR` gets a **substring**, which is a section of another string. You give it 3 arguments; the string you want to extract a substring from, the starting position it should use, and the number of characters it should take.

Be careful, the starting position is 0-indexed, so in "Hello, world!", the H is position 0. However, the number of characters to be captured is not the same way; if you write a 0 there, you will get nothing. `5` gets you 5 characters, `0` gets you 0 characters. 

```c
OnSubstring
{
	SUBSTR("Hello, world!",7,5)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L0.Substring)

The above function will return the string `world`

There is also `REPLACE`, which replaces substrings in the source string with whatever you give it. It takes at least 3 arguments, and can have 4. The first argument is the source string to modify, the second argument is the substring to find, and the third argument is the substring to replace that with. The optional 4th argument is how many substrings to replace at maximum. If omitted, it will replace them all.

```c
OnReplaceString
{
	REPLACE("Hello, world!","world","planet")
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M5.L0.ReplaceString)

The above function will return the string `Hello, planet!`

---

## Further Context

Using these functions is much like using your own functions, as we explored in the previous module! For example, let's say I wanted to do some checks on what name the user put in for themselves, to comment on specific names they may have chosen. It's much easier to do those checks if the name is all in lowercase (or uppercase), so that they can't get around name checks by putting in weird capitals! So, we can use TOLOWER to help:

```c
OnNameTeach
{
	_name = TOLOWER(reference0) //The input from the user will be assigned to _name, but it will be in all lowercase
	
	if _name == "squid" //This way, we don't need to also check for Squid, SQUID, sQuid, sQUid, SqUid... etc.
	{
		"A squid, eh? Somehow I doubt that."
	}
	elseif _name == "balloons"
	{
		"Hmm, you must've gotten a new haircut...?"
	}
	else
	{
		"Ok, good to meet you %(reference0)."
	}
}
```

[Next lesson >>](../module_05_common_functions/01_type_manipulation.md)

[<< Previous module](../module_04_functions/05_recursion.md)
