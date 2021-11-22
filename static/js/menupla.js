// "use strict";
// document.getElementById("pbuilds").addEventListener('click', pbuild);
let a = document.querySelectorAll("main");
console.log(a);
// a[0].setAttribute("display", "grid");
document.querySelector(".sp").setAttribute("display", "none");

function pbuild(event){
    document.querySelectorAll(".build").setAttribute("display", "grid");
    document.querySelectorAll(".sp").setAttribute("display", "none");
}