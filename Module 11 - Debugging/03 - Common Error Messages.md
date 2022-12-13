# Lesson 03 - Common Error Messages

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/04%20-%20Emergency%20Mode.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/02%20-%20Dissecting%20Error%20Messages.md)

Alright, now for a look at some common error messages and what they mean.

```
error E0094 : The parenthesis {} is invalid or has not been closed correctly.
```

This is one of the trickiest errors. This means that somewhere, you have an additional curly bracket, or a missing curly bracket. This one can't point you to the exact line number, so you will have to comb very carefully through the file in question to find where it is. Check each bracket and make sure it pairs with the correct one. If you're using NotePad++, you can click on a bracket to highlight the one it is paired with.

Note that there are also similar error messages for `()` and `[]`, so make sure you look closely at the error message!

```
error E0002 : Too much '}' exist.
```

The sister to the above. This means you have an extra closing bracket somewhere. This is one of those errors that can spawn a thousand other errors after it. It should point you to the exact line number where there is an extra bracket.

```
error E0004 : Unanalyzable. Probably, '{' is required here.
```

You are missing an opening bracket, usually after a function name.

```
error E0003 : Invalid name is used for the function.
```

This one will display the code in question after the message. This could be a function name with invalid characters, or more often, I see this one if I accidentally write a duplicate function name, and then it tries to read the code after it as a function name.

```
error E0001 : Function name is required.
```

This may indicate that you have a function without a name, or more commonly, you have a function with an invalid name (or it thinks you do because of another error like the above), so now it thinks you have a nameless function.

```
error E0013 : Duplicated function names exist.
```

You have two functions with the exact same function name, which is not valid. This error will usually cause a cascade of other errors.

```
error E0007 : Incomplete string exists.
```

You have a string that is not closed. This commonly appears if you use `/` to create menus with strings spread across multiple lines, and you forget to add it somewhere. It may also appear if your quotes mismatch; for example, if you write a string like 'this".

```
error E0029 : Invalid substitution exists.
```

This usually appears if you do something like try to assign a value to a function rather than a variable. Variables may have values assigned to them, but functions cannot. For example...

```c
MyFavoriteColor
{
  "Blue"
}
```

With this setup, trying to write `MyFavoriteColor = "Green"` would cause an error.

```
error E0071 : Undefined function is being called.
```

This one is a tricky one. If you write a call to a function that doesn't exist, sometimes YAYA gets fussy about it. However, it *only* does this if you include parameters. So if there is no function called `SomeFunction`, `_i = SomeFunction` is fine and is ignored, but `_i = SomeFunction(_some_parameter)` causes an error.

```
error E0030 : Undefined function flag (anti-duplication) is specified.
```

This appears if you have an invalid function modifier, whether it is misspelled or is not an existing modifier. For example, if you misspelled `nonoverlap` as `nonoerlap`.

```
error E0046 : The label of 'when' must be a constant.
```

case/when must have constant values only. `when 6` and `when "six"` are valid, but writing something like `when SomeVariable` is not valid.

```
error E0022 : Invalid expression.
```

This one is usually fairly simple, it appears if you have accidentally written an expression like `_i = 10 - / 20`, which isn't valid.

```
error E0032 : Indispensable functions are not found.
```

This means you are missing one or more of the 3 required functions: `load`, `unload`, and `request`. You won't usually see this one come up, but if you do, there might be something wrong with your template or library.

You may also see something like this appear if you hit the loop limit, function depth limit, or memory limit, and you don't have the optional debug functions set up. In that case, it's just letting you know that you've hit one of those limits, and you should probably check on whatever code caused it to trigger. (You will only see it appear in this way if the ghost is able to run at all.)

```
error E0005 : Failed to open the file.
```

YAYA couldn't load the specified file. Check that the spelling of the filepath is correct.


There are many other errors, but they are usually fairly self-explanatory. If you're absolutely not sure what is causing the error, you can try commenting out most of the code, and slowly uncommenting it bit by bit until you find the part it's complaining about. Though be careful, sometimes errors (such as duplicated function names) are actually caused by code that is in other files and has far reaching effects.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/04%20-%20Emergency%20Mode.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/02%20-%20Dissecting%20Error%20Messages.md)