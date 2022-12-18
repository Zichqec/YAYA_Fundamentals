# Module 07 - Regular Expressions

## Lesson 03 - Regex Functions

[Next lesson >>](../module_07_regular_expressions/04_more_on_the_subject.md)

[<< Previous lesson](../module_07_regular_expressions/02_metacharacters.md)

Now, to make use of all of these expressions you can write, YAYA has a few more functions. We've already covered `RE_MATCH`, which searches for an exact match to the regular expression, and `RE_SEARCH`, which searches for a partial match. There is also `RE_GREP`, which searches for all of the matches in a string, and outputs the count of matches.

```c
OnReGrep
{
	_expression = "th"
	_string = "the most important thing is to breathe"
	RE_GREP(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReGrep)

The above function will output `3`, since "th" appears in the target string three times.

`RE_GREP` is the last of the string searching functions. After that, there are `RE_REPLACE` and `RE_SPLIT`, which are regex versions of `REPLACE` and `SPLIT`.

```c
OnReReplace
{
	_expression = "colou?r"
	_string = "My favorite color is purple"
	RE_REPLACE(_string,_expression,"hue")
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReReplace)

The above function will output the string `My favorite hue is purple`

There is also `RE_REPLACEEX`, which is like `RE_REPLACE`, except metacharacters can be included in the replacement string.


All of the regex functions we have covered thus far, including `RE_MATCH` and `RE_SEARCH`, have a special property. When executed, they will save some additional data about any matches that were found. This data is retrievable using the functions `RE_GETSTR`, `RE_GETPOS`, and `RE_GETLEN`.

`RE_GETSTR` will return an array of the substrings that were matched by the regular expression. Element 0 will be the entire match, and each element after that will be what was contained in each capture group. So if you had 3 capture groups, `RE_GETSTR[1]` would be the result of the first capture group, `RE_GETSTR[2]` would be the result of the second capture group, and `RE_GETSTR[3]` would be the result of the third capture group.

```c
OnReGetString
{
	_expression = "(favou?rite) (colou?r)"
	_string = "My favorite color is purple"
	void RE_SEARCH(_string,_expression)
	RE_GETSTR[1]
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReGetString)

The above function will output `favorite`

Next is `RE_GETPOS`. `RE_GETPOS` will return an array of the starting positions for each capture group that matched. Note that these are 0-indexed, so if it matched at the start of the string, the output would be `0`.

This is similar to `RE_GETSTR`; element 0 will be the position where the whole expression matched, and each element after will be for each individual capture group.

```c
OnReGetPosition
{
	_expression = "(favou?rite) (colou?r)"
	_string = "My favorite color is purple"
	void RE_SEARCH(_string,_expression)
	RE_GETPOS[2]
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReGetPosition)

The above function will output `12`, which is the position in the string where the word "color" (the second capture group) begins.

Finally, there is `RE_GETLEN`. This will return an array of the string lengths of each captured segment. As with the others, element 0 is for the whole match, and each element after is for each capture group.

```c
OnReGetLength
{
	_expression = "(favou?rite) (colou?r)"
	_string = "My favorite color is purple"
	void RE_SEARCH(_string,_expression)
	RE_GETLEN[2]
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReGetLength)

The above function will output `5`, since it matched with "color", which is 5 characters long.

Note that if you are using `RE_REPLACE`, `RE_REPLACEEX`, or `RE_SPLIT`, these three functions will only have element 0, as there is no other data to store.


Three functions left to go. The following functions do not use `RE_GETSTR`, `RE_GETPOS`, and `RE_GETLEN`.

`RE_ASEARCH` is like `ASEARCH`, and `RE_ASEARCHEX` is like `ASEARCHEX`. They take an argument for the expression you want to use to search, and an argument of the array to search in. Note that, unlike `ASEARCH` and `ASEARCHEX`, these will find *partial matches* too, not just perfect matches. `RE_ASEARCH` will return the index number for the first match it finds, while `RE_ASEARCHEX` will return an array of all the indices for the matches it finds.

```c
OnReArraySearch
{
	_colors = ("red","orange","yellow","green","cyan","blue","purple","magenta")
	_expression = "a"
	RE_ASEARCHEX(_expression,_colors)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReArraySearch)

The above function will output `1,4,7`, the positions of "orange", "cyan", and "magenta", since these all have an "a" in them.

Finally, there is `RE_OPTION`. `RE_OPTION` lets you set options for your regular expressions, much like how you can set options in PERL. It takes a single argument, which is the option you want to set.

`i` makes the expression case-insensitive. `m` treats the expression as multiple lines. `s` makes the `.` (wildcard) character also match newlines. `x` ignores comments (which can be written starting with `#`) and whitespace in regular expressions.

The default option is `m`. You can specify multiple options at once, such as `mxi`, or `si`.

If you omit the argument, the current option will be returned instead. Otherwise, it will return the options you have just set.

```c
OnReOption
{
	_expression = "colou?r"
	_string = "COLOR"
	void RE_OPTION("i")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L3.ReOption)

The above function will output `1`

---

## Further Context

We did it! That's all I'm going to show you about regex. And I'll be honest with you, I have never in my life used that `RE_OPTION` function except when testing it for this guide, so if you don't get it I wouldn't even worry about it. You can play with it if you ever get really into regex and find you need it.

[Next lesson >>](../module_07_regular_expressions/04_more_on_the_subject.md)

[<< Previous lesson](../module_07_regular_expressions/02_metacharacters.md)
