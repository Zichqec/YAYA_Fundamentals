# Module 10 - YAYA Libraries

## Lesson 01 - YAYA as Other Things

[Next module >>](../module_11_debugging/00_peeking_behind_the_curtain.md)

[<< Previous lesson](../module_10_yaya_libraries/00_yaya_as_shiori.md)

YAYA can be used for more than SHIORI. It can be used to make SAORI, Plugins, MAKOTO, and as mentioned, even be used as a general windows dll.

You can, of course, make your own setup for YAYA. All you need for it to run are the functions `load`, `unload`, and `request`, as well as a yaya.txt with instructions for what file(s) to load.

But, much like YAYA as SHIORI, which provides the basic structure for creating ghosts with YAYA, there are also setups for YAYA as other things.

[YAYA as SAORI](https://emily.shillest.net/ayaya/index.php?YAYA+as+SAORI) can be used to create SAORI in YAYA, or to use YAYA *as* a SAORI and call YAYA functions in ghosts that are written in other languages, like Satori.

[YAYA as Plugin](https://emily.shillest.net/ayaya/index.php?YAYA+as+PLUGIN) can be used to create Plugins for SSP.

[YAYA as MAKOTO](https://emily.shillest.net/ayaya/index.php?YAYA+as+MAKOTO) can be used to create MAKOTO, which is a sort of shell-side `OnTranslate`.

There is also more information on [YAYA as a windows dll](https://emily.shillest.net/ayaya/index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E6%96%87%E6%B3%95/A.WindowsDLL%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AEYAYA).

Make sure to read the specific instructions that come with each of these. They all use YAYA, but they will have their own quirks. For example, YAYA as Plugin does not make the `reference0`, `reference1`, etc. variables. It only uses the reference array.

[Next module >>](../module_11_debugging/00_peeking_behind_the_curtain.md)

[<< Previous lesson](../module_10_yaya_libraries/00_yaya_as_shiori.md)
