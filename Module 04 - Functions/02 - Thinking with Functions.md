# Lesson 02 - Thinking with Functions

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/03%20-%20Pure%20Functions.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/01%20-%20SHIORI%20Events%20vs%20Functions.md)

Now we get into making good use of functions. First, a word on repeated code. Imagine for a moment that you're creating a ghost, and there are certain actions in the ghost that earn you a small amount of friendship. Some actions make the friendship variable go up by 1 point, while some make it go up by 4 points.

Now imagine that you're rebalancing your friendship system, and you want to change all of the actions that make friendship go up by 4 points to go up by 3 points instead. Combing through your entire ghost to find every spot where you've put `friendship += 4` would be a disaster. It would be tedious and time consuming, plus it would be easy to miss a spot. Even with find & replace, are you *sure* you got them all? Are you positive you didn't replace anything you didn't mean to?

This is the danger of repeated code, and this is only a very simple example. It can be much worse. Anywhere you can reduce repeated code is a good thing, as long as you aren't sacrificing readability.

Functions are very handy for this. For example, we create a function with the number of points that friendship should go up by.

```c
OnFriendshipChange
{
	friendship += big_friendship_boost
	
	"Current friendship points: " + friendship
}

big_friendship_boost
{
	3
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L2.FriendshipChange)

The above function will output the string `Current friendship points: `, and then the number of current points.

Now, we can change the number in a single function, and it will apply all over the ghost. But what about a step further? What if you decide to rename your friendship variable, or change the operation that is used? You could cover that too.

```c
OnCheckFriendship
{
	big_friendship_boost
	
	if friendship_is_high
	{
		"Wow, thanks so much, bestie!"
	}
	else
	{
		"Oh, thanks!"
	}
	
}

big_friendship_boost2
{
	friendship += 3
}

friendship_is_high
{
	friendship >= 100
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L2.CheckFriendship)

The above function will output the string `Wow, thanks so much, bestie!` if the friendship variable is 100 or greater. Otherwise, it will output the string `Oh, thanks!`

As you can see, we included a comparison check within a function as well, so that we can simply write `if friendship_is_high` to check if the friendship is above a certain threshold. You can also use the NOT operator to check if the friendship is *not* above a certain threshold, like `if !friendship_is_high`.


Another way you can use functions like this is for simplifying checks that could be a range of options.

```c
OnCommentOnSeason
{
	case month
	{
		when 3-5
		{
			"It's spring!"
		}
		when 6-8
		{
			"It's summer!"
		}
		when 9-11
		{
			"It's autumn!"
		}
		others //12, 1, 2
		{
			"It's winter!"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L2.CommentOnSeason)

In the case of the above code, this comments on the (meteorological) seasons. But what if we wanted to have some other code in the ghost check on the seasons? We would have to duplicate this check. Also, this is a little bulky when the purpose of this function is just to comment on the season. Instead, we can use a function specifically for getting the seasons, and then we will be able to easily check the season anywhere.

```c
OnCommentOnSeason2
{
	if season == "winter"
	{
		"It's winter!"
	}
	elseif season == "spring"
	{
		"It's spring!"
	}
	elseif season == "summer"
	{
		"It's summer!"
	}
	elseif season == "autumn"
	{
		"It's autumn!"
	}
}

season
{
	case month
	{
		when 3-5
		{
			"spring"
		}
		when 6-8
		{
			"summer"
		}
		when 9-11
		{
			"autumn"
		}
		others //12, 1, 2
		{
			"winter"
		}
	}
}
```

[Click to run the above code in the YAYA Fundamentals companion ghost.](https://zichqec.github.io/s-the-skeleton/jump.html?url=x-ukagaka-link%3Atype%3Devent%26ghost%3DYAYA%20Fundamentals%26info%3DOnExample.M4.L2.CommentOnSeason2)

Now we can easily check the season anywhere in the code, without having to write the case/when/others statement in multiple places.

---

# Further Context

Using functions for common operations in your ghost (like changing/checking for friendship values) is wonderful, and my ghosts became much easier to work with once I started doing it. I cannot recommend it enough. I also want to make another point about it. You may remember this example from the Flow Control module:

```c
OnDisplayNewHighScore
{
	if BalloonIsOpen
	{
		"\C\n\n"
	}
	--
	"New high score!"
}
```

Look at that if check. `if BalloonIsOpen`. If balloon is open. Nothing more, nothing less. Isn't it wonderful for the code to be so easily readable? If you look at this if check, you instantly know *exactly* the purpose of it. You could also write `if !BalloonIsOpen` for if the balloon is *not* open.

This is the importance of naming your functions well, of course, but also, making operations that you commonly use into functions that you can call this way. And making those functions return an integer, so you can plug them into checks directly! For example, if the BalloonIsOpen function returned "true" and "false" instead of `0` and `1`, the if check would have to be `if BalloonIsOpen == "true"`. And those extra wasted characters/potential typos would make me sad.

Ok, that's kind of subjective. But just look at it, isn't it so pretty? You can't do this with every function of course; some of them need to return more than just two options! Or sometimes you really really *really* need to be certain that the output was `1` and not some other number. But when you *know* the only possible outputs are `0` and `1`, you can use this.

[Next lesson >>](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/03%20-%20Pure%20Functions.md)

[<< Previous lesson](https://github.com/Zichqec/YAYA_Fundamentals/blob/main/Module%2004%20-%20Functions/01%20-%20SHIORI%20Events%20vs%20Functions.md)