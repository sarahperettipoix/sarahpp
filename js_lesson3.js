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

//variables
let y = "yay";
let x = 10;

//js object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
//empty object
let singer ={}
//add elements to empty onject
singer.songs = ["katy", "bitch", "youpi"]
singer.name = "george michael"

//making a function in js
function help(){}
//delaring function
help()

//to write in a document
document.write("helloworld")

//write in the console
console.log("helloworld" /*can also be given a second attribute like a function call*/)

//allows to create element in html
document.createElement("p")

//write text in Node
document.createTextNode("Hi there ");

//to select/find specific typs of elements (innerhtml allows to show the html part)
document.querySelector("title").innerHTML
document.querySelectorAll("a").href

//shows a pop up with this text
alert("yes?")

//forEach function that allows for scraping
let liens=document.querySelectorAll("a")
liens.forEach(v=> document.write(v.href))

//allows to replace image 2 [1] of a page with image link
document.querySelectorAll("img")[1].src="https://blabla.jpg"

//overwrite css
divs = document.querySelectorAll("div");
divs.forEach(function (div) {
	div.style.position = "absolute";
	div.style.top = "0px";
	div.style.left = "0px";
});



//examples
function writeinpage(){
    document.write("helloooo")
}
writeinpage()

function writein(texte){
    document.write(texte)
}
writein("great fun and all")

function otherwrite(texte,prenom){
    document.write(texte + prenom)
}
otherwrite("hello", "george")

//recuperate and show links
function scrap(){
    let links = document.querySelectorAll("a")
    links.forEach(element => {document.write(element.href)
    });
}
scrap()

//or
function amountlinks(){
    let alllinks = document.querySelectorAll("a").length
    return alllinks 
    //reminder once return is written everything under is ignored
    }
amountlinks()
console.log("nbr of links",amountlinks())
//for a reusable better function type in a variable that can be changed instead of "a"
//refactoring
function amount(element){
    let n=document.querySelectorAll(element).length
    console.log(element, n)
}
amount(//of whatever ur looking for
)

function calculate(n,x){
    let addition = n + x
    return addition
    //or console.log(addition)
    //or console.log(n+x)
    //or return (n+x)
}




/*interactive text
to add a behaviour to any element
1.saisir le type d'element d'interaction et ajouter le comportement
en specifiant */
let monP= document.querySelector("p")
monP.addEventListener("click", function(){
    alert("Vous avez cliqué!")
})
//or
monP.addEventListener("click",(t) => (t.target.innerText ="0"))
//et si
monP.addEventListener("dblclick",function(t){
    t.innerText = "O"
})
monP.addEventListener("mouseover", function(f){
    console.log(f)
})
//recall in same function

function appple(){
    alert("salut")
}
() => alert("salut")

function apple2(p,r) {
    alert("salut")
    alert("yo")
}
(p,r) => {
    alert("salut")
    alert("yo")
}

divs = document.querySelectorAll("div");
divs.forEach(function (div) {
	div.style.position = "absolute";
	div.style.top = "0px";
	div.style.left = "0px";
});

//declaration de tableau et afficher chaque element
let t=[20,30,40];
//forEach pour les executions directes sur tous les elements sinon pour transformer tout le tableau utiliser map
t.forEach(function(valeur){
    console.log(5);
    document.write(valeur);
});
//transformation du tableau entier
t.map(v=> v*2)
t.map(function(v){
    return v*2
})
//warning always stock inn a let variable ur changes
//removes last element and actually transforms the table
t.pop(); 

//conditions (>, <, <=, >=, ==, !=) (and = && / or (and/or) = ||)
let kitty=23
if(kitty == 23 || kitty > 20){
    //do sthg if true
}

//if and else (remember if (true){} always executes)
myname="Marc"
if(myname=="Marc" && myname == "Sarah"){
}

let alive= true
let health = 30
let recussitate = true
if (alive){
    if (health>20){
        alert ("victory");
    }
} else if(recussitate){}

for (let compteur= 0; compteur <10; compteur ++){
    document.write(compteur)
}
