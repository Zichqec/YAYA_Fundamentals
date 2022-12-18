# Module 00 - Overview

## Lesson 02 - Initial Setup

[Next lesson >>](../module_00_overview/03_more_options_in_yaya.txt.md)

[<< Previous Lesson](../module_00_overview/01_what_is_yaya.md)


If you're using a template ghost, the initial steps here will likely be taken care of for you. But in case there is anything you need to change, we will go over the basics anyways. It's been my experience with other coding guides that they taught me the syntax, but not how to actually put it into practice. I hope this section will prevent you from having that same experience here. But if you already have a running ghost, you can skip it if you want.

In order to actually execute YAYA code, you will need a copy of [yaya.dll](https://github.com/YAYA-shiori/yaya-shiori/releases)—which is what actually parses your YAYA code—and a `yaya.txt` in the same folder that will point to the files containing your code. (You can download the `yaya.zip` from the latest version listed on that page.)


yaya.txt has multiple options you can specify. First, you should specify the charset (character set). By default, the charset is set to SHIFT_JIS. (If you're from the Japanese community and you're reading this; hi! You can probably skip this part and use SHIFT_JIS.) SHIFT_JIS is not ideal unless you're writing in Japanese, so you'll want to change the charset, most likely to UTF-8. You can do so by adding this line to yaya.txt:

```
charset, UTF-8
```

You can specify different charsets for different parts of your ghost, but we won't get into that here. If you want to see all the settings, take a look on the [AYAYA wiki](https://emily.shillest.net/ayaya/index.php?cmd=read&page=%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E6%96%87%E6%B3%95%2F1.%E5%9F%BA%E7%A4%8E%E8%A8%AD%E5%AE%9A).


Next, you can include dic (dictionary) files for your ghost by writing lines like these. Note that the filepath is relative from the position of yaya.dll.

```
dic, somefile.dic
```

Now, anything in somefile.dic will be read as YAYA code. If the file does not exist, YAYA will output an error and will not load.

You can add as many dic files as you need in yaya.txt. They will be loaded in the order they are listed, from top to bottom. Loading order does not *usually* make a difference in YAYA, but it does matter for the preprocessor, which you will learn about later.

## Further Context

If you're not familiar with relative filepaths, here is a quick explanation. An absolute filepath is extremely specific, starting from name of the drive. For example:

```
F:/My_Stuff/SSP/ghost/my_ghost/ghost/master/somefile.dic
```

A relative filepath, however, will start from a different location. In this case, that will be the position of yaya.dll, which is usually in the `ghost/master/` folder if you're making a ghost. So, if we want to specify a file that is in the same folder as yaya.dll, we can just write its name. If we want to go into a subfolder, we can write just the name of that folder, a slash, then the name of the file.

```
special/somefile.dic
```

This would load somefile.dic, which is located in a folder called `special`.

If we wanted to go up into a folder higher in the hierarchy, we need a special marker. `../` will take you up a folder. So, if we have a dic file in `ghost/other/`, we can access it with this filepath instead:

```
../other/somefile.dic
```

This is a relative filepath. It goes up one folder from where `yaya.dll` is placed, which takes us into the `ghost/` folder, and then we go down into the `other/` folder, where somefile.dic is placed.

One final note. If you are getting errors when you try to load your ghost and you're not sure how to interpret them, check out module 11, which goes over errors. Just know for now that if you see `[SHIORI]Communication error. Possible file corruption.`, your files are almost certainly *not* corrupted, there is just an error and you need a tool to see what that error is.


[Next lesson >>](../module_00_overview/03_more_options_in_yaya.txt.md)

[<< Previous Lesson](../module_00_overview/01_what_is_yaya.md)
