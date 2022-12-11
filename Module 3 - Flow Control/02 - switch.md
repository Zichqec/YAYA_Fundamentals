# 02 - switch

[Next lesson >>]()

[<< Previous Lesson]()

Finally, the last of the branching structures is `switch`. `switch` in YAYA is not the same as switch/case in other languages. In YAYA, `switch` takes an integer as an index, and returns the value within its brackets at that index.

```c
OnSwitchHours
{
	switch hour
	{
		"It's midnight!" //0
		"It's 1AM!" //1
		"It's 2AM!" //2
		"It's 3AM!" //3
		"It's 4AM!" //4
		"It's 5AM!" //5
		"It's 6AM!" //6
		"It's 7AM!" //7
		"It's 8AM!" //8
		"It's 9AM!" //9
		"It's 10AM!" //10
		"It's 11AM!" //11
		"It's noon!" //12
		"It's 1PM!" //13
		"It's 2PM!" //14
		"It's 3PM!" //15
		"It's 4PM!" //16
		"It's 5PM!" //17
		"It's 6PM!" //18
		"It's 7PM!" //19
		"It's 8PM!" //20
		"It's 9PM!" //21
		"It's 10PM!" //22
		"It's 11PM!" //23
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L2.SwitchHours)

The above function will output a dialogue based on the current system time. If the hour were 5 (5AM), the output would be the string `It's 5AM!`

We'll be covering brackets in more detail later, but you should also know that in a `switch` statement, a set of brackets counts as a single index.

```c
OnSwitchBrackets
{
	_num = 2
	_somevar = 0
	_someothervar = 0
	
	switch _num
	{
		"Hello, world!"
		{
			_somevar = 1
			"Hi!"
		}
		{
			_someothervar = 1
			"It's me!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L2.SwitchBrackets)

The above function will output the string `It's me!`, since the set of brackets containing that dialogue is the second index. Note that both `_somevar` and `_someothervar` will contain the integer `1` here, because all of the expressions in the `switch` statement are evaluated *before* picking the output based on the index. This is different from if/else and case/when, so it is important to be aware of.

That is all there is to `switch`. It is the least flexible, but it is very useful in specific circumstances.

---

# Further Context

One of my favorite uses for `switch` has been for dialogue that changes based on the current month! It is slim and easy to add in anywhere.

Here's an example from one of my unreleased ghosts. This dialogue happens when it is within the first few days of a new month.

```c
"\s[1206]%(nowmonth('last')) is over already...\w8\w8\s[1110] Before you know it,\w4 it'll be %(nowmonth('next')).\w8\w8 "
--
//This check up here is so that we're basing dialogues off of the *next* month, not the current one
_next = month + 1; if _next == 13; _next = 1
switch _next
{
	"\s[1107]Scary." //0 - Should be blank
	"\s[1104]It'll be %(year + 1) then!" //1 - January
	"\s[1104]That's when my birthday is!\w8\w8\s[1112] @Abbi and @Elko's birthdays,\w4 too." //2 - Febuary
	"\s[1102]@Cambria's birthday is coming up pretty quick...\w8\w8\s[1000] @Triton's,\w4 too." //3 - March
	"\s[1112]@Rosie will be excited,\w4 her birthday is in April." //4 - April
	"\s[1102]@Sigil's birthday is in May.\w8\w8\s[1112] She was really excited for the last one." //5 - May
	"\s[1111]That's when my @Grandma's birthday is!" //6 - June
	"\s[1104]@Azo's birthday is in July,\w4 that'll be fun." //7 - July
	{
		"\s[1104]My @Dad's birthday is in August,\w4 it's on the 25th." //8 - August
		--
		//If S the Skeleton is installed but is not open
		if SInstalled && !SPresent
		{
			"\w8\w8\s[1111] You should bring him here to say happy birthday,\w4 it can be a surprise!"
		}
	}
	"\s[1000]My @Stepdad's birthday is in September." //9 - September
	"\s[1111]My @Grandpa,\w4 great @Aunt,\w4 and great @Uncle all have their birthday on the same day in October.\w8\w8\s[1104] That's so cool,\w4 isn't it?" //10 - October
	"\s[1104]@Azo's birthday is in November,\w4 that'll be fun." //11 - November
	"\s[1102]@Roman's birthday is finally coming up,\w4\s[1000] he's the last one in the year.\w8\w8\n\n\s[1104]Gyftmas is coming up,\w4 too." //12 - December
}
```

Contrast this with the equivalent setup with if statements...

```c
"\s[1206]%(nowmonth('last')) is over already...\w8\w8\s[1110] Before you know it,\w4 it'll be %(nowmonth('next')).\w8\w8 "
--
//This check up here is so that we're basing dialogues off of the *next* month, not the current one
_next = month + 1; if _next == 13; _next = 1
if _next == 1 //January
{
	"\s[1104]It'll be %(year + 1) then!"
}
elseif _next == 2 //Febuary
{
	"\s[1104]That's when my birthday is!\w8\w8\s[1112] @Abbi and @Elko's birthdays,\w4 too." 
}
elseif _next == 3 //March
{
	"\s[1102]@Cambria's birthday is coming up pretty quick...\w8\w8\s[1000] @Triton's,\w4 too."
}
elseif _next == 4 //April
{
	"\s[1112]@Rosie will be excited,\w4 her birthday is in April."
}
elseif _next == 5 //May
{
	"\s[1102]@Sigil's birthday is in May.\w8\w8\s[1112] She was really excited for the last one."
}
elseif _next == 6 //June
{
	"\s[1111]That's when my @Grandma's birthday is!"
}
//etc...
```

Yuck. I only included half the months, and look at how much more space that's taking up.

The uses for `switch` are limited, but it *is* really clean when you find a place you can use it.

[Next lesson >>]()

[<< Previous Lesson]()