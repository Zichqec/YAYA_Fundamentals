# Module 06 - File Management

## Lesson 02 - Writing Files

[Next lesson >>](../module_06_file_management/03_deleting_files_and_working_with_directories.md)

[<< Previous lesson](../module_06_file_management/01_reading_files.md)

Writing files is similar to reading them. You have two choices of mode here. As mentioned before, opening a file that doesn't exist in `write` or `append` mode will create a new file. Meanwhile, opening an *existing* file in `write` mode will erase the current contents and start fresh, while opening an existing file in `append` mode will keep the contents and let you add onto the end of the existing file.

```c
OnWriteToFile
{
	_playlist = ("song_1.mp3","song_2.mp3","song_3.mp3")

	_file = "examplefiles/myplaylist.txt"
	if FOPEN(_file,"w") == 1
	{
		foreach _playlist; _song
		{
			void FWRITE(_file,_song)
		}
		
		void FCLOSE(_file)
		"Playlist saved."
	}
	else
	{
		"Saving playlist failed."
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M6.L2.WriteToFile)

The above function will output either `Playlist saved.` or `Saving playlist failed.`, depending on if the operation was successful or not.

---

## Further Context

You don't have to stick to `.txt` extensions, by the way! For my ghost [Warrior Generator](https://ukagaka.zichqec.com/ghost/warrior_generator), I use `.wgc` for Warrior Generator Character, and `.wgd` for Warrior Generator Design. These are still just text files that you can open up in a text editor!

`.m3u` is another good example; this is just a text file you can open, which stores the filepaths of songs, and acts as a playlist. Most music player ghosts make use of these.

Here's an example of saving a design file in Warrior Generator (but tidied up a little).

```c
OnSaveDesignFile
{
	_fname = TOSTR(reference0)
	_fname = REPLACE(_fname,"\","") //Removing illegal characters
	_fname = REPLACE(_fname,"/","")
	_fname = REPLACE(_fname,":","")
	_fname = REPLACE(_fname,"*","")
	_fname = REPLACE(_fname,"%(CHR(0x22))","")
	_fname = REPLACE(_fname,"<","")
	_fname = REPLACE(_fname,">","")
	_fname = REPLACE(_fname,"|","")
	_fname = REPLACE(_fname,"]","") //This one is because sakura script
	
	_path = "/../../saved_data/designs/%(shellfld)/%(_fname).wgd"
	if FOPEN(_path,"w") == 1 //Create a new file
	{
		void FWRITE(_path,"Shell|%(nowshell)")
		void FWRITE(_path,"homeurl|%(shellauthor[2])")
		foreach currentdressups; _dressup
		{
			_category = _dressup[0,"|"]
			_name = _dressup[1,"|"]
			
			void FWRITE(_path,"%(_category)|%(_name)")
		}
		
		void FCLOSE(_path)
	}
}
```

This function first writes a couple of lines that will always be there, and then it writes an arbitrary amount of lines based on how many dressups are currently applied to the ghost (since the dressups handle the designs).

[Next lesson >>](../module_06_file_management/03_deleting_files_and_working_with_directories.md)

[<< Previous lesson](../module_06_file_management/01_reading_files.md)
