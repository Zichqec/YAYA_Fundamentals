# Module 11 - Debugging

## Lesson 02 - Dissecting Error Messages

[Next lesson >>](../module_11_debugging/03_common_error_messages.md)

[<< Previous lesson](../module_11_debugging/01_logging.md)

Alright, so what about when your code isn't running *at all?* What if it's just outputting a cryptic error message? Here, we'll give an overview of how to read the error messages. In the next lesson, we'll look at some of the common errors and what they mean.

First of all, you may notice this message in SSP's error log:

```
[SHIORI]Communication error. Possible file corruption.
```

That's a little scary, but don't panic. This doesn't actually mean your files are corrupted, unless something genuinely happened to your computer that corrupted them. What this means 99.9% of the time is that there is an error in the dic files somewhere, so it can't load. If you're seeing this, you need to take a look at the SHIORI log/Tama to see what the error is.

Now, you may notice error messages being output in Japanese, or all question marks. If this happens, and you can't read Japanese, you will want to add the following to your yaya.txt.

```
msglang,english
```

This will change the language of the error messages to English.

Sidenote; there are actually two versions of YAYA that are distributed. One with the error messages included in the dll file, and one with them stored as separate files that you can edit (for example, if you speak a language that is not currently supported and want errors in that language). If you happen to be using the latter version, you will need this command instead of msglang:

```
messagetxt,messagetxt/english.txt
```

This assumes that you have a folder called `messagetxt` with the error message files in it. If that is not the case, you will need to adjust the filepath accordingly. It is a relative path from the location of yaya.dll.

Now, your error messages should be in English, or the language of your choosing. So, let's look at the basic formula.

```
F:\SSP\ghost\my_ghost\ghost\master\somefile.dic(24) : error E0004 : Unanalyzable. Probably, '{' is required here.
```

So, let's look at this from left to right. First, there is a filepath. This points you to the exact file that the error is in.

Immediately after the filepath, you will notice a number in parenthesis, in this case `(24)`. This is the line number that the error occured on. This *usually* will point you to the exact place where the issue is, but depending on the nature of the error, it may be a little off. It may also sometimes display just a `(-)` in place of a number. This is because it can't pinpoint where the error occured.

After this, you will see an error code, like `error E0004`. You don't really need to worry about that, but it *will* tell you the severity of the message (there is also "warning" and "info", but you usually only see these if the ghost is able to run at all).

Then, finally, it will have a short description of the error. In this case: `Unanalyzable. Probably, '{' is required here.`

A missing opening bracket. An easy fix, probably.

One more note. Depending on the nature of the error, you will sometimes see dozens, or even hundreds of errors suddenly appear and fill the log. *Don't panic.* Usually, only the first 1 or 2 errors are real errors. Most commonly, this happens if you have a duplicated function name. It calls out the duplicated function name as an error... and then keeps merrily reading the rest of the file, except that now it thinks you have a function without a name, and all this extraneous text that was supposed to be *in* the function is not a valid function name, and...! It ends up reading the entire rest of the file as errors. So really, don't panic. Just go to the top, look at the first few errors you see, and see if you can spot an issue there. Try commenting out that section of code, and see if all the rest of the errors clear up or change. Most of the time, it is not as bad as it looks.

[Next lesson >>](../module_11_debugging/03_common_error_messages.md)

[<< Previous lesson](../module_11_debugging/01_logging.md)
