# 01 - Character Sets

[Next lesson >>]()

[<< Previous Lesson]()

To make use of regex you will need to know how to write expressions, and how to use the functions that YAYA provides that work with those expressions. We'll start with the expressions, and explore the different functions later. But first, you need to know at least one function so I can show some examples.

`RE_MATCH` is the most basic of the regex functions. It takes two arguments; the target string, and the regular expression to try and match with. If the target string matches the regular expression, it returns `1`. Otherwise, it returns `0`.

```c
OnMatchExample
{
	_expression = "Color"
	_string = "Color"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L1.MatchExample)

The above function will output `1`, since the string matches the expression perfectly.

This by itself is not terribly useful. But, you will see in a moment where this is going. First, the character sets.

In a regular expression, we can write special indicators for certain sets of characters. For example, `\w` matches alphanumeric characters, as well as underscores. These are called "word" characters. There is also `\W`, which is the opposite; it matches anything that is *not* a "word" character.

```c
OnMatchWord
{
	_expression = "\wo\wato\W"
	_string = ANY("Potato!","Tomato?")
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L1.MatchWord)

The above function will always output `1`, whether the string is chosen to be "Potato!" or "Tomato?". Other strings would also work, such as "Potato?", "Po7ato)", etc. As long as they match the expression.

Note: any character in an expression that does not represent a **character set** or **metacharacter**, represents the literal character. So a `t` is just a `t`. If you want to represent a character set or metacharacter as literal text, you must escape it with a backslash, such as `\\w`.


Next, there are `\s` and `\S`. `\s` matches any whitespace character, including spaces, tabs, newline, etc. `\S` is the opposite, and matches anything that is *not* a whitespace character.

```c
OnMatchSpace
{
	_expression = ".\s.\s."
	_string = "A B C"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L1.MatchSpace)

The above function will output `1`. If the string were "ABC", it would not match. This could also match other sequences, such as "X Y Z", "A A A", etc.

Finally, we have `\d` and `\D`. `\d` matches a single number character, and `\D` matches anything that is *not* a number character.

```c
OnMatchDigit
{
	_expression = "\d\d\d-\d\d\d-\d\d\d\d"
	_string = "951-599-9555"
	RE_MATCH(_string,_expression)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M7.L1.MatchDigit)

The above function will output `1`. This expression could work with any phone number that has a basic grouping of 3 numbers, 3 numbers, then 4 numbers. 123-456-7890, etc.

---

# Further Context

That's right we're learning a whole other language in this guide. Except we're not and I'm only covering the basics.

Anyways, you might've seen a regex function in the last module! It was hiding in the last example.

`if RE_SEARCH(_file,".wgc$")`

See this if check here? We'll talk about this function later, but there's a small use of a regular expression! This one is checking the name of a file to ensure that ".wdg" is the last few characters of the filename. So, it's checking for the correct extension. Or, it would be, except that I apparently wrote it improperly more than a year ago! The `.` character in this expression is intended to be a literal `.`, but instead it will match anything. (I think I could also have done this function differently instead of using regex, but that's neither here nor there.)

Regex is useful in plenty of cases, but it is slower than other options, so I tend to avoid it unless the tradeoff of cleaner code seems worth it. Or, if the function is so small that speed isn't really a concern.

[Next lesson >>]()

[<< Previous Lesson]()