# Lesson 01 - What is YAYA

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2000%20-%20Overview/02%20-%20Initial%20Setup.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2000%20-%20Overview/00%20-%20What%20is%20this%20guide.md)

YAYA is a simplified programming language based on C for the purpose of creating Ukagaka, also known as Ghosts. It is a continuation of the AYA language. If you're looking for a guide on general ghost making, try Zarla's guide [right here.](http://ashido.com/ukagaka/) It's a great resource to get you started.

Ghosts have many different moving parts; this guide exists to focus on YAYA specifically, and basic computer science concepts.

If you're making a ghost, you will need to know how to write code for the shell in a language called SERIKO, and MAYUNA if you also want to make dressups. You will also need to know how to write SakuraScript. This guide will not be covering any of those languages, but you need to be able to tell them apart.

YAYA code, as seen in the previous lesson, looks something like this:

```c
HelloWorld
{
	"Hello, world!"
}
```

It is written in files with the extension `.dic`. If you're in a dic file in a ghost made in YAYA, you're looking at YAYA code.

As mentioned, SERIKO and MAYUNA are the languages used to make shells for ghosts. The code for animations is called SERIKO, and the code for dressups is called MAYUNA. If you're in surfaces.txt, you're looking at SERIKO and/or MAYUNA code. It'll look something like this:

```c
animation0.interval,random,4
animation0.pattern0,overlay,100,0,0,0
animation0.pattern1,overlay,-1,100,0,0
```

It may also look like this:

```c
0interval,random,4
0pattern0,100,0,overlay,0,0
0pattern1,-1,10,overlay,0,0
```

We will not be covering any SERIKO or MAYUNA in this guide.

SakuraScript is a system of tags, which you can use in your scripts to make the baseware (SSP) do certain things, like changing surfaces, displaying images, opening input boxes, etc. It looks like this:

```
"\0\s[0]Hello,\w4 world!\e"
```

We will have to go over a little SakuraScript at some points, but I'll explain it when we get there. For now, just know that text within double quotes `"` or single quotes `'` can contain SakuraScript.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2000%20-%20Overview/02%20-%20Initial%20Setup.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2000%20-%20Overview/00%20-%20What%20is%20this%20guide.md)