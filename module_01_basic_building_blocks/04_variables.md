# Module 01 - Basic Building Blocks

## Lesson 04 - Variables

[Next lesson >>](../module_01_basic_building_blocks/05_operators.md)

[<< Previous Lesson](../module_01_basic_building_blocks/03_data_types.md)

Variables are one of the most important building blocks of coding, and you should be well versed in them. Essentially, a variable is a like a bucket with a name which you can store bits of data in. To store a value in a variable, you assign the value with a single equals sign.

```c
OnAssignVariable
{
	MyVariable = "Neat!"
}
```

In the above function, MyVariable now contains the string `Neat!`. We can assign the variable to a different value using the same method again, as many times as we want.

The example above is storing a string, but variables can hold any of the data types. YAYA figures out what type a variable is when you first initialize it, depending on what you put.

```c
OnAssignVariables
{
	Var1 = 0 //Creates a new variable storing an integer
	Var2 = 0.0 //Creates a new variable storing a real number
	Var3 = "" //Creates a new variable storing a string
}
```

With the above code, we have created 3 new variables, each set up for a different type of data. Note that the initial assignment of a variable does not *have* to be one of these values; if you initialize a variable with the value `3.14`, it will know to make it a real number, and if you initialize a variable with `"Hello, world!"` it will know to make it a string.

At any time, you can assign a variable to a new value with `=`, and it will take on the type of the value you've given it. However, changing types that way is very bad practice, and can cause a lot of unexpected behavior. It is best to pick a type for your variable when you assign it, and then not change the type.

Initializing variables before you use them is good practice, or else you may sometimes get unexpected bugs. YAYA treats uninitialized variables as either an empty string or 0, depending on what type of operation is performed on them first. This means that sometimes, you may end up with a variable that should be an integer be assigned as a string instead.


To output the value that a variable holds, you can simply write the name of that variable by itself.

```c
OnOutputVariable
{
	var = "Hello, world!"
	var
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L4.OutputVariable)

The above function will output `Hello, world!`

(Note that if there are multiple outputs in one function, YAYA will pick one of them to output at random. We'll cover this more in a future module. Just be aware of it for now.)


Variable names are pretty flexible, but there are a few rules you must follow:

* They cannot begin with a number
* They cannot exactly match the names of reserved words (like if, else, etc)
* They cannot match the names of existing functions
* They cannot contain spaces or the following characters:

```
! " # $ % & ( ) * + , - / : ; < = > ? @ [ ] ` { | }
```

In general, stick to alphanumeric characters, underscores, and periods. Also note that variable names are case sensitive, so MyVariable is a different variable from myvariable.

Additionally, there is one more rule for naming. The variables in the previous examples are **global variables**. Once defined, they will hold their value forever unless you erase them, and can be used anywhere else in your code. However, if you create a variable with an underscore at the start of its name, this will be what is called a **local variable**. Local variables exist only until the brackets they are defined in end, at which point they are deleted. They can go deeper into the bracket hierarchy, but not up.

```c
OnUninitializedLocal
{
	{
		_dialogue = "Hello, world!"
	}
	_dialogue
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L4.UninitializedLocal)

The above function will not output anything, because the `_dialogue` variable was erased when the nested set of brackets ended.

Local variables also have a more limited **scope** than global variables; they can only be used within the function they are written in, and only within the brackets they were defined in. Global variables may be used in any function, at any bracket depth.

Remembering to initialize your variables is very important for local variables. If you need to calculate something with a local variable inside a set of nested brackets, but you need the result outside of the brackets, you can define the local variable at the highest point in the hierarchy where you need it.

```c
OnInitializeLocal
{
	_dialogue = ""
	{
		_dialogue = "Hello, world!"
	}
	_dialogue
}
```

[Click to run the above code in the Ghost Guides companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DGhost%20Guides%26info%3DOnExample.M1.L4.InitializeLocal)


The above function will output `Hello, world!`

This time, we initialized `_dialogue` as an empty string before we entered the nested brackets. This way, the variable still existed when we wanted to output the value.

---

## Further Context

You'll see why in the next lesson, but I'll say it again for good measure: **it is very important to initalize your variables before you use them.** In a ghost, usually this happens in OnFirstBoot! If you want your ghost to, say, have a counter of how many times you've pet them, it's really important to tell YAYA that the pet counter should be a number before it tries to do any math on it! Doing this in OnFirstBoot ensures that all your variables are initialized properly as soon as the user runs the ghost for the first time.

```c
//The first time the ghost is booted after being installed
OnFirstBoot
{
	//Initializing variables
	stroke = 0
	totalpets = 0
	
	"Hi thanks for downloading me blah blah blah..."
}

//When the mouse is over the ghost
OnMouseMove
{
	if reference4 != "" //This is checking if the mouse cursor is over a hitbox
	{
		stroke++
		if stroke % 40 == 0 //This just makes the user have to stroke for a little while before a petting dialogue will happen
		{
			totalpets += 1
			"You're petting me???"
		}
	}
	else
	{
		stroke = 0
	}
}
```

[Next lesson >>](../module_01_basic_building_blocks/05_operators.md)

[<< Previous Lesson](../module_01_basic_building_blocks/03_data_types.md)
