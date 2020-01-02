// document.addEventListener('DOMContentLoaded', (event) => {
    

/*
buttons in wrapper_pricing
*/

/*
This code is about to change, to  be shorter. 
Just something won't work with loop, so for now it has to be longer version.
 */

const p=document.querySelector(".basic");
function myF(){
    
    let k=document.querySelector("#btn1");
    k.style.top= "69px";
    let w=window.innerWidth;
    if (w<1000){
        k.style.top= "-180px"
    }
}
function myF2(){
    let k=document.querySelector("#btn1")
    k.style.top= "32px";
    w=window.innerWidth;
    if (w<1000){
        k.style.top= "-180px"
    }
}
p.addEventListener("mouseover", myF);
p.addEventListener("mouseout", myF2);

const pr=document.querySelector(".professional");
function myF11(){
    
    let ki=document.querySelector("#btn2");
    ki.style.top= "69px";
    let wi=window.innerWidth;
    if (wi<1000){
        ki.style.top= "-180px"
    }
}
function myF22(){
    let ki=document.querySelector("#btn2")
    ki.style.top= "32px";
    wi=window.innerWidth;
    if (wi<1000){
        ki.style.top= "-180px"
    }
}
pr.addEventListener("mouseover", myF11);
pr.addEventListener("mouseout", myF22);

const prem=document.querySelector(".premium");
function myF111(){
    
    let kid=document.querySelector("#btn3");
    kid.style.top= "69px";
    let win=window.innerWidth;
    if (win<1000){
        kid.style.top= "-180px"
    }
}
function myF222(){
    let kid=document.querySelector("#btn3")
    kid.style.top= "32px";
    win=window.innerWidth;
    if (win<1000){
        kid.style.top= "-180px"
    }
}
prem.addEventListener("mouseover", myF111);
prem.addEventListener("mouseout", myF222);

/*
hamburger menu
*/
function openSmallNav(){
    
    const bars= document.querySelector(".fa-bars");
    const times= document.querySelector(".fa-times");
    const nav=document.querySelector("#nav");

    bars.addEventListener("click", function(){
        nav.style.visibility="visible";
        bars.style.visibility="hidden";
        times.style.visibility="visible";
    })
}
function closeSmallNav(){
    const bars= document.querySelector(".fa-bars");
    const times= document.querySelector(".fa-times");
    const nav=document.querySelector("#nav");

    times.addEventListener("click", function(){
        nav.style.visibility="hidden";
        bars.style.visibility="visible";
        times.style.visibility="hidden";
    })
}
//calculator


function productsQuantity(){
    
    const quantity=document.querySelector(".first_input");
    const num_prods=document.querySelector(".number_of_products");
    num_prods.innerHTML=quantity.value;
}
function ordersQuantity(){
    
    const orders=document.querySelector(".second_input");
    const num_orders=document.querySelector(".number_of_orders");
    num_orders.innerHTML=orders.value;
}

//showing my options then default ones
    const select=document.querySelector(".select");

    // select.addEventListener("click",function(){
    //     const select2=document.querySelector(".select2");
    //     select2.removeAttribute("hidden");
    // });

//
const opt1=document.querySelector("#opt1");
const pckg=document.querySelector(".choosen_package");
        
console.log(opt1.value);
select.addEventListener("click", function(e){

    
    opt1.addEventListener("click",function(){
        opt1.innerHTML="Basic"
            pckg.innerHTML=opt1.innerHTML;
        
    })
    
})

// });