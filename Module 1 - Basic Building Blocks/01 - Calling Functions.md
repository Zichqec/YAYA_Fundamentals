# Lesson 01 - Calling Functions

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/02%20-%20Comments.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)

Most programming languages have a `main` function, which is called when the program starts. YAYA does not have a main function, and instead it needs 3 functions to be able to run; `load`, which is called when YAYA loads; `unload`, which is called when YAYA unloads; and `request`, which is called anytime the baseware sends a SHIORI request.

If you're writing for a ghost using YAYA's base dic files, or with another library, these functions will already be in use. So, you won't be able to use them yourself (unless you want to play around with that existing code).

If you are using the companion ghost along with this guide, then I recommend running the code in each lesson by clicking the links below them. You can also look inside the dic files, edit the code there yourself, and run it from the ghost's menu or by clicking the links in this guide again. (Make sure you save the files and reload the ghost before testing!)

If you are *not* using the companion ghost, you should copy and paste the example code bits into your own ghost, and call them with the raise tag via script input (opened with Ctrl S, as long as you have SSP's developer mode turned on). For the example below, the tag `\![raise,OnCallAnotherFunction]` will call the code. Note, this will only work with functions whose names start with On. We'll cover this more in depth later when we get into SHIORI events and how they're used.


All of that aside, when you're writing functions, sometimes you want them to call another function. This can be accomplished simply by writing the name of that function.

```c
OnCallAnotherFunction
{
	SomeOtherFunction
}

SomeOtherFunction
{
	"Hello, world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L1.CallAnotherFunction)

The above function will output `"Hello, world!"`

When SomeOtherFunction is called, it **returns** the value "Hello, world!" to the function that called it, in this case "OnCallAnotherFunction". OnCallAnotherFunction can then make use of that value.

---

# Further Context

This one's a bit short! I highly, *highly* recommend using the companion ghost with this guide if you can, since it'll let you play around with the code and get a feel for it.

As for why you might want to call a function from another function, it's extremely useful, actually! Consider these two examples. Here's a menu with a couple little options.

```c
OnMainMenu
{
	"/
	\![*]\q[Menu item 1,OnMenu1]\n/
	\![*]\q[Menu item 2,OnMenu2]\n/
	\![*]\q[Menu item 3,OnMenu3]\n/
	"
}

OnMenu1
{
	"Reaction 1A"
	"Reaction 1B"
	"Reaction 1C"
	--
	"\n\n\![*]\q[Back,OnMainMenu]  \![*]\q[Cancel,]"
}

OnMenu2
{
	"Reaction 2A"
	"Reaction 2B"
	"Reaction 2C"
	--
	"\n\n\![*]\q[Back,OnMainMenu]  \![*]\q[Cancel,]"
}

OnMenu3
{
	"Reaction 3A"
	"Reaction 3B"
	"Reaction 3C"
	--
	"\n\n\![*]\q[Back,OnMainMenu]  \![*]\q[Cancel,]"
}
```

When each of the menu options is clicked, a random response will be said, and then the user will be presented with back buttons. But as you can see, the script for the back buttons is exactly the same for each of these! So if you ever wanted to change  anything about the back buttons, you'd have to change it in 3 places, even though it's the same script.

This concept will be explored in more depth later, but it's a recipe for all kinds of bugs! So instead, you can tuck that script into a separate function, and call that function to get the script. That way, if you change the script later, it'll automatically be used in each menu!

```c
OnMainMenu
{
	"/
	\![*]\q[Menu item 1,OnMenu1]\n/
	\![*]\q[Menu item 2,OnMenu2]\n/
	\![*]\q[Menu item 3,OnMenu3]\n/
	"
}

OnMenu1
{
	"Reaction 1A"
	"Reaction 1B"
	"Reaction 1C"
	--
	BackButtons
}

OnMenu1
{
	"Reaction 2A"
	"Reaction 2B"
	"Reaction 2C"
	--
	BackButtons
}

OnMenu1
{
	"Reaction 3A"
	"Reaction 3B"
	"Reaction 3C"
	--
	BackButtons
}

BackButtons
{
	"\![*]\q[Back,OnMainMenu]  \![*]\q[Cancel,]"
}
```

It may not seem like such a big deal in this example, but imagine if your ghost had a menu with *20* items. The bigger and more complicated your menus and functions become, the more important this concept becomes, both for saving you a lot of tedious work and for avoiding bugs!

[Next lesson>>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/02%20-%20Comments.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/00%20-%20Function%20Structure.md)