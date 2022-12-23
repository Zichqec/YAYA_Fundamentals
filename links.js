console.log("Hello, world! If I can see this, this is gonna work!!");

function removeJump(link)
{
	link = link.replace("https://zichqec.github.io/s-the-skeleton/jump.html?url=","");
	
	link = decodeURIComponent(link);
	
	return link;
}

let a_links = document.getElementsByTagName("a");
for (let a_link of a_links)
{
	if (a_link.href.includes("jump.html"))
	{
		a_link.href = removeJump(a_link.href.toString());
	}
}