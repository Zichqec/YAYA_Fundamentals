# Lesson 00 - What are SAORI

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%209%20-%20SAORI/01%20-%20SAORI-universal.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%208%20-%20The%20Preprocessor/01%20-%20Debug%20Options.md)

**SAORI** stands for Supplemental Archive Onto Restricted Intelligence. In short, they are programs that can be written in (theoretically) any language, to extend the functionality of a ghost(/plugin/etc.) beyond the limits of your chosen language. For our purposes, that means you can write code in a language like C++ or Python, and call that code from YAYA.

First of all, there are two different SAORI standards. SAORI-universal, which are .dll files, and SAORI-basic, which are .exe files. YAYA can call SAORI-universal natively, but in order to call SAORI-basic, it must use a [proxy SAORI](https://github.com/ponapalt/csaori/releases/tag/saori_proxy_ex_v1.0.2). Because of this, SAORI-basic may take a moment to execute.

In order to use a SAORI, you will need to include its file in the same folder as your yaya.dll, or in a subfolder. Which is to say, it must be distributed along with your ghost(/plugin/etc.).

Note: Many SAORI, as a general rule, only work on Windows. They may cause the baseware to crash on Mac or Linux, so you should take care how you use them, and consider giving the user an option to toggle off any functions that may use them.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%209%20-%20SAORI/01%20-%20SAORI-universal.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%208%20-%20The%20Preprocessor/01%20-%20Debug%20Options.md)