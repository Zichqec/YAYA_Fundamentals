# Lesson 00 - What is the Preprocessor

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%208%20-%20The%20Preprocessor/01%20-%20Debug%20Options.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%207%20-%20Regular%20Expressions/04%20-%20More%20on%20the%20Subject.md)

The **preprocessor** is a way of modifying your code before it is ever run. It can be used for all kinds of things, from changing how you write certain syntax, to replacing old function names, to setting options to be used elsewhere in the file.

YAYA has two commands for replacement. `#define` and `#globaldefine`.

With both of these, you write the command (on its own line), followed by the string to search for, and then the string to replace it with. Strings are case sensitive here.

```c
#define ketchup mustard

OnReplaceDialogueAndVarName
{
	ketchup++
	
	"I like ketchup"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M8.L0.ReplaceDialogueAndVarName)

The above code will output `I like mustard`. It will also increment a variable called `mustard` by 1.

Any instances of the word "ketchup" in the file *after* the `#define` will be replaced with "mustard". No matter if they're inside strings or not.

To illustrate, here's a more dangerous example.

```c
#define START {
#define END }

OnReplaceBrackets
START
	"Hello, world!"
END
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M8.L0.OnReplaceBrackets)

The above code will output `Hello, world!`

As you can see, with these preprocessor commands, you could write the words `START` and `END` instead of opening and closing brackets. So, this is a very powerful operation. However, an example like the above is dangerous, since this will likely replace parts of the code that you do not want it to replace. For example, parts of your dialogue, variable names, or function names. The word "BEND" would become "B}". A replacement like this would likely cause a lot of errors if it wasn't planned for, and even then it still might catch you off guard. Be mindful with the preprocessor.

`#define` only affects code in the file it is in, and *only* code that is after it in the file.

`#globaldefine` is like `#define`, except it also applies to every file that is loaded after it. This is the only part of YAYA where file loading order matters.

Additionally, `#define` will always run before `#globaldefine`.

```c
#globaldefine card skate
#define card cork

OnReplaceOrder
{
	"cardboard"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M8.L0.ReplaceOrder)

The output of the above would be `corkboard`, since the `#define` runs first and creates "corkboard", and then the `#globaldefine` finds no instances of "card" to replace.

---

# Further Context

The preprocessor is a handy thing to know about, even if you never personally use it! If you've ever looked in YAYA's `config.txt` (or `yaya_config.txt` if you're using an older version), those are preprocessor commands in there! Additionally, you can see some of them in the shiori file. For example, here are some that set up some delimiters for later processing! These allow the developer to change what these delimiters would be in a single place in the file, and have the change be applied everywhere.

```c
#define			CHAIN_DELIM		':chain='
#define			EVAL_DELIM		':eval='
```

We'll cover what these are for in a later module!

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%208%20-%20The%20Preprocessor/01%20-%20Debug%20Options.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%207%20-%20Regular%20Expressions/04%20-%20More%20on%20the%20Subject.md)