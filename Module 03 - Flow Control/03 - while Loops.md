# Lesson 03 - while Loops

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/04%20-%20for%20Loops.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/02%20-%20switch.md)

Another very important part of flow control is **loops**. Loops are a control structure that allow you to repeat the same code multiple times if certain conditions are met.

You can use loops to do things like perform the same checks on every line in a file, display an inventory of items that may be any length, and much more.

The simplest of the loops to grasp is the `while` loop. While a condition is true, repeat the code inside.

```c
OnWhile0to10
{
	_display = ""
	_i = 0
	while _i < 10
	{
		_display += _i
		_i++
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L3.While0to10)

The above function will output the string `0123456789`

In this function, we create a local variable called `_output` to store our output. Then we initialize a variable called `_i` to `0`, and enter a loop that checks if `_i` is less than 10.

Since `_i` is less than 10, the code runs, adding the contents of `_i` to the `_display` variable. After this, we increment the value of `_i` by 1. Then, the end of the loop is reached. So, the condition is checked again. `_i` is now equal to `1`, which is still less than 10, so it runs the same code again. Rinse and repeat until `_i` is equal to 10, at which point the loop will be exited, and we output the string stored in `_display`.

You can use any condition you want with the `while` loop. But you must be very careful that your condition will eventually be true. Otherwise, the loop will never exit, creating an infinite loop which will freeze and crash the baseware.


Modern versions of YAYA (Tc564-1 or later) have implemented a default loop limit of 10000 to prevent crashes, which you can change or remove if you prefer by adding `looplimit,#` with your desired number of maximum loops to yaya.txt. So `looplimit,100` will only allow a loop to run 100 times before exiting it. `looplimit,0` will remove the loop limit altogether.

If you hit the loop limit, the loop will be aborted and the code will continue at the point immediately after the loop.


As you can see with the `while` loop, we need statements outside of the loop's condition to ensure it does not loop forever. For this reason, you must be very careful with `while` loops. They are the easiest to understand, but also the most prone to causing infinite loops.

```c
OnWhileInfinite
{
	_display = ""
	_i = 0
	while _i < 10
	{
		_display += "Hello, world!"
	}
	_display
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M3.L3.WhileInfinite) \[THIS WILL FREEZE THE GHOST AND SSP FOR A WHILE.]

In the code above, the condition will never be true, and thus the loop will run forever. Or, if the loop limit is in place, it will run 10000 times by default, and output the string `Hello, world!Hello, world!`... etc, with the words "Hello, world!" repeated 10000 times. 


One other note. We will go over output candidates towards the end of this module, but just know that in YAYA, writing an output directly inside of a loop may not behave how you would expect. For now, use local variables to store the values you want to output in the end.

---

# Further Context

Loops in combination with arrays are something I love very much. They are my bread and butter, and learning how to make use of them has enabled me to do a great many things. Of course, I've made many, many infinite loops in the process (I've been using YAYA since before the loop limit was added), but that just tends to happen when you're learning, really. Don't sweat it if you do this by accident.

A note about the loop limit; if you hit it, YAYA will fire an event of its own called `shiori.OnLoopLimit`. You can use this event, along with functions such as GETCALLSTACK, to output debug information and learn what caused the infinite loop, etc. If you don't have this event, you will see an error output that mentions "shiori.OnLoopLimit". This just means that you don't have the function set up, but you hit the loop limit somewhere and it is alerting you of this. There are similar functions for hitting the memory limit and function call limit. Those error messages confused my for a while after they were implemented, but once you know what they mean they are rather helpful.

Anyways, here's an example of a `while` loop in the wild!

```c
_food1 = foods
_food2 = foods
while _food1 == _food2; {_food2 = foods}

"So do you prefer %(_food1) or %(_food2) more? I kinda lean towards %(_food2) most of the time, but %(_food1) is the best if it's made well. You gotta trust that the chef is gonna do a great job, you know? %(_food1) is tricky business."
```

The above is an example of a dialogue that uses two random food names, but it uses each one multiple times in the dialogue, and has to keep them consistent throughout. So, the first thing we want to do is assign two different variables to have random food names. This is done easily enough, but what if the foods that are drawn for each variable just so happen to be the same? What if it picks "stale breadsticks" for both? That would be awkward. So, we use a very simple while loop to ensure this never happens. If the foods are the same, it will reassign `_food2`, and it will continue to do so until they are *not* the same.

Note that the while loop can't have the brackets omitted, even though there is only a single statement in it. Loops must always have brackets.

Also, sidenote: `_i` is a programming trope and is very often used as the counter for things like loops. It is very old, and has its roots in FORTRAN, and mathematics even before FORTRAN, I hear. I usually imagine it stands for index, but it could also stand for integer, iteration, etc.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/04%20-%20for%20Loops.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2003%20-%20Flow%20Control/02%20-%20switch.md)