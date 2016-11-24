
function addnewList(){
    var listItem = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    listItem.innerText = inputValue;
    if (inputValue == "" || inputValue == " " ){
        alert("Please Write Something...!");
    }
    else{
        var text = document.getElementById("todoList");
        text.appendChild(listItem);
    }   
    
}


var  newAction = document.getElementById("butn");
newAction.onclick = addnewList;