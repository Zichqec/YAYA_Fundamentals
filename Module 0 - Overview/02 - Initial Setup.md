In order to actually execute YAYA code, you will need a [yaya.dll](https://github.com/YAYA-shiori/yaya-shiori/releases), and a yaya.txt that points to the files containing your code.

yaya.txt has multiple options you can specify. First, you should specify the charset. By default, the charset is set to SHIFT_JIS. (If you're from the Japanese community and you're reading this; hi! You can probably skip this part and use SHIFT_JIS.) SHIFT_JIS is not ideal unless you're writing in Japanese, so you'll want to change the charset, most likely to UTF-8. This can be done by adding this line to yaya.txt.

```
charset, UTF-8
```

You can specify different charsets for different parts of your ghost, but we won't get into that here. If you want to see all the settings, take a look on the [AYAYA wiki](https://emily.shillest.net/ayaya/index.php?cmd=read&page=%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E6%96%87%E6%B3%95%2F1.%E5%9F%BA%E7%A4%8E%E8%A8%AD%E5%AE%9A).


Next, you can include dic files for your ghost by writing lines like these. Note that the filepath is relative from the position of yaya.dll.

```
dic, somefile.dic
```

Now anything in somefile.dic will be read as YAYA code. If the file does not exist, YAYA will throw an error and will not load.

You can add as many of these as you need, for as many files as you have. They will be loaded in the order that they are listed.


There are also a few other options. dicdir can be used to specify a folder, and all dic files in the specified folder will be loaded.

```
dicdir, dictionary
```

Now everything in the folder "dictionary" will be read as YAYA code.

Note that order the files are read in is unspecified by default. If you need to specify what order the files should be read in, you will have to include a file in the directory in question, called `_loading_order.txt`. In that file, you can write the order the dic files should be loaded in, the same way you would write them in the yaya.txt.

```
dic, somefile.dic
dic, someotherfile.dic
dic, anotherfile.dic
```

With the above loading order, somefile.dic will be read first, then someotherfile.dic, and then anotherfile.dic.


Finally, there is dicif. dicif reads a file as YAYA code, but only if that file exists. Otherwise, the instruction is ignored.

```
dicif, somefile.dic
```

somefile.dic will be read as YAYA code if it is found. No error is thrown if it is not found.


There is also include. include is for if you want another configuration file like yaya.txt, with additional information.

```
include, system_config.txt
```

Now system_config.txt can be used to write options the same way as yaya.txt.


By default, YAYA outputs errors in Japanese. If you cannot read Japanese, you'll probably want to change that. To accomplish this, you can change the msglang like so:

```
msglang,english
```

Now errors will be output in english.

There are actually two versions of YAYA, one which has the error messages embedded in the dll file, and one which has the text for the error messages as separate files. This enables you to write your own translations for the error messages. If you decide to use that version, you will want to use messagetxt instead of msglang, and specify the filepath for the error message file.

```
messagetxt,messagetxt/english.txt
```

This will also output errors in english, provided you have the corresponding file. You can download the errors in different languages [here](https://github.com/ponapalt/yaya-shiori/tree/500/messagetxt), or copy those files to write your own translations instead.


If there is an error when your files are loaded, YAYA will attempt to load into emergency mode. This is a fallback mode, which you can use to load a different set of dic files. This could be used, for example, to have your ghost load up just some error handling functions and display the list of errors for you. This also enables the errors to be pushed to SSP's error log, since YAYA will still be able to run.

To use this mode, include a file called yaya_emerg.txt next to your yaya.txt. They are written in exactly the same format, but yaya_emerg.txt will only be loaded if there is an issue loading the dic files with the normal yaya.txt's setup.


One final note. If you want to, you can change the name of the yaya.dll to whatever you want. You just have to keep the dll extension the same, and whatever name you change it to, you have to also change the name of yaya.txt and yaya_emerg.txt. So if you changed it to core.dll, you would need to change yaya.txt to core.txt, and yaya_emerg.txt to core_emerg.txt.

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/03%20-%20Tama%20and%20the%20SHIORI%20log.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)
