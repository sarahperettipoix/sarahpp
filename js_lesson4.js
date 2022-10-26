/*
DOM (dcument object model)
Quick reminder
    html is the bones
    css is the skin 
    js is the muscles
    javascript (.js) used to be a simple small thing that couldn't do much. ever since Node JS arrived, Js can be used everywhere. navigator reads only js.
    Before js was used to support dhtml.
    Js has a very poor reputation mostly with engineers because its language is considered too felxible. (alternative is typescript (.ts))
History:
    James Gosling at sun microsystems invents C++++, Oak (TV tuner) and from this he creates Java (in the optic of making it the language of the net).
    Brendan Eich at netscape makes livescript (no compilation unlike java and not closed off).
        =>competition to know who will be the language of the web. 
    In 1995 livescript is renamed javascript and sun microsystems claims the name java (js has to change name). Microsoft makes their own language Jscript (J++) via reverse engineering.
    livescript (JS) gives their code to ECMA => becomes ecmascript(=javascript)
*/
/*bookmarklet are basically bookmars but for js
it allows you to keep js favorites and apply them anywher ckeck kickass or
bookmarkelt maker https://caiorss.github.io/bookmarklet-maker/
*/

//always pass by console on navigator for debugging
document.write()
//document functions base of js
document.querySelector("title").innerHTML
document.querySelector("a").href

let liens=document.querySelectorAll("a")
liens.forEach(v=> document.write(v.href))
//allows for scraping
document.querySelectorAll("img")[1].src="https://biblia.lesbelleslettres.com/data/cache/Product/front_cover_picture/medium/8/6/4341.1646303547.jpg" 
//allows to replace image 2 [1] of a page with image link