alert("The following content was. It no longer is. Why would anyone in their right mind use this as a bookmarklet???")
document.body.style.background= "hotpink"
document.body.style.color= "orange"
document.body.style.font= "monospace"
document.querySelectorAll("img")[1].src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F55-552707_brb-vomiting-rainbows-gravity-falls-gnome-png-clipart.png&f=1&nofb=1&ipt=2c0e739354ca959f7f5f94a445e849fdabc08e3938722b30ae542e20bfc5d7e9&ipo=images" 
document.querySelectorAll("img")[0].src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F228%2F584%2F83e.png&f=1&nofb=1&ipt=47d85adf1983f173f94c4ad73bb2a2b9a10a7852b483a0406d2bcf8fb86a8976&ipo=images"
divs = document.querySelectorAll("div");
divs.forEach(function (div) {
	div.style.position = "absolute";
	div.style.top = "0px";
	div.style.left = "0px";
});

//the exercices I didn't do
function helloworld(){
    console.log("helloworld")
}
function double(element){
    return element*2 //how to double string?
}
function ajouter1(nombre){
    t=nombre +1
    return t
}
function findlastletter(text){
    a=text[text.length-1]
    return a
}

document.title = "youpi"