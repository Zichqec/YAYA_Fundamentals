# Module 09 - SAORI

## Lesson 01 - SAORI-universal

[Next lesson >>](../module_09_saori/02_saori-basic.md)

[<< Previous lesson](../module_09_saori/00_what_are_saori.md)

For the purposes of this lesson, we will be using the SAORI [window_info](https://github.com/ukatech/csaori/releases/tag/window_info_v1.1) as an example.
When run, this SAORI gathers a list of windows that the user has open on their computer, as an array. There is more it can do, but this is the function we will focus on.

To call a SAORI, YAYA has an inbuilt function called `FUNCTIONEX`. The first argument you give it is the relative filepath from yaya.dll to the SAORI you want to execute. After that, any additional arguments are passed to the SAORI. In the case of window_info, we can leave the argument blank or write `enum` to get the list of open windows.

When a SAORI returns an array of information, some code in YAYA's base dic files (depending on your library, which you'll learn about next module) will create an array called `valueex`, which holds the array created by the SAORI.

```c
OnWindowInfoExample
{
	_num = FUNCTIONEX("saori/window_info.dll","enum")
	_open_windows = valueex
	
	//Check if the folder of the companion ghost is open, or if a file is open in an editor like NotePad++
	_lessons_open = 0
	foreach _open_windows; _window
	{
		if "\ghost_guides_zi\ghost\master\yaya_lessons\module_" _in_ _window; _lessons_open = 1
	}
	
	"You have %(_num) windows open!"
	--
	if _lessons_open
	{
		" Including a lesson file or folder from the Ghost Guides ghost!"
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M9.L1.WindowInfoExample)

The above function will get a list of what windows the user has open, then inform them of the number of windows. It will add an additional comment if the user has one of the lesson files/folders from the Ghost Guides ghost open.

[Next lesson >>](../module_09_saori/02_saori-basic.md)

[<< Previous lesson](../module_09_saori/00_what_are_saori.md)
