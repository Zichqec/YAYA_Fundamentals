# More Options in yaya.txt

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)

I am noting these options because they appear in the base dic files for most ghosts. You can see all the options on [AYAYA](https://emily.shillest.net/ayaya/index.php?cmd=read&page=%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E6%96%87%E6%B3%95%2F1.%E5%9F%BA%E7%A4%8E%E8%A8%AD%E5%AE%9A).

If you're new to this and just want to hop into learning to code, feel free to skip this section and read it later if you're interested.

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

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%200%20-%20Overview/02%20-%20Initial%20Setup.md)
