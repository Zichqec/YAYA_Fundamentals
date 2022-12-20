# Module 09 - SAORI

## Lesson 02 - SAORI-basic

[Next module >>](../module_10_yaya_libraries/00_yaya_as_shiori.md)

[<< Previous lesson](../module_09_saori/01_saori-universal.md)

Calling SAORI-basic is very similar to calling SAORI-universal. This is because you have to use the [proxy SAORI](https://github.com/ukatech/csaori/releases/tag/saori_proxy_ex_v1.0.2), which is itself SAORI-universal, to call them.

First, you need to have the proxy saori and your chosen SAORI-Basic in the same folder as your yaya.dll, or in a subfolder. Then, you can use `FUNCTIONEX` to call the proxy SAORI. The first argument will be the relative filepath to the proxy SAORI. Then, the second argument is the relative filepath to the SAORI-basic to call. The proxy SAORI will use this to run the SAORI-basic. After that, you can start writing any arguments that your chosen SAORI-basic needs.

For this example, I will use the SAORI [histomachine](https://github.com/ecclysium/histomachine). This SAORI creates histograms from the data you input, and saves them as png files.

```c
OnMakeGraph
{
	void FUNCTIONEX("saori/proxy_ex.dll","saori/histomachine.exe","darkslateblue","#71a6f0","95,98,2000,7,8,10","95,98,2000,7,8,10","Windows OS numbers","example_graph.png",75)
	
	"Image output to the \_a[OnOpenGraphs]graphs\_a folder."
}

OnOpenGraphs
{
	"\C\![open,explorer,ghost/master/graphs/]"
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/YAYA_Fundamentals/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M9.L2.MakeGraph) \[Note: this may take a few seconds to run. This is normal for SAORI-basic.]

The above function will output `Image output to the \_a[OnOpenGraphs]graphs\_a folder.`, and will create the following image:



In the code above, we first specify the proxy SAORI, then the histomachine SAORI. Then, following the instructions of histomachine, we specify some colors, labels for each column, the height of each column, a name for the graph, a name for the file, and the size of the image.

After the SAORI executes, we provide a link to where the image may be viewed. It would also be possible to display this image directly in the balloon with a `\_b` tag.

As you can see from this example compared to the window_info example, SAORI are extremely varied. YAYA's method of calling them will always be the same, but what sort of input you need to give and what sort of output you get will vary widely based on what SAORI you're using. That's because, in theory, you can do *anything* with SAORI. But that is, of course, outside the scope of a guide for learning YAYA.

[Next module >>](../module_10_yaya_libraries/00_yaya_as_shiori.md)

[<< Previous lesson](../module_09_saori/01_saori-universal.md)
