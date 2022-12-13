# Lesson 03 - Deleting Files and Working with Directories

[Next lesson >>]()

[<< Previous module]()

Files can be deleted with the `FDEL` function. You should be very careful with this function, as files deleted this way are not sent to the recycling bin. Don't delete anything important.

`FDEL` takes 1 argument, the path of the file you want to delete (relative from yaya.dll), and returns `1` if the operation was successful, and `0` if not.

```c
OnDeleteFile
{
	_path = "examplefiles/destined_for_deletion.txt"
	
	if FDEL(_path)
	{
		"File deleted successfully."
	}
	else
	{
		"Could not delete file."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L3.DeleteFile)

The above function will attempt to delete the `destined_for_deletion.txt` file. It will then output a message based on whether the action was successful or not.

You can also create and delete directories (folders). To create a directory, use the `MKDIR` function. `MKDIR` takes 1 argument, the path where you want to create the directory (including the name of the directory) relative from yaya.dll, and returns `1` if the operation was successful, and `0` if not.

```c
OnCreateFolder
{
	if MKDIR("examplefiles/subfolder/")
	{
		"Created subfolder."
	}
	else
	{
		"Could not create subfolder."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L3.CreateFolder)

The above function creates a new directory called playlists, and outputs a message based on if the operation was successful or not.

You can remove directories in a similar way with the `RMDIR` function. However, in order to remove a directory, it must be empty first.

```c
OnDeleteFolder
{
	_path = "examplefiles/subfolder/"
	
	if  RMDIR(_path)
	{
		"Deleted subfolder successfully."
	}
	else
	{
		"Cannot delete subfolder."
		--
		if ARRAYSIZE(FENUM(_path)) > 0; " Please remove all files inside it and try again."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L3.DeleteFolder)

The above function will attempt to delete the playlists folder. It will output a message based on whether the operation was successful or not. If it was not successful, it will also use `FENUM` to check if there are files still in the directory, and if there are it will also output a note about needing to remove them.

---

# Further Context

Be careful with deleting things, and don't delete anything you shouldn't.

Making directories can be very useful though; you can't make a file in a directory that doesn't exist, so it helps if you check beforehand and create the directory if necessary. That way, you'll avoid bugs if the user accidentally deletes a folder. Here's some of the code Warrior Generator uses when saving a character.

```c
OnSaveCharacter
{
	_topdir = FENUM("/../../saved_data/")
	if ARRAYSIZE(_topdir) == 0; void MKDIR("/../../saved_data/") //Make the data directory
	_chars = FENUM("/../../saved_data/characters/")
	if ARRAYSIZE(_chars) == 0; void MKDIR("/../../saved_data/characters/") //Make the characters directory
	_files = FENUM("/../../saved_data/characters/%(shellfld)/")
	if ARRAYSIZE(_files) == 0; void MKDIR("/../../saved_data/characters/%(shellfld)/") //Make a directory for this shell
	
	_display = ""
	foreach _files; _file
	{
		if RE_SEARCH(_file,".wgc$")
		{
			_file = RE_REPLACE(_file,".wgc$","")
			_display += "\__q[OnSaveOver,%(_file),areyousure]%(_file)\__q\n"
		}
	}
	_display
}
```

[Next lesson >>]()

[<< Previous module]()