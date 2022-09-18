What is YAYA exactly, and what is it not? These are important questions to answer before we begin.

YAYA is a simplified programming language based on C for the purpose of creating Ukagaka, also known as Ghosts. It is a continuation of the AYA language. If you're looking for a guide on general ghost making, try Zarla's guide [right here!](http://ashido.com/ukagaka/) It's a great resource to get you started. Ghosts have many different moving parts; this guide exists to focus on YAYA specifically, and basic computer science concepts.

YAYA can be used as a general purpose coding language, but for the purposes of ghost making, it is being implemented as what is called a SHIORI. SHIORI process events sent to them from the baseware, and return a response that should be displayed to the user. What response depends on what you, the ghost's developer, program in.

Baseware is the program that calls on the dll file of the SHIORI (in this case YAYA), processes the SakuraScript tags in the returned script, and puts all of that together to make your ghost react. This guide will assume you are using [SSP](http://ssp.shillest.net/), but other baseware also exist, most notably Materia and CROW. Neither of these have been updated in a long time, however, so we will stick to SSP.

YAYA code, as seen in the previous lesson, looks something like this:

```c

request
{
	"Hello, world!"
}

```

It is written in files with the extension .dic. If you're in a .dic file in a ghost made in YAYA, you're looking at YAYA code. It _is_ possible to write YAYA code in files with other extensions, most notably .txt, but in general you will be writing in .dic files.

There are multiple other languages you will have to know to make a ghost, though, and you will need to be able to tell them apart. SERIKO and MAYUNA are the languages used to make shells for ghosts. The code for animations is called SERIKO, and the code for dressups is called MAYUNA. If you're in surfaces.txt, that's what you're looking at. It'll look something like this:

```c

animation0,interval,random,4
animation0.pattern0,overlay,100,0,0,0
animation0.pattern1,overlay,-1,100,0,0

```

It may also look like this:

```c

0interval,random,4
0pattern0,100,0,overlay,0,0
0pattern1,-1,10,overlay,0,0

```

SakuraScript is a system of tags, which you can use in your scripts to make the baseware do certain things, like changing surfaces, displaying images, opening input boxes, etc. It looks like this:

```

"\0\s[0]Hello,\w4 world!\e"

```

We will have to go over a little SakuraScript at some points, since it works together with YAYA now at times. For now, just know that text within double quotes `"` or single quotes `'` can contain SakuraScript.