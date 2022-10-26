// variables defined by var, let (always), or const (var died) followed by teh variables name (let node=...)

let y = "yay";
let x = 10;
//defining variable
y += 2 //"yay2"
x = x + 10 //20
x +=10
x ++ //adds 1 to variable
x *= 2 // times 2 and "/= 3" means divide by 3
//redifinition of variable


let mabaliseimg = document.createElement("img");
mabaliseimg.setAttribute("src", "https://biblia.lesbelleslettres.com/data/cache/Product/front_cover_picture/medium/8/6/4341.1646303547.jpg");

mabaliseimg.classList.add("blue");

document.querySelector("body").appendChild(mabaliseimg)

document.querySelector("h1").classList.add("blue")

document.write(document.querySelector("title").innerHTML)

console.log(document.querySelector("title").innerHTML)