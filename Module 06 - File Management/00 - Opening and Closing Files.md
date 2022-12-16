# Lesson 00 - Opening and Closing Files

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2006%20-%20File%20Management/01%20-%20Reading%20Files.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2005%20-%20Common%20Functions/05%20-%20EVAL.md)

Reading and writing files is an essential part of any programming language. YAYA does this through a few inbuilt functions. We will cover the basic ones here, but there are more available on the AYAYA wiki for more complicated operations.

Before a file can be read from or written, it must first be **opened**. Once you are done with a file, you must always **close** it. Failing to close the file will mean that you can't open it again later, and may cause other issues (such as the user not being able to delete the file, since it is still in use).

To open or close a file, you must pass the file path to the `FOPEN` and `FCLOSE` functions. This path is relative to the position of yaya.dll, unless you write an absolute path (which is not generally advisable).

```c
OnFileOpenClose
{
	_file = "examplefiles/1.txt"
	
	void FOPEN(_file,"w")
	
	"File created."
	
	void FCLOSE(_file)
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L0.FileOpenClose)

The above function will output `File created.`

In the function above, we have created a new file called `1.txt` in the subfolder `examplefiles`. We haven't done anything with this file, we simply created it and then closed it again.

The `FOPEN` and `FCLOSE` functions will return a `1` if the operation is successful, and a `0` if there is an error. FOPEN can also return a `2` if the file in question is already open. The above setup does not account for if there is an error when opening the file, but we can add this with a simple `if` statement:

```c
OnFileOpenCloseCheck
{
	_file = "examplefiles/2.txt"
	
	if FOPEN(_file,"w") == 1
	{
		"File opened."
		
		void FCLOSE(_file)
	}
	else
	{
		"Error, could not open file or file was already open."
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L0.FileOpenCloseCheck)

The above function will output `File created.` if the file was opened successfully, and `Error, could not open file or file was already open."` if it was not.

Note that if you try to open a file that is already open, FOPEN will not do anything, and only return `2`. So, for this example, it is being treated as an error instead (because the file might be open in the wrong mode).


When opening a file, you must also specify *how* you want to access it, which is the second argument you can see in the examples. For simple text access, there is `r` for **read**, `w` for **write**, and `a` for **append**.

If no file exists, the write and append options will create a new one. The read option will give an error if there is no file.

If you open a file in `write` mode that already exists, the existing content will be discarded and the new content will overwrite it. If you open an existing file in `append` mode instead, the new content will be added to the end of the file.

If you want to access a file in binary mode, you can append a `b` to any of the aforementioned options. `rb` for **read binary**, for example.

There is also **random** mode, which allows both reading and writing. To use this option, add a `+` at the end of the aforementioned options. This can be used with the binary options too, but it must be specified at the end. For example, `a+` for **append random**, and `ab+` for **append binary random**.

There are tables on the [AYAYA wiki](https://emily.shillest.net/ayaya/index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/FOPEN) for quickly viewing the details of each mode.

If you want to open a file without knowing beforehand what files are available, you can use the `FENUM` (File Enumerate) function to get a list of files in the directory you point it to. This list will be a string, separated by commas unless you specify a different delimiter. It is advisable to choose a delimiter that is not valid in file names, so you can guarantee that you'll be able to split it cleanly.

```c
OnListFiles
{
	_files = FENUM("examplefiles/","|")
	_files = SPLIT(_files,"|")
	
	_display = ""
	foreach _files; _file
	{
		_display += "\![*]%(_file)\n"
	}
	"\_qExample Files:\n\n%(_display)"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L0.ListFiles)

The above function will output the current list of files in the `examplefiles` directory, in a list formatted with choice markers and linebreaks.

The `|` character is not valid to use in filenames, so no matter what the names of the files are, this operation will split them up properly.

---

# Further Context

But why would someone want to edit a file? There are plenty of reasons! Here are some examples:

* Saving data about something the user has used your ghost to create so that they can load it later or share with someone else by sending the file
* Downloading a file from the internet, then reading its contents to gather some sort of information (like weather data! this is called **scraping**)
* Loading an external dictionary of some sort

Working with files can be a little intimidating at first, but if you take it a step at a time you can make some really neat things.

Something I've used files for is saving playlists outside the ghost. This makes it so that playlists can be shared between ghosts with music players, too!

```c
OnPlaylistName //After the user types a name
{
	_name = TOSTR(reference0) //Removing illegal characters
	_name = REPLACE(_name,"\","") 
	_name = REPLACE(_name,"/","")
	_name = REPLACE(_name,":","")
	_name = REPLACE(_name,"*","")
	_name = REPLACE(_name,"%(CHR(0x22))","")
	_name = REPLACE(_name,"<","")
	_name = REPLACE(_name,">","")
	_name = REPLACE(_name,"|","")
	_name = REPLACE(_name,"]","") //This one is because sakurascript
	
	
	_playlists = FENUM("/../../playlists/","|")
	_playlists = SPLIT(_playlists,"|")
	if ASEARCH("%(_name).m3u",_playlists) != -1 && reference1 == ""; "\![raise,OnPlaylistOverwrite,%(_name),are you sure]\e"
	else
	{
		_path = "/../../playlists/%(_name).m3u"
		_o = FOPEN(_path,"w") //Create a new file
		
		for _i = 0; _i < ARRAYSIZE(CurrentPlaylist); _i++
		{
			void FWRITE(_path,"%(CurrentPlaylist[_i])") //Write each song's file path
		}
		
		void FCLOSE(_path)
		
		"\![close,inputbox,OnPlaylistName]\0%(bb)\_q"
		--
		if _o == 1 //If it saves successfully
		{
			"[Playlist saved successfully as '%(_name)'.]"
		}
		else //If saving fails
		{
			"[Failed to save playlist.]"
		}
	}
}
```

This uses a slightly different method of checking if the file was saved successfully. It also checks if a file of the same name exists before it opens it, that way the user doesn't accidentally overwrite an old playlist!

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2006%20-%20File%20Management/01%20-%20Reading%20Files.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2005%20-%20Common%20Functions/05%20-%20EVAL.md)