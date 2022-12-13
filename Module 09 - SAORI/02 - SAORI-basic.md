# Lesson 02 - SAORI-basic

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2010%20-%20YAYA%20Libraries/00%20-%20YAYA%20as%20SHIORI.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%20009%20-%20SAORI/01%20-%20SAORI-universal.md)

Calling SAORI-basic is very similar to calling SAORI-universal. This is because you have to use the [proxy SAORI](https://github.com/ukatech/csaori/releases/tag/saori_proxy_ex_v1.0.2), which is itself SAORI-universal, to call them.

First, you need to have the proxy saori and your chosen SAORI-Basic in the same folder as your yaya.dll, or in a subfolder. Then, you can use `FUNCTIONEX` to call the proxy SAORI. The first argument will be the relative filepath to the proxy SAORI. Then, the second argument is the relative filepath to the SAORI-basic to call. The proxy SAORI will use this to run the SAORI-basic. After that, you can start writing any arguments that your chosen SAORI-basic needs.

For this example, I will use the SAORI [ImageCompositor](https://zichqec.github.io/s-the-skeleton/saoris_plugins_tools#imagecompositor). This SAORI composites multiple images together and saves them as a .png file. (Note: if you get a warning about this file being a virus, please do let me know. I wrote it myself and there is nothing malicious in it, so I have to report it as a false positive to microsoft. The source code is available on my site if you want to look for yourself.)

```c
OnCompositeImages
{
	_i = FUNCTIONEX("proxy_ex.dll","ImageCompositor.exe","output.png","input1.png","input2.png")
	
	if "Done" _in_ _i
	{
		"Composited images successfully."
	}
	else
	{
		"%(_i)"
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M9.L2.CompositeImages)

In the code above, we first specify the proxy SAORI, then the ImageCompositor SAORI. Then, following the instructions of ImageCompositor, we add the output file name, and a couple of input files.

If the SAORI executes successfully, we output a message saying so. If it does not, we display the contents of `_i`, because this specific SAORI will output an error message.

As you can see from this example compared to the window_info example, SAORI are extremely varied. YAYA's method of calling them will always be the same, but what sort of input you need to give and what sort of output you get will vary widely based on what SAORI you're using. That's because, in theory, you can do *anything* with SAORI. But that is, of course, outside the scope of a guide for learning YAYA.

[Next module >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2010%20-%20YAYA%20Libraries/00%20-%20YAYA%20as%20SHIORI.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%20009%20-%20SAORI/01%20-%20SAORI-universal.md)