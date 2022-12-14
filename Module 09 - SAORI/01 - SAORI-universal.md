# Lesson 01 - SAORI-universal

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2009%20-%20SAORI/02%20-%20SAORI-basic.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2009%20-%20SAORI/00%20-%20What%20are%20SAORI.md)

For the purposes of this lesson, we will be using the SAORI [window_info](https://github.com/ukatech/csaori/releases/tag/window_info_v1.1) as an example.
When run, this SAORI gathers a list of windows that the user has open on their computer, as an array. There is more it can do, but this is the function we will focus on.

To call a SAORI, YAYA has an inbuilt function called `FUNCTIONEX`. The first argument you give it is the relative filepath from yaya.dll to the SAORI you want to execute. After that, any additional arguments are passed to the SAORI. In the case of window_info, we can leave the argument blank or write `enum` to get the list of open windows.

When a SAORI returns an array of information, some code in YAYA's base dic files (depending on your library, which you'll learn about next module) will create an array called `valueex`, which holds the array created by the SAORI.

```c
OnWindowInfoExample
{
	_num = FUNCTIONEX("saori/window_info.dll","enum")
	_open_windows = valueex
	
	"You have %(_num) windows open!\n\n\_?%(_open_windows)\_?"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M9.L1.WindowInfoExample)

The above function will get a list of what windows the user has open, then inform them of the number of windows and the names of each.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2009%20-%20SAORI/02%20-%20SAORI-basic.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2009%20-%20SAORI/00%20-%20What%20are%20SAORI.md)