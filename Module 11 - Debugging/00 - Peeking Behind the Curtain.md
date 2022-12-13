# 00 - Peeking Behind the Curtain

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/01%20-%20LOGGING.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2010%20-%20YAYA%20Libraries/01%20-%20YAYA%20as%20Other%20Things.md)

Sometimes, you're just not sure what's going on in your code, or where things are going wrong. Wouldn't it be nice if you could take a peek, and see what values your variables are holding at any given moment? Good news, you can!

The **SHIORI log** is a tool you can use to have a look at what's going on. It is a log YAYA makes of all the **SHIORI requests** it receives, and its responses to each. This includes things like reference information that is sent to YAYA from the baseware, and the scripts sent in response.

To make YAYA write the SHIORI log to a file, you can add `log, ayame.log` to your `yaya.txt` file. Just make sure to comment it out once you're done with it, because that file can get *very* long if you leave it on by mistake. (Ask me how I know.)

But, you will have to be constantly refreshing that file in order to see the latest data. If you want to have a look at the SHIORI log in real time, you can use the tool [Tama](https://github.com/YAYA-shiori/tama). If the setup for the tool seems too complicated, you can choose to use it without specifying a ghost (this option is only available if you have more than one ghost open), or you can use the [original version of Tama](http://umeici.onjn.jp/files/tama_v1p1.zip), which has some bugs but is more straightforward (simply reloading your ghost while Tama is open will load it in Tama).

Note that you shouldn't leave Tama running unless you need it; it will cause things to run more slowly, especially if you reload, or if you're using it on a ghost and you right click the ghost. You can right click Tama's window and check/uncheck the receiVe option to switch whether it is running or not.

Below is a sample of a SHIORI request, from Ukadoc.

```
GET SHIORI/3.0
Charset: UTF-8
Sender: SSP
SenderType: internal,raise
Security Level: local
Status: choosing,balloon(0=0)
ID: OnFirstBoot
BaseID: OnBoot
Reference0: 1
```

Of note here are the `ID` and `Reference0` items. `ID` will tell you what event this is, and the references will all be listed at the bottom there.

Here is a sample of a response from a ghost, also from Ukadoc.

```
SHIORI/3.0 200 OK
Charset: UTF-8
Sender: AYA
Value: \1\s[10]\0\s[0]\e
```

Of note here is the `Value` item, which is the script that was returned by the ghost. This is what the baseware will interpret and output to the user.

Also note the `200 OK` at the top; this is what you will see if a response goes through correctly. Other responses include `204 No Content`, which is for if there is no script to return (not necessarily that nothing happened, there was just no script), and `400 Bad Request` if there was something wrong in the SHIORI request.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2011%20-%20Debugging/01%20-%20LOGGING.md)

[<< Previous module](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2010%20-%20YAYA%20Libraries/01%20-%20YAYA%20as%20Other%20Things.md)