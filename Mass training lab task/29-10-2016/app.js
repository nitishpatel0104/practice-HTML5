
var num = 0,a;
function countOrder(){
    num++;
     document.getElementById("count").innerHTML=num;
}

var fruits = [];
console.log(a);
function newOrder() {
    a = prompt("Please Enter your order:","Order");
    a = a.toUpperCase();
    fruits.push(a);
    if(fruits === a){
        alert("please Enter Valid Value....");
    }
    else
    orderCondition();
}

function orderCondition(){
    
    if (a === "CHIKEN"){
        document.getElementById("order").innerHTML= a;
        countOrder();
        var price = 200 * num;
        document.getElementById("bill").innerHTML= "Rs."+price;
    }
    else
       document.getElementById("order").innerHTML="Not Availibale"; 
}

