# 04 - Emergency Mode

[Next lesson >>]()

[<< Previous lesson]()

There is one more thing you should know about for debugging. This will make it possible to view error messages directly in SSP's error log, rather than needing Tama.

It is called **emergency mode**, and it is an alternate mode your ghost(/plugin/etc.) will load into if there is an issue in the main dic files. To use this, all you need to do is include a file called `yaya_emerg.txt` next to your `yaya.txt`. This file is written exactly like `yaya.txt`, except you can have it load an alternate set of files.

You could use this to load up a special file that only has debugging functions, or you could use it for whatever you see fit. Just know that if emergency mode also fails to load, the error messages will only show up in the SHIORI log, not SSP's error log.

With emergency mode, you can also use the function `GETERRORLOG` to access the errors yourself, directly. Using this, you can output the errors directly to the balloon.

Note that by default, it will only be able to display up to 256 errors (this includes what it can output to the error log). To change this value, you can add `maxlognum,#` to your `yaya_emerg.txt`, replacing the `#` with whatever you want the number to be.

Also note that the YAYA as SHIORI library in particular will automatically output errors to the error log. If you are using another library, you may have to set up this functionality yourself. I would recommend running a search in the files of YAYA as SHIORI for `GETERRORLOG`, and see how it handles this.

[Next lesson >>]()

[<< Previous lesson]()