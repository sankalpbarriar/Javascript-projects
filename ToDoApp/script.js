const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo=null;
// Function to add todo
const addTodo = ()=>{
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
        alert("You must write something here");
        return false;
    }

    if(addBtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value="Add";
        inputBoc.value="";
    }
    
else{
    //creating a p tag
    const li=document.createElement("li");
    const p=document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);

    
    //creating edit button
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);


    //creating delete button
    const deleteBtn=document.createElement('button');
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
    inputBox.value="";
}
}

//Function to update to do:(Edit/Delelte)
const updateTodo=(e)=>{
    //console.log(e.target.innerHTML)
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML==="Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo=e;
    }
}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);