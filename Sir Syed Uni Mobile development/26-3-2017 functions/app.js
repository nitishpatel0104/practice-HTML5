
function currentDate(){
    var dates = new Date();
    var hr = dates.getHours();
    var mint = dates.getMinutes();
    var sec = dates.getSeconds();
    var date = dates.getDate();
    var month = dates.getMonth();
    var year  = dates.getFullYear()
    
    document.getElementById('datesMint').innerHTML= mint+" :";
    document.getElementById('datesHr').innerHTML= hr+" :";
    document.getElementById('datesSec').innerHTML= sec;
    document.getElementById('datesDate').innerHTML= date+' -';
    document.getElementById('datesMonth').innerHTML= month+' -';
    document.getElementById('datesYear').innerHTML= year;
}

function userFullName(){
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var fullname = fName + ' ' +  lName;

    document.getElementById('fullname').innerHTML= "Welcome "+fullname;
}


function AddTwoNUmbers(){
    var fnumber = document.getElementById('1st').value;
    var lnumber = document.getElementById('2nd').value;
    var add = parseInt(fnumber) + parseInt(lnumber);

    document.getElementById('Adds').innerHTML= add;
}

function Culcution(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    first = parseInt(first);
    second = parseInt(second)
    var oper = document.getElementById('oper').value;
    if(oper === "+"){
        document.getElementById("res").innerHTML= first + second;
    }
    else if(oper === "-"){
        document.getElementById("res").innerHTML= first - second;
    }
    else if(oper === "*"){
        document.getElementById("res").innerHTML= first * second;
    }
    else if(oper === "/"){
        document.getElementById("res").innerHTML= first / second;
    }
    else if(oper === "%"){
        document.getElementById("res").innerHTML= first % second;
    }
    else{
        document.getElementById("res").innerHTML= "Please Write These Operator + , - , * , / , % ";
    }
}
