//Selecting input
var inputBox = document.getElementById("input-box");
var listContainer= document.getElementById("list-container");

function Add(){
   if(inputBox.value === ''){
    alert("You have to add something");
   }
   else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span =document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
   }
   inputBox.value = '';
   savedata();

} 

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showlist();
