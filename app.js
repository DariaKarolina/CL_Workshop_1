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
{
let qua=document.querySelector(".first_input");

    qua.addEventListener("input", function() {

        
        if (this.value>=100){
            alert("Maksymalna ilość produktów to: 100");
        }
        else if(this.value<1){
            alert("Miśku, musisz wziąć prznajmniej jeden produkt!")
        }
    })
}

{
const ord=document.querySelector(".second_input");
    ord.addEventListener("input", function() {
        if (this.value>15){
            alert("Maksymalna ilość zamówień w miesiącu to: 15");
        }
        else if(this.value<1){
            alert("Misiaczku, zamówienie raz na miesiąc to chyba nie zbyt dużo?!")
        }
    })
}

//products
const quantity=document.querySelector(".first_input");
const numProds=document.querySelector(".number_of_products");
const sumProds=document.querySelector(".sum_of_product_price");

let summ;
function productsQuantity(){
    
    numProds.innerHTML=parseInt(quantity.value);
    
    sumProds.innerHTML=parseInt(quantity.value)+ " €";
    
    let total=document.querySelector(".total_sum");
    summ= 0 + parseInt(sumProds.innerHTML);
    total.innerHTML=summ+ " €";
    console.log(total);

    
    
}

//orders

const orders=document.querySelector(".second_input");
const num_orders=document.querySelector(".number_of_orders");
const sumOrders=document.querySelector(".sum_of_order_price");

function ordersQuantity(){

    num_orders.innerHTML=parseInt(orders.value);
    let a=orders.value;
    let b=parseInt(a);
    
    let c= Math.round(b * 0.6);

    sumOrders.innerHTML=c+ " €";

    let total=document.querySelector(".total_sum");
    summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML);
    total.innerHTML=summ+ " €";
    console.log(total);
}
//choosing package

const select1=document.querySelector(".arrow");
const sel2=document.querySelector(".select2");
sel2.style.display="none";
const selNew= document.querySelector(".select_new");


const s=document.querySelector(".opt12");
const s2=document.querySelector(".opt22");
const s3=document.querySelector(".opt32");

const sh=document.querySelector(".show_here");

const myPackage=document.querySelector(".choosen_package");
const sumPackage=document.querySelector(".sum_of_package_price");

sh.innerHTML="Choose Package";

function showSelect(){
    sh.addEventListener("click", function(){
        sel2.style.display="block";
        select1.style.transform= "rotate(180deg)";
    })
}
function hideSelect(){
    // sel2.addEventListener("mouseout",function(){
    //     sel2.style.display="none";
    //     select1.style.transform= "rotate(180deg)";
    // })

    //nie wiem co tu zrobić
}
function opt1Hover(){
    s.addEventListener("mouseover", function(){
        s.style.backgroundColor= "rgba(235, 71, 109, 0.479)";
    })
    s.addEventListener("mouseout",function(){
        s.style.backgroundColor="rgba(255, 255, 255, 0.212)";
    })
}
function opt1(){
    s.addEventListener("click", function(){
        sh.innerHTML= "Basic";
        s.style.display= "none";
        s2.style.display= "block";
        s3.style.display= "block";
        myPackage.innerHTML="Basic";
        sumPackage.innerHTML="0 €";
        sel2.style.display="none";
        select1.style.transform= "rotate(180deg)"; 

        let total=document.querySelector(".total_sum");
        summ= parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 0;
        total.innerHTML= summ+ " €";
        console.log(total);
    })
}
function opt2Hover(){
    s2.addEventListener("mouseover", function(){
        s2.style.backgroundColor= "rgba(235, 71, 109, 0.479)";
    })
    s2.addEventListener("mouseout",function(){
        s2.style.backgroundColor="rgba(255, 255, 255, 0.212)";
    })
}
function opt2(){
    s2.addEventListener("click", function(){
        sh.innerHTML= "Professional";
        s2.style.display= "none";
        s.style.display= "block";
        s3.style.display= "block";
        myPackage.innerHTML="Professional";
        sumPackage.innerHTML="25 €";
        sel2.style.display="none";
        select1.style.transform= "rotate(180deg)";

        let total=document.querySelector(".total_sum");
        summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 25;
        total.innerHTML=summ+ " €";
        console.log(total);
        
        
        // sum= parseInt(sumProds.innerHTML) + parseInt(sumOrders.innerHTML)+ parseInt(s2.dataset.price) +" €";
        // total.innerHTML= sum;
        // console.log(total.innerHTML);
    })
}
function opt3Hover(){
    s3.addEventListener("mouseover", function(){
        s3.style.backgroundColor= "rgba(235, 71, 109, 0.479)";
    })
    s3.addEventListener("mouseout",function(){
        s3.style.backgroundColor="rgba(255, 255, 255, 0.212)";
    })
}
function opt3(){
    s3.addEventListener("click", function(){
        sh.innerHTML= "Premium";
        s3.style.display= "none";
        s.style.display= "block";
        s2.style.display= "block";
        myPackage.innerHTML="Premium";
        sumPackage.innerHTML="60 €";
        sel2.style.display="none";
        select1.style.transform= "rotate(180deg)";

        let total=document.querySelector(".total_sum");
        summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 60;
        total.innerHTML=summ+ " €";
        console.log(total);
    })
}

//accounting price

function checkAccounting(){
    let acc=document.querySelector("#checkFirst");
    let accCost=document.querySelector("#accCost");

    acc.addEventListener("click", function(){
        if (acc.checked==false){
            accCost.innerHTML=" ";
        }
        else {
            accCost.innerHTML="50 €";

            let total=document.querySelector(".total_sum");
            summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 50;
            total.innerHTML=summ+ " €";
            console.log(total);
        }
    })
}
// terminal price
function checkTerminal(){
    let acc=document.querySelector("#checkFirst");
    let terminal=document.querySelector("#checkSecond");
    let termCost=document.querySelector("#termCost");

    terminal.addEventListener("click", function(){
        if (terminal.checked==false){
            termCost.innerHTML=" ";
        }
        else if(acc.checked==true || terminal.checked==true){
            termCost.innerHTML="5 €";

            let total=document.querySelector(".total_sum");
            summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 50+ 5;
            total.innerHTML=summ+ " €";
            console.log(total);
        }
        else{
            termCost.innerHTML="5 €";

            let total=document.querySelector(".total_sum");
            summ=parseInt(sumProds.innerHTML)+ parseInt(sumOrders.innerHTML)+ 5;
            total.innerHTML=summ+ " €";
            console.log(total);
        }
    })
}
//total -everywhere up there


//brakuje: 
    //-odwracania strzałki za każdym otwarciem/ zamknięciem dropdown list - gdziś są problemy, których nie potrafię zlokalizować, żeby to naprawić
    //- brakuje aktualizacji sumy, gry zmieni się wartość, która była wyżej. nie mam pomysłu jak to zrobić
    //zamykanie/ otwieranie dużego menu- tego nie powinno być,nie wiem, jak to zmienić


