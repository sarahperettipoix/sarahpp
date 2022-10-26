document.title= "no"

document.write(window.prompt("yes?"))

let input=[]
input.push(window.prompt("yes?"))
document.write(input)


function newElement() {
    let li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
}




