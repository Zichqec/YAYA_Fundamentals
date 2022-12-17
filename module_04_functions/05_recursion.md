# Lesson 05 - Recursion

[Next module >>](../module_05_common_functions/00_string_manipulation.md)

[<< Previous lesson](../module_04_functions/04_embedded_elements.md)

**Recursion** is when a function calls itself. As you can imagine, this would create an infinite function call, which will crash the baseware much like an infinite loop would. However, if you use recursion right, you can avoid infinite function calls and make useful things happen.

The most common example of recursion is calculating the factorial of a number. The factorial, if you are not familiar, is a concept in mathematics where a number is multiplied with all of the numbers that come before it. So 3! (3 factorial) is `3 * 2 * 1`, and 5! is `5 * 4 * 3 * 2 * 1`.

```c
OnFactorial
{
	factorial(5)
}

factorial
{
	if _argv[0] == 0; 1
	else
	{
		factorial(_argv[0] - 1) * _argv[0]
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L5.Factorial)

The output of the above function would be the integer `120`

As you can see, factorial will continue to call itself with smaller and smaller numbers, until it reaches 0. At this point, it stops calling itself, and all of the previous calls to the factorial function can finally complete.

The `if _argv[0] == 0` in this code is what's called the **base case**. It's what stops the recursive function from running infinitely, by not making another function call once a certain threshold is reached. You must always have a base case, or some other method of stopping the recursion once the task is complete, or your recursive function will never stop and the baseware will crash.

Well, that's not entirely true. Much like YAYA has a loop limit, it also has a **function depth limit**. By default, this limit is 32. You can adjust this by writing `fncdepth,#` in your yaya.txt, replacing the # with how many levels deep you want functions to be able to run. The minimum is 2.

If you write `fncdepth,0`, there will be no upper limit, but if the call is too many functions deep it will crash the baseware.

---

# Further Context

If you're like me and you're not so great at math stuff, maybe this example will make more sense for you. It's a bit more complicated, but I'll break it down. This function is used to search a set of files to see if any are compatible for my music player setup. If there is a folder in the files, it will have to check the folder also. If there is a folder in that folder, then it should check *that* folder too... and you can see why recursion would be helpful!

```c
//Checks for music files in folders and multiple files
OnFindSongs
{
	_compatible_music_types = (".mp3",".wav",".mid",".m4a")

	_added = IARRAY
	_folder = _argv[0]
	_files = FENUM(_folder,"|")
	_files = SPLIT(_files,"|")
	
	foreach _files; _file
	{
		_path = SPLITPATH(_file)
		_ext = TOLOWER(_path[3])
		if ASEARCH(_ext,_compatible_music_types) != -1
		{
			_added ,= _file
		}
		elseif _ext == ""
		{
			_folder_to_search = FENUM("%(_folder)%(_file)/","|")
			
			_recursive = OnFindSongs("%(_folder)%(_file)/",)
			
			if _recursive != ""; _added ,= _recursive
		}
	}
	TOSTR(_added)
}
```

The first bit of this function is just setting up local variables to hold the eventual output. Then, it begins to loop through each of the input files. If it is a file of a compatible type, then it is added to the `_added` array. If it has no extension whatsoever, it's probably a folder. So... we call the function again, but with the path of the subfolder!

*That* instance of the function will set up the same variables, and enter into a loop to check each of the files in the folder. Likewise, if it encounters a subfolder, it will run the function again but with *that* folder's path.

Once the innermost folder has been searched, the list of compatible files is returned to the instance of the function that called it. As each recursive call completes, it lets the instance that called it continue on, until that instance either completes or finds another folder. Eventually it'll all make it back up to the original function call, and we'll have a full list of compatible files, including in all subfolders!

Unless your subfolders go more than 32 layers deep. But I would be rather impressed if that were the case!

I'll be honest with you, dealing with all this recursion makes my head swim. So don't sweat it too much if this one is confusing!

[Next module >>](../module_05_common_functions/00_string_manipulation.md)

[<< Previous lesson](../module_04_functions/04_embedded_elements.md)
