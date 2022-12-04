# Lesson 00 - Function Structure

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/01%20-%20Calling%20Functions.md)

[<< Previous Module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/X%20-%20Footnotes.md)

Alright, on to actually writing some code! First of all, we will learn about functions. Functions are blocks of code that will be executed when they are called by their name. This could be anything; from a menu, to some kind of mathematical calculation, to a list of words that will be picked from randomly. Anything and everything happens inside of functions, the sky is the limit.

You can create functions in any dic file that you've included in your ghost, in any order. However, you cannot nest a function inside of a function; each function must stand apart from the rest. Each function must also have a unique name.

(Note: simple function names will be used in this guide, to make it easier to read. The companion ghost will have more complicated names as a necessity, to avoid overlapping names. The names in the ghost will be prefixed with which module number and which lesson number they belong to. You don't need to make your names that complicated!)

The structure of a function is simple. Every function gets a name, and a set of curly brackets between which you put code for them to execute.

```c
OnHelloWorld
{
	"Hello, world!"
}
```

Function names follow a few rules:
	• Function names are case sensitive, so somefunction is not the same as SomeFunction
	• They cannot start with underscores or numbers
	• You can use alphanumeric characters, underscores, and periods as part of a function name, but it's best to avoid any other symbols
	• Spaces are not permitted
	• The names of functions also can't match words reserved for other code structures that we will see in future lessons, like `if` and `else`


The position of the brackets is very flexible. So long as there is a function name and an opening and closing bracket, with all of the code contained inside those brackets, it's valid. Here are some examples of valid functions that are arranged differently.

```c
OnFunctionFormatA {"Hello, world!"}

OnFunctionFormatB {
	"Hello, world!"
}

OnFunctionFormatC
	{
	"Hello, world!"
	}

OnFunctionFormatD


{"Hello, world!"



}
```

All of these behave identically to the earlier example.

How you write is up to you, but try to pick one method and stick with it. Consistency will help you and other people read your code more easily, and readability is king.


Additionally, / is a special character in YAYA. Writing a single / with nothing after it makes the code go to the next line and start reading from there. So, you _can_ write like this.

```c
OnFunction/
Format/
E
{
	"/
	Hello, /
	world!/
	"
}
```

But this would be rather silly. Still, you may find it useful for breaking up long scripts, complicated formulas, and more.

You can also use a semicolon to tell the code to continue on the same line, when it would normally expect a linebreak.

```c
OnFunctionFormatA1 {"Hello, world!"}; OnFunctionFormatA2 {"Hello, world!"}
```

The above is not a particularly good application of this, but it will be useful to know later on.

---

# Footnotes

Welcome to the footnotes! Unlike the main lessons, we'll be focusing specifically on coding ghosts here, rather than just pure YAYA. These sections will appear after files where more context may be helpful. If you're already a skilled programmer and just want to pick up the syntax, you can probably ignore these! But if you're new to coding, make sure you read these bits too.

In order to give more context, I'm going to have to show you concepts the main lessons haven't covered yet! But don't worry too much about it, I'll explain what you need to know, and you can always come back and look over these examples again later to see how much more you've learned.

For this lesson, I would like to expand upon the forward slash and semicolon. These are very handy little symbols, and they are pretty unique to YAYA as far as I can tell. Don't tell anyone, but the semicolon is my favorite. For example, here's a common code setup I use in my ghosts:

```c
OnMinuteChange
{
	if itemsgiven >= 1
	{
		itemsgiven -= 1
	}
}
```

Basically, what this means is that every minute, it will check and see if the number of items given to the ghost is greater than or equal to 1. If yes, then it will subtract it by 1. That's a pretty simple operation to be taking up 4 lines! But with a semicolon, we can reduce something this simple to a single line.

```c
OnMinuteChange
{
	if itemsgiven >= 1; itemsgiven -= 1
}
```

That's much nicer. In my opinion, anyways. If you find this harder to read, then you don't need to do it, it's purely an aesthetic choice! You'll notice that I also got rid of the brackets; I'll go over how and why you can do that in a future lesson.

Next, the forward slash. This one I don't use nearly so often, but it _is_ really handy at times. I typically avoid it because, at least with my NotePad++ setup, the forward slash breaks the syntax highlighting. But if you don't mind that, it's very handy for menus, like so:

```c
OnMainMenu
{
	"/
	\![*]\q[Menu item 1,OnMenu1]\n/
	\![*]\q[Menu item 2,OnMenu2]\n/
	\![*]\q[Menu item 3,OnMenu3]\n/
	\![*]\q[Menu item 4,OnMenu4]\n/
	\![*]\q[Menu item 5,OnMenu5]\n/
	"
}
```

Note the forward slashes at the end of each line! Even though this is written across several lines, it is all read as a single script.

This is a much more natural way to read your menu script than to have it all on one line. Note that there are some other ways to accomplish this effect, but we'll get to them later.

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/01%20-%20Calling%20Functions.md)

[<< Previous Module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/X%20-%20Footnotes.md)