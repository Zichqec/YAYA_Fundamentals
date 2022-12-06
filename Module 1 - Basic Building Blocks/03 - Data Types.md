# Lesson 03 - Data Types

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/04%20-%20Variables.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/02%20-%20Comments.md)

YAYA supports 4 data types, which we will cover here. There are different **types** of information, which affects what operations can be performed on them. In general; number types can be used for math, while string types hold text. More on this when we learn how to actually do stuff with this data.

First of all, there are integers. Integers are whole numbers, and can be positive or negative. Versions of YAYA from Tc566-1 and later use 64-bit integers, but older versions used 32-bit.

```c
OnInteger
{
	10
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.Integer)

The above function will output `10`

//I want to move this section to footnotes
Integers may also be written as binary values by adding "0b" to the start of a value, or as hexadecimal values by adding "0x" to the start of a value.

```c
OnBinaryInteger
{
	0b1010
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.BinaryInteger)

```
OnHexInteger
{
	0xa
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.HexInteger)

Both of the above functions will output `10`

Next, there are real numbers, also known as doubles or floating point numbers. These are numbers that have decimal points, but lose precision with very big numbers.

```c
OnRealNumber
{
	3.14
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.RealNumber)

The above function returns `3.140000`

Note that you must always write a decimal point if you want a real number, even if there is only a 0 after it. Otherwise, it will be interpreted as an integer.

Also notice that there are four 0s appended to the end of the number. This is because YAYA always puts 6 digits after the decimal point, no more and no less.


Next, there are the different string types. Strings can be any characters, enclosed in quotes.

```c
OnDoubleQuoteString
{
	"Hello, world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.DoubleQuoteString)

The above function will output `Hello, world!`

These types of strings can expand embedded elements, which we will cover in a future lesson.

There is another type of string as well, written with single quotes (apostrophes).

```c
OnSingleQuoteString
{
	'Hello, world!'
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.SingleQuoteString)

The above function will output `Hello, world!`

These are considered simple strings, and do not expand embedded elements.

When writing strings, you must always enclose them in a matching set of quotes. So `"Hello, world!"` is valid, but `'Hello, world!"` is not and will cause an error.

Additionally, you cannot write `"` in a string enclosed in `"`, and you cannot write a `'` in a string enclosed in `'`. Doing so makes YAYA think it has reached the end of the string, and the leftover text will cause an error. So `"What's up?"` is valid, but `'What's up?'` is not.

In order to get around this, you can use `'` type strings when you need to write `"`, and `"` type strings when you need to write `'`.

```c
OnUseOtherQuotes
{
	"It's working!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.UseOtherQuotes)

The above function will output `It's working!`

The other option is to **escape** the quotation marks. You can do this by writing two of them in a row. The first one escapes the second one, so the second one will be displayed normally without breaking the string.

```c
OnEscapeQuotes
{
	"Hello, ""world""!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.EscapeQuotes)

The above function will output `Hello, "world"!`

You only need do this if the quote you want to write matches the quotes that the string is enclosed in. So `"` needs to be escaped in strings enclosed in `"`, and `'` needs to be escaped in strings enclosed in `'`.

```c
OnEscapeSingleQuotes
{
	'It''s working!'
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.EscapeSingleQuotes)

The above function will output `It's working!`


Note that with the above string types, you cannot put a linebreak in the middle of a string. If you need a linebreak in the code, you must use a `/`. Note that this only affects the look of the code; this will not add a linebreak to the output string itself.

```c
OnLinebreakInCode
{
	"Hello, /
	world!"
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.LinebreakInCode)

The above function will output `Hello, world!`


Finally, there are "Heredocuments", which could be considered raw strings. These are written over multiple lines, and any linebreaks add the character CRLF (Carriage Return + Line Feed, which are, simply, invisible characters that make linebreaks). These can be written with both double quote style strings and single quote style strings.

```c
OnDoubleQuoteHeredocument
{
	<<"
	Hello, 
	world!
	">>
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.DoubleQuoteHeredocument)

The above function will output `Hello, (CR)(LF)world!` (This will only display as `Hello, ` in the companion ghost, see below.)

```c
OnSingleQuoteHeredocument
{
	<<'
	Hello, 
	world!
	'>>
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.SingleQuoteHeredocument)

The above function will output `Hello, (CR)(LF)world!` (This will only display as `Hello, ` in the companion ghost, see below.)

Note that the (CR) and (LF) for the above two functions are representative of the CR and LF characters, which are invisible.

Note that, no matter which type of string you use here, you can write single quotes or double quotes freely without breaking the string.

```c
OnHereDocumentQuotes
{
	<<"
	Hello, 
	"world"!
	">>
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M1.L3.HereDocumentQuotes)


The above function will output `Hello, (CR)(LF)"world"!` (This will only display as `Hello, ` in the companion ghost, see below.)

If you try to run these strings in a ghost as they are, you will only see the first line. This is because SHIORI requests have their information separated by CRLF, so the baseware will only see the first line as the response that should be output in the ghost's balloon. You can manipulate these strings if you want and replace the CRLF with a tag like \n, to make them work as a linebreak for your ghost's dialogue. We'll learn how to do that later.


The final data type that YAYA has is arrays, which we will cover in the next module.

---

# Further Context

I'll be honest, I would be shocked if you used more than strings and integers on a daily basis. So if this seems like a lot to remember, don't worry too much! You can always refresh yourself on these things as you need them, if you need them.

I really do mean it when I say you should reread over parts of this guide if you're new to coding. As you learn more, some of this stuff will start to make more and more sense.

Regarding the heredocuments, here is an example of how you might manipulate them in order to change the CRLF to `\n`.

```c
needleascii
{
	_ascii = <<"
    .                                                                            ________________                                              
    .                                                                           /                 \\                                             
    .                                                                          /                   \\                                            
    .                                                                         /                     \\                                           
    .                                                                        /        ________       \\                                          
    .                                                                       /       /         \\       \\                                         
    .                                                                      /       /           \\       \\                                        
    .                                                                     /       /             \\       |                                       
    .                                                                    /       |               |      |                                       
    .                                                                   /        |              /       |                                      
    .                                                                  /         \\             /       /                                       
    .                                                                 /           \\          /       _/                                         
    .                                                                /             _________        _/                                         
    .                                                               /                            _/                                              
    .                                                              /                           _/                                                
    .                                                             /                          _/                                                  
    .                                                            /                         _/                                                    
    .                                                           /                        _/                                                      
    .                                                          /                       _/                                                        
    .                                                         /                      _/                                                          
    .                                                        /                     _/                                                            
    .                                                       /                    _/                                                              
    .                                                      /                   _/                                                                
    .                                                     /                  _/                                                                  
    .                                                    /                 _/                                                                    
    .                                                   /                _/                                                                      
    .                                                  /               _/                                                                        
    .                                                 /              _/                                                                          
    .                                                /             _/                                                                            
    .                                               /            _/                                                                              
    .                                              /           _/                                                                                
    .                                             /          _/                                                                                  
    .                                            /         _/                                                                                    
    .                                           /        _/                                                                                      
    .                                          /       _/                                                                                        
    .                                         /      _/                                                                                          
    .                                        /     _/                                                                                            
    .                                       /    _/                                                                                              
    .                                      /   _/                                                                                                
    .                                     /  _/                                                                                                  
    .                                    /__/                                                                                                     
                                                                                                                                             
	">>
	_ascii = REPLACE(_ascii,C_CRLF,"\n")
	_ascii
}
```

... Ok, it's kind of a silly example, but! You can see why, for a weird "dialogue" like this, I would want to use a heredocument! The `_ascii = REPLACE(_ascii,C_CRLF,"\n")` bit at the bottom adds the `\n` tags for me, so I could just create this little ascii art without worrying about all the extra formatting. It looks a lot nicer in the file, too! (It's from the ghost [Needle](https://zichqec.github.io/s-the-skeleton/needle), if you were wondering.)

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/04%20-%20Variables.md)

[<< Previous Lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%201%20-%20Basic%20Building%20Blocks/02%20-%20Comments.md)