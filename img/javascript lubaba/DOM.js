//dom
let heading = document.getElementById("header-title");

//console.log(heading);
heading.textContent = "Hello World";
heading.innerText = "Hello World";
console.log(heading);

let para = document.getElementById("header-para");
para.textContent = "we are learning DOM manipulatuion";
console.log(para);

//inner html
let heading2 = document.getElementById("header-title");
heading2.innerHTML = "<h1>Javascript class</h1>";

//css
let heading3 = document.getElementById("header-title");
heading3.style.border= "solid 8px #000";
heading3.style.color = "brown";
heading3.style.backgroundColor ="thistle";
heading3.style.textAlign= "center";
