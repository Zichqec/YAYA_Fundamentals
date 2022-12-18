# Module 08 - The Preprocessor

## Lesson 01 - Debug Options

[Next module >>](../module_09_saori/00_what_are_saori.md)

[<< Previous lesson](../module_08_the_preprocessor/00_what_is_the_preprocessor.md)

Additionally, there are a couple of options in the preprocessor for debugging. The first is `__AYA_SYSTEM_FILE__`, which will output the relative filepath of the file the current function is executing from, from yaya.dll. Note that it outputs this as raw text, so you must surround it in quotation marks to make it a string.

```c
OnSystemFile
{
	"__AYA_SYSTEM_FILE__"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M8.L1.SystemFile)

The above function will output the filepath of the file `OnSystemFile` is written in. This will vary based on your setup, but it will be in a format like `file.dic`, or `subfolder/file.dic`

There is also `__AYA_SYSTEM_LINE__`, which outputs the line number that it is occupying. If it is on line 45 in the file, it will output `45`. Since this one is a number, you may omit the quotation marks.

```c
OnSystemLine
{
	__AYA_SYSTEM_LINE__
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M8.L1.SystemLine)

Like the previous example, the output of this function will vary depending on your setup.

---

## Further Context

Just one small note about the `__AYA_SYSTEM_FILE__` command here. I didn't understand why I needed the quotes until I saw it with the visualization technique we've been using.

If you write like this...

```c
OnSystemFile
{
	__AYA_SYSTEM_FILE__
}
```

It will end up like so:

```c
OnSystemFile
{
	F:\Stuff\SSP\ghost\my_ghost\ghost\master\somefile.dic
}
```

It can't make any sense of that! So you have to add the quotes yourself.

[Next module >>](../module_09_saori/00_what_are_saori.md)

[<< Previous lesson](../module_08_the_preprocessor/00_what_is_the_preprocessor.md)
