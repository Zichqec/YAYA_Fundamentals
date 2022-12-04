Comments are a simple concept, but they are an important one. Comments are text in the code that is not executed, but instead is there for your reference. They are also important for helping others understand your code. YAYA has two different kinds of comments; single line comments and block comments.

Single line comments start with two forward slashes. Anything on a line after two forward slashes is considered a comment, no matter where on the line the comment starts. The only exception is if the slashes are inside of a string.

```c
OnSingleLineComment
{
	"Hello, world!" //This is a single line comment, it does not affect the code and is only here to help your code be understood.
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L2.SingleLineComment")

Block comments have both a starting and ending tag. You start one with `/*` and end it with `*/`. Anything between those tags will be considered a comment, no matter how many lines it spans across.

```c
OnMultiLineComment
{
	/* This is a multi-line comment
	You can use this for longer explanations of your code,
	or to comment out entire functions if you need to.
	It's very useful for debugging, as well. */
	"Hello, world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](x-ukagaka-link:type=event&ghost=YAYA Fundamentals&info=OnExample.M1.L2.SingleLineComment")

As an important note, you cannot nest block comments inside each other. The outer comment will end as soon as it hits the `*/` tag of the inner comment, which will lead to all kinds of errors since text you intended to be commented is now being read as code.

```c
OnFunction
{
	/* This is the start of one multi-line comment.
		/* Here is another nested comment inside it! But as soon as it reaches an ending tag... */
	The original comment has already stopped, and these words will now be read as code, causing an error. */
	"Hello, world!"
}
```

The above code will cause an error.

The `/` character can be used to add a linebreak to a single line comment, the same way as mentioned in the lesson about function structure. Be careful with this, since NotepPad++'s syntax highlighting will not indicate that the line below is now also being considered a comment.

```c
//Not sure why this isn't working how I want :/
OnFunction
{
	"Hello, world!"
}
```

In the above code, the name 'OnFunction' will be read as a comment. Thus, YAYA will see the brackets as not having a corresponding function name, and will throw an error.


Very good code explains itself as you read it, and good comments explain what your approach is and why, rather than breaking down every individual step. Either way, you should leave yourself (and other people who might be peeking) some comments. Even if they are just small hints here and there, it'll save you the pain of having to detangle a big mess of code with no comments that your past self thought you would remember perfectly. You *will* forget details, you *will* wonder why you set things up the way you did, *leave yourself some notes.* You don't need to explain every little detail, just put down the gist of what you're trying to accomplish.

---

# Footnotes

About the point of good code explaining itself as you read it. This is why naming in general is important; function names and such that are too long are a pain, but function names that are too short and don't describe what they do are even worse! There is a middle ground, and leaving some notes to explain in more detail will go a long way.

The function name `CalculateTheDistanceBetweenAandB` is overly descriptive. It is overwhelming and hard to read. By the same token, simply naming the function `Calc` is under-descriptive, because it could apply to many things. Instead, consider this alternative between the two:

```c
//Calculates the distance between A and B
CalculateDistance
{
	//Some code...
}
```

There aren't any hard rules for how to come up with names for functions (other than the restrictions mentioned in the function structure lesson), just pick what makes the most sense to you and try to stick with it.

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/03%20-%20Data%20Types.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/01%20-%20Calling%20Functions.md)