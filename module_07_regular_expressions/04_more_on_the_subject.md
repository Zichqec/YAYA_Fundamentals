# Module 07 - Regular Expressions

## Lesson 04 - More on the Subject

[Next module >>](../module_08_the_preprocessor/00_what_is_the_preprocessor.md)

[<< Previous lesson](../module_07_regular_expressions/03_regex_functions.md)

As mentioned at the start, regex is very complicated, and can be hard to wrap your head around. For ease of reference, here are some cheat sheets copied from the [PERL documentation](https://perldoc.perl.org/perlre).

```
Metacharacters:

           PURPOSE                                  WHERE
\   Escape the next character                    Always, except when
                                                 escaped by another \
^   Match the beginning of the string            Not in []
      (or line, if /m is used)
^   Complement the [] class                      At the beginning of []
.   Match any single character except newline    Not in []
      (under /s, includes newline)
$   Match the end of the string                  Not in [], but can
      (or before newline at the end of the       mean interpolate a
      string; or before any newline if /m is     scalar
      used)
|   Alternation                                  Not in []
()  Grouping                                     Not in []
[   Start Bracketed Character class              Not in []
]   End Bracketed Character class                Only in [], and
                                                   not first
*   Matches the preceding element 0 or more      Not in []
      times
+   Matches the preceding element 1 or more      Not in []
      times
?   Matches the preceding element 0 or 1         Not in []
      times
{   Starts a sequence that gives number(s)       Not in []
      of times the preceding element can be
      matched
{   when following certain escape sequences
      starts a modifier to the meaning of the
      sequence
}   End sequence started by {
-   Indicates a range                            Only in [] interior
#   Beginning of comment, extends to line end    Only with /x modifier
```



```
Character sets:

\w          Match a "word" character (alphanumeric plus "_", plus
			  other connector punctuation chars plus Unicode
			  marks)
\W          Match a non-"word" character
\s          Match a whitespace character
\S          Match a non-whitespace character
\d          Match a decimal digit character
\D          Match a non-digit character
```

Refer back to this as much as you need to while you work on regex. And I do *highly* recommend using a [regex calculator](https://regex101.com/) to help you along.


And finally, an example of how regex might be used to scrape a mockup website. In this example, we'll be using a capture group to extract a word out of the mockup forecast. The string we're searching for will be something like "The weather today will be... Rain!"

In this mockup, the string will be surrounded by some fake html. So: `<span><weather id='40xj2'>The weather today will be... Rain!</weather></span>`

It's best to be as specific as possible with regex so that you don't capture more than you intend. In this mockup, the only word that will change is the name of the weather condition itself. So, we'll use the words leading up to it as they are, and make sure we capture no further than that exclamation point. To accomplish this, we can use this expression: `The weather today will be... ([^!]*)!`

`([^!]*)` is a capture group, which will get every character that is *not* an exclamation point. This way, we can extract just the word we want.

```c
OnRegexScrapingExample
{
	_target = ""
	_target += "<span><weather id='40xj2'>The weather today will be... "
	_target += ANY("Sunny","Cloudy","Thunderstorms","Windy","Snow","Rain") //Pick a random condition word for our example
	_target += "!</weather></span>"
	//The above is a mockup of some HTML you might find on a website with weather data. It's not accurate to anything in particular.
	//The generated string would be something like: <span><weather id='40xj2'>The weather today will be... Sunny!</weather></span>
	
	_weather = ""
	if RE_SEARCH(_target,"The weather today will be... ([^!]*)!")
	{
		_weather = RE_GETSTR[1]
	}
	
	if _weather == ""
	{
		"I couldn't get the weather information."
	}
	else
	{
		"Looks like the weather's gonna be %(TOLOWER(_weather))."
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M7.L4.RegexScrapingExample)

The above function will capture the randomly assigned weather condition from the string, and output it in a dialogue to the user. For example, `Looks like the weather's gonna be sunny.`

If it fails to get the information for whatever reason, leaving the `_weather` variable empty, it will show an error response instead.

Real scraping is generally a lot more complicated than this, since the strings you want to capture are often not the only instance of that string in a page. So, you may need to make longer expressions that match some of the surrounding html tags to ensure you get the data you want. But hopefully, this gives you an idea of how regex may be used.

[Next module >>](../module_08_the_preprocessor/00_what_is_the_preprocessor.md)

[<< Previous lesson](../module_07_regular_expressions/03_regex_functions.md)
