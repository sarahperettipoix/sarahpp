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
document.createElement("p").innerHTML= "hdkashdjjkdhsj"

//js object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let book = {
    title: "hp",
    author: "Poe",
    publicationyear: 1950,
    language: "english"
  }; 

  let singer ={}
  singer.songs = ["katy", "bitch", "youpi"]
  singer.name = "george michael"

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

function(){
    alert("salut")
}
() => alert("salut")

function(p,r) {
    alert("salut")
    alert("yo")
}
(p,r) => {
    alert("salut")
    alert("yo")
}
