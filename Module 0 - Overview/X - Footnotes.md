# Footnotes

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/03%20-%20Basic%20Error%20Messages.md)

## More options in yaya.txt

There are a few other options for loading dic files. dicdir (dictionary directory) can be used to specify a folder, and all dic files in the specified folder will be loaded.

```
dicdir, dictionary
```

Now everything in the folder "dictionary" will be read as YAYA code.

Note that the order the files are read in is unspecified by default. If you need to specify what order the files should be read in, you will have to include a file in the directory you specified, called `_loading_order.txt`. In that file, you can write the order the dic files should be loaded in, the same way you would write them in the yaya.txt.

```
dic, somefile.dic
dic, someotherfile.dic
dic, anotherfile.dic
```

With the above loading order, somefile.dic will be read first, then someotherfile.dic, and then anotherfile.dic.


There is also dicif (dictionary if). dicif reads a file as YAYA code, but only _if_ that file exists. Otherwise, the instruction is ignored.

```
dicif, somefile.dic
```

somefile.dic will be read as YAYA code if it is found. No error is thrown if it is not found. You could use this for optional content that must be downloaded separately, for example.


Finally, there is include. include is for if you want another configuration file like yaya.txt, with additional information.

```
include, system_config.txt
```

Now system_config.txt can be used to write options the same way as yaya.txt. You could use this, for example, if you wanted to keep the section for loading your dic files separate from other configurations.


## Error message options

There are actually two versions of YAYA, one which has the error messages embedded in the dll file, and one which has the text for the error messages as separate files. This enables you to write your own translations for the error messages. If you decide to use that version, you will want to use messagetxt (message text) instead of msglang, and specify the filepath for the error message file.

```
messagetxt,messagetxt/english.txt
```

This will output errors in english, provided you have the corresponding file. You can download the errors in different languages [here](https://github.com/ponapalt/yaya-shiori/tree/500/messagetxt), or copy those files to write your own translations instead.


## Renaming yaya.dll

If you want to, you can change the name of the yaya.dll to whatever you want. You just have to keep the dll extension the same, and ensure that yaya.txt and yaya_emerg.txt are also renamed to match. So if you changed it to core.dll, you would need to change yaya.txt to core.txt, and yaya_emerg.txt to core_emerg.txt.

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/03%20-%20Basic%20Error%20Messages.md)
