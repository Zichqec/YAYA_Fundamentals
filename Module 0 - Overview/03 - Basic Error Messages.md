# Lesson 03 - Basic Error Messages

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/X%20-%20Footnotes.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)


By default, YAYA outputs errors in Japanese. If you cannot read Japanese, you'll probably want to change that. You can change the msglang (message language) by adding this line to your yaya.txt:

```
msglang,english
```

Now errors will be output in english.

If there is an error when your dic files are loaded, you will likely see this message in SSP's error log:

```
[SHIORI]Communication error. Possible file corruption.
```

This does not necessarily mean that your files are corrupted. It simply means that there was an issue loading your YAYA code, and you will need to check the SHIORI log for more details. More on the SHIORI log later.

When there is an error, YAYA will attempt to load into emergency mode. This is a fallback mode, which you can use to load a different set of dic files. This could be used, for example, to have your ghost load up just some error handling functions and display the list of errors for you. This also enables the errors to be pushed directly to SSP's error log, since YAYA will still be able to run.

To use this mode, include a file called `yaya_emerg.txt` next to your yaya.txt. They are written in exactly the same format, but yaya_emerg.txt will only be loaded if there is an error in the files loaded by your regular yaya.txt.

With emergency mode set up, you can see errors like this in SSP's error log:

```
F:\SSP\ghost\my_ghost\ghost\master\somefile.dic(24) : error E0004 : Unanalyzable. Probably, '{' is required here.
```

This is the basic format for the errors. First, you will see a filepath. This will point you to the exact file that the error occurred in. Immediately after the filepath, you will usually see a number in parenthesis. This indicates the line number that the error occurred on. Next is the error code, and finally, a description of the error.

As you can see, this is very helpful for tracking down issues. However, depending on the nature of the error, it might not point you to exactly the right line. It usually gets you pretty close, though.

Unfortunately, for some errors, it is not possible to provide a line number.

```
F:\SSP\ghost\my_ghost\ghost\master\somefile.dic(-) : error E0094 : The parenthesis {} is invalid or has not been closed correctly.
```

In a case like the above, you will have to track down the issue in the file yourself.

Another thing to note is that you may see many errors all at once. But very often, the only actual error is the first one, and the rest have resulted from the first. So, try to solve the errors that show up earlier in the file in question before tackling the others.

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/X%20-%20Footnotes.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)
