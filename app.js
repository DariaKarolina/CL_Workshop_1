/*
This code is about to change, to  be shorter. 
Just something won't work with loop, so for now it has to be longer version.
 */
const p=document.querySelector(".basic");
function myF(){
    
    let k=document.querySelector("#btn1");
    k.style.top= "69px";
}
function myF2(){
    let k=document.querySelector("#btn1")
    k.style.top= "32px";
}
p.addEventListener("mouseover", myF);
p.addEventListener("mouseout", myF2);

const pr=document.querySelector(".professional");
function myF11(){
    
    let ki=document.querySelector("#btn2");
    ki.style.top= "69px";
}
function myF22(){
    let ki=document.querySelector("#btn2")
    ki.style.top= "32px";
}
pr.addEventListener("mouseover", myF11);
pr.addEventListener("mouseout", myF22);

const prem=document.querySelector(".premium");
function myF111(){
    
    let kid=document.querySelector("#btn3");
    kid.style.top= "69px";
}
function myF222(){
    let kid=document.querySelector("#btn3")
    kid.style.top= "32px";
}
prem.addEventListener("mouseover", myF111);
prem.addEventListener("mouseout", myF222);
