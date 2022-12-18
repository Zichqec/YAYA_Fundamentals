# Module 07 - Regular Expressions

## Lesson 02 - Metacharacters

[Next lesson >>](../module_07_regular_expressions/03_regex_functions.md)

[<< Previous Lesson](../module_07_regular_expressions/01_character_sets.md)

Next, there are **metacharacters**. These are used to indicate special information, such as the beginning or end of a string.

To learn about these, we need to know about another function. `RE_SEARCH` is just like `RE_MATCH`, except it searches for a *partial* match instead of a full match. So if the regular expression fits at least one part of the string, it will return a `1`.

On to the metacharacters. First up, there is `.`, which matches any character except a newline (CR or LF).

```c
OnMatchAny
{
	_expression = ".o.ato"
	_string = ANY("Potato","Tomato")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchAny)

The above function will output `1`, whether `_string` is chosen to be "Potato" or "Tomato". Other strings would also work, as long as they followed the same format. "Po7ato", "Momato", "|o$ato"; all of these would match.

Next is `^`. `^` matches the beginning of a string.

```c
OnMatchBeginning
{
	_expression = "^the"
	_string = "don't forget to breathe"
	RE_SEARCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchBeginning)

The above function will output `0`. Even though the target string contains "the" in the word "breathe", the expression requires that "the" be at the start of the string. So "the end" matches, but "breathe" does not.

Then we have `$`. `$` is much like `^`, except it matches the end of a string rather than the beginning.

```c
OnMatchEnd
{
	_expression = "the$"
	_string = "don't forget to breathe"
	RE_SEARCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchEnd)

The above function will output `1`. This time, it does match "the" in "breathe". However, this would *not* match "the end", since "the" is not at the end of the string.

Next, we have groups of characters. To create a **character class**, you can surround characters in square brackets `[` `]`. Inside of these brackets you can define multiple characters that should be checked for. So `[abc]` checks for one of the characters `a`, `b`, or `c`.

```c
OnMatchSet
{
	_expression = "[PT]o[tm]ato"
	_string = ANY("Potato","Tomato")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchSet)

The above function will output `1`, but it is not as broad as the previous examples of this kind. This expression can *only* match the strings Potato, Tomato, Pomato, and Totato.

You can also write ranges in these character classes. Writing `a-z` means all lowercase letters from a to z, while `A-Z` means all uppercase letters from A to Z. `[a-zA-Z]` will match all upper and lowercase letters from a to z.

```c
OnMatchRange
{
	_expression = "[a-zA-Z]"
	_string = "5"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchRange)

The above function will output `0`, because the character class we defined will not match a number.

Inside of square brackets, `^` has a special meaning. It will reverse the meaning of whatever is in the character class. So for example, [^abc] will match any character that is *not* `a`, `b`, or `c`.

```c
OnMatchNotInSet
{
	_expression = "[^PT]o[^tm]ato"
	_string = ANY("Potato","Tomato")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchNotInSet)

The above function will output `0`. Potato, Tomato, Pomato, and Totato will not match, but any other characters at index 0 and 2 would match.


Next, there are metacharacters for **quantity**. These characters refer to the character just before them, and tell it how many of that character to look for. With no quantifier, the expression will search for exactly one of that character. But we can change that.

`?` means to search for 0 or 1 of the previous character.

```c
OnMatch0Or1
{
	_expression = "Colou?r"
	_string = ANY("Color","Colour")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.Match0Or1)

The above function will always output `1`, no matter if the chosen string is "Color" or "Colour".

Next is `+`. `+` matches any number of characters, as long as there is at least 1.

```c
OnMatch1OrMore
{
	_expression = "Hello!+"
	_string = "Hello"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.Match1OrMore)

The above function will output `0`. "Hello" does not match the expression, but "Hello!", "Hello!!", "Hello!!!", etc., would all match.

There is also `*`. `*` matches any number of characters, from 0 to infinity.

```c
OnMatch0OrMore
{
	_expression = "Hello!*"
	_string = "Hello"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.Match0OrMore)

The above function will output `1`. As with the previous function, it will match with "Hello!", "Hello!!", "Hello!!!", etc.; but it will also match without any exclamation point at all.

Finally, you can use curly brackets to specify an exact number to match with. `{3}` would require exactly 3 of a character in order to be a match.

```c
OnMatchExactCount
{
	_expression = "Hello!{3}"
	_string = "Hello!!!"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchExactCount)

The above function will output `1`. It would not match with "Hello!", "Hello!!", or "Hello!!!!".


Next, there is `|`, which is for logical OR. This can be inserted into an expression to make the expression match either the text on the left, or the text on the right. It does not work inside of character classes.

```c
OnMatchAOrB
{
	_expression = "Hello!|Goodbye!"
	_string = "Hello!"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.MatchAOrB)

The above function will output `1`. This expression will match either "Hello!" or "Goodbye!", but nothing else.


And last but definitely not least, there are **capture groups**. You can create a capture group by surrounding part of your expression in parenthesis. We will explore how capture groups are used in the next lesson, but for now, just know they are used for bits of the string we might want to extract.

You can also pair `|` with capture groups, to contain its effect to a certain part of your expression.

```c
OnCaptureGroup
{
	_expression = "(Hello|Goodbye)!"
	_string = "Hello!"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L2.CaptureGroup)

The above function will output `1`. As above, this expression will match either "Hello!" or "Goodbye!", but nothing else. But this time, we have captured either the text "Hello" or "Goodbye", and can make use of it in the next lesson.

---

# Futher Context

The best uses I have found for regex are to simplify code that would otherwise be exceedingly long. For example, here is a function I use sometimes with ghost communication, which strips out SakuraScript tags for pauses and quicksections.

```c
RemovePauses //Removes pauses and quicksections
{
	_argv[0] = RE_REPLACE(_argv[0],"\\!\[quicksection,(true|false|1|0)\]","")
	_argv[0] = REPLACE(_argv[0],"\_q","")
	_argv[0] = RE_REPLACE(_argv[0],"\\w\d","") //\w
	_argv[0] = RE_REPLACE(_argv[0],"\\_w\[\d+\]","") //\_w[]
	_argv[0]
}
```

That very first `RE_REPLACE(_argv[0],"\\!\[quicksection,(true|false|1|0)\]","")` covers 4 different tags: `\![quicksection,true]`, `\![quicksection,false]`, `\![quicksection,1]`, and `\![quicksection,0]`. You can see here that we're using the logical OR in a capture group, to make sure that's the only part of the tag where we're checking for something different. Note also, that we have to escape the brackets for the SakuraScript tag so they are treated as literal characters and not a character class!

After that is a normal replace command, because `\_q` has no alternative ways of writing it.

Then the second `RE_REPLACE` covers 9 different tags; `\w1`, `\w2`, `\w3`, etc., all the way up to `\w9`.

The final `RE_REPLACE` covers the `\_w[]` tag, which can have any arbitrary number in its brackets. We could theoretically do this by splitting the string too, but regex is simply cleaner. Here we are using a quantifier to specify that it is anywhere from 1 to infinity digits.

[Next lesson >>](../module_07_regular_expressions/03_regex_functions.md)

[<< Previous lesson](../module_07_regular_expressions/01_character_sets.md)
