"use strict";
let inp = document.getElementById("fname");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inp.value !== "") {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
    
  }
});

let btns = document.querySelectorAll("button");
btns.forEach((fun)=>{
  fun.addEventListener("click",(e)=>{
   if(document.body.style.background == e.target.innerHTML){
    document.body.style.background = "";
   }else{
    document.body.style.background = e.target.innerHTML;
   }
  });
});
