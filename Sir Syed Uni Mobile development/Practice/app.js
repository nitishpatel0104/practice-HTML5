// var name1; // variable declared 
// name ="Salman"; // assigning a value

// alert(name);

// var message = "Wlecome ";
// var name = "Salman";
// alert(message + name);// concatinate the two variable




function imgEvent(){
    alert('This is Void Link');
}

function imgEvent1(){
    alert('You Clicked Me..!');
}

function inputEvent(){
    alert('You Clicked Me..!');
}

function func(){
    alert("Function Working.!");
}
function colorChange(){
    document.getElementById("color").style.color='green';
    document.getElementById("color").style.textDecoration="underline";
}
 document.getElementById("color").style.textDecoration="none";
 document.getElementById("color").style.fontSize="1.5em";
function colorDefault(){
    document.getElementById("color").style.color='blue';
    document.getElementById("color").style.textDecoration="none";
}

function bckColor(){
    document.getElementById("bckColor").style.backgroundColor='Blue';
}
function bckDefualt(){
    document.getElementById("bckColor").style.backgroundColor='white';
}

 function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
 }
 function emailBckColor(){
    document.getElementById("email").style.backgroundColor='Blue';
}
function emailBckDefualt(){
    document.getElementById("email").style.backgroundColor='white';
}