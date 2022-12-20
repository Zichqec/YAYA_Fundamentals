# Module 11 - Debugging

## Lesson 01 - LOGGING

[Next lesson >>](../module_11_debugging/02_dissecting_error_messages.md)

[<< Previous lesson](../module_11_debugging/00_peeking_behind_the_curtain.md)

`LOGGING` is a function that simply outputs whatever value you give it to the SHIORI log. That means you can output notes, the values of variables, etc.

```c
OnShowLogging
{
	LOGGING("====================================================================") //This one is just to make it easier to spot your LOGGING output in the SHIORI log
	LOGGING("friendship: %(friendship)")
	
	"Make sure you have Tama open to see the output in the log."
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M11.L1.ShowLogging)

The above function will output the string `Make sure you have Tama open to see the output in the log.`, and will also output the current value of the variable `friendship` to the SHIORI log.

The SHIORI log has a lot of information and tends to move very quickly. So, adding an additional indicator to make it easy to spot where your custom information is going to begin can be very helpful.

You can also use this to go step-by-step through your code if need be, to see where issues lie. For example, if you are not getting the expected output from a function, there could be multiple possible causes. Going step-by-step with `LOGGING` commands is a very methodical way to pinpoint the exact issue so you can correct it.

```c
//Consider that the command \![raise,OnBuggyFunction,red,vibrant] is being used to call this function
OnBuggyFunction
{
	LOGGING("====================================================================")
	LOGGING("reference: %(reference)")
	if refernce0 == "red"
	{
		LOGGING("Got into the first if check")
		if reference1 == "Vibrant"
		{
			LOGGING("Got into the second if check")
			"Yeah, I'm with you! Vibrant reds are the best!"
		}
		else
		{
			"Muted reds are fine I suppose. Better than that impostor, magenta."
		}
	}
	else
	{
		"Bah, other colors are boring."
	}
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M11.L1.BuggyFunction%3Ared%3Avibrant)

The above function will output the string `Bah, other colors are boring.`

Can you pinpoint why that is? Note that the references being sent to this function (if you click on the link here or the menu option in the companion ghost) are "red" and "vibrant". So, the expected response *should* be `Yeah, I'm with you! Vibrant reds are the best!`. So, at what point is this function not going as intended?

(If you've spent a while looking at this and you're still not sure, run this text through a [ROT13 decoder](https://www.boxentriq.com/code-breaking/rot13) for the answer: Gur svefg vs purpx unf ersrerapr zvffcryyrq nf ersreapr, naq gur purpx sbe Ivoenag fubhyq unir n ybjrepnfr i.)

With some practice and a little patience, you can solve many, many issues with the `LOGGING` function. If you're really stuck, just take it a step at a time. And always remember; if it seems like your code has ceased to follow logic, *go back to the basics.* Are your variables the right type? Have you checked with `GETTYPE` to be sure? Are they all spelled correctly? Did you know you can double click words in NotePad++ to highlight them, and other words that are spelled exactly the same will also be highlighted? If your changes don't seem to be taking effect at all, are you positive you're editing in the right files and not a duplicate or a backup? Have you triple checked that?

I have personally had *many* experiences where I was stuck on a problem for hours, only to find the solution was something extremely basic that I had overlooked. Always check your basics first.

[Next lesson >>](../module_11_debugging/02_dissecting_error_messages.md)

[<< Previous lesson](../module_11_debugging/00_peeking_behind_the_curtain.md)
