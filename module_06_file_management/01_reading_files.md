# Module 06 - File Management

## Lesson 01 - Reading Files

[Next lesson >>](../module_06_file_management/02_writing_files.md)

[<< Previous lesson](../module_06_file_management/00_opening_and_closing_files.md)

Once a file has been opened in read mode (or one of the random modes), each line of the file can be read one at a time with `FREAD`. You must again send the filepath of the file you want to read as an argument.

`FREAD` will read one line of the file each time it is called. The end of line characters (CR and LF) will be omitted.

If `FREAD` is successful, the return will be either the string of text for that line of the file, or `-1` if it has reached the end of the file. If it fails, it will return an empty string.

```c
OnReadFile
{
	_file = "examplefiles/readexample.txt"
	_hellos_found = 0
	
	if FOPEN(_file,"r") == 1
	{
		for _f = FREAD(_file); _f != -1; _f = FREAD(_file)
		{
			if "Hello, world!" _in_ _f
			{
				_hellos_found++
			}
		}
		
		void FCLOSE(_file)
	}
	
	"Number of ""Hello, world!""s found in file: %(_hellos_found)"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M6.L1.ReadFile)

The above function will output `Number of ""Hello, world!""s found in file: `, followed by the number of lines containing the string "Hello, world!" in the example file.

---

## Further Context

The loop in the above function is a way to read every single line in a file. It initializes the variable `_f` to the first line of the file, and each time the loop repeats, it reads a new line, until `FREAD` returns `-1` which causes the loop to stop.

You don't have to use `FREAD` in a loop! If you're expecting a file with a very particular format, where you know what data will be on each line, you can just write the exact number of `FREAD` commands you need.

Here's another example that reads a playlist file, and copies the playlist into an array.

```c
OnLoadPlaylist
{
	PlaylistArray = IARRAY

	_file = "../../playlists/myplaylist.m3u"
	void FOPEN(_file,"r")
	
	for _f = FREAD(_file); _f != -1; _f = FREAD(_file)
	{
		PlaylistArray ,= _f
	}
	
	void FCLOSE(_file)
}
```

[Next lesson >>](../module_06_file_management/02_writing_files.md)

[<< Previous lesson](../module_06_file_management/00_opening_and_closing_files.md)
