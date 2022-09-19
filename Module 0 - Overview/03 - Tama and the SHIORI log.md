As mentioned in the previous lesson, YAYA's emergency mode enables errors to be output directly to SSP's error log. But what does this mean?

If you have an error without emergency mode set up, or if your emergency mode also fails to load, you will always see this message in SSP's error log:

```
[SHIORI]Communication error. Possible file corruption.
```

This does not necessarily mean that your files are corrupted. It simply means that there was an issue loading your YAYA code, and you will need to check the SHIORI log for more details. So what is the SHIORI log?

The SHIORI log is a log of the communication between YAYA and the baseware as the ghost is running. You can have your ghost write this log to a file if you'd like to have a look at it. To do so, add this line to your yaya.txt.

```
log, ayame.log
```

This will output a log of every SHIORI request to the file `ayame.log`, though you can pick a different name if you'd like. This file will be written to as the ghost runs. Any errors or warning messages will also be written here. But remember to disable the SHIORI log by commenting or erasing it from yaya.txt when you're done, or the logs can get extremely long.

If you don't want to fuss with reloading that file constantly, you can also use the debugging tool [Tama](https://github.com/YAYA-shiori/tama) to take a peek at the SHIORI log in real time. I highly recommend you pick it up, it will make your life much easier. Do note that it can make your ghost lag a little while it's running, especially if you open the right click menu, so only keep it open when you need it.

So what does the log actually look like? This is what requests from the baseware look like in the SHIORI log:

```
// request
GET SHIORI/3.0
ID: OnTranslate
Charset: UTF-8
Sender: SSP
SenderType: internal,raise
SecurityLevel: local
Reference0: \0\s[1090]\i[8]Uh huh...\e
Reference1: 
Reference2: OnAiTalk
Reference3: userprompted
```

Of note, the line `ID:` shows which SHIORI event is being called. In this case, it is OnTranslate. At the end, you can see the references that have been sent with the event. We'll cover what those do later. But, this is where you can see that info being passed back and forth.

This is the response from the SHIORI for that same event:

```
// response (Execution time : 0[ms])
SHIORI/3.0 200 OK
Sender: AYA
Charset: UTF-8
Value: \0\s[1090]\i[8]Uh huh...\e
```

Of note here is the `Value:` line, which shows what script was sent to the baseware to be executed. You should also take note of the `200 OK` that appears at the top. 200 OK means that the event was executed successfully, but sometimes you will see other numbers that mean other things, like if there was no content for the SHIORI to return to the baseware, or if the request wasn't written properly.

Finally, let's have a look at some errors.

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

Another thing to note is that you may see many errors all at once. But very often, the only actual error is the first one, and the rest have resulted from the first. So, try to start with the errors that show up earlier in the file in question.

Errors will prevent your ghost from running at all, but there are also warning messages that may appear now and then when your ghost is running. These can flag up issues in your code that are causing things to not execute as expected. They can be a bit hard to spot since they only appear when the ghost is running properly, which means there will be a lot of other info in the SHIORI log too; but if you're using Tama, they should be highlighted in orange. So, keep an eye out for them if something seems to be misbehaving.

```
F:\SSP\ghost\my_ghost\ghost\master\somefile.dic(13) : warning W0008 : Missing arguments. : SPLIT
```

As you can see above, these have the same format as the error messages.

Knowing how to read the SHIORI log isn't 100% necessary for writing in YAYA, but it can make your life a whole lot easier if you do.

Next module>>

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)
