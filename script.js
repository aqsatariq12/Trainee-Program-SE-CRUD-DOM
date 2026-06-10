const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const remainingTodo = document.getElementById("remainingTodo");
let count=0;
addBtn.addEventListener("click",()=>{
const task = taskInput.value;
if(task.trim() === ""){
    console.log("empty task is not added")

    return;
}
else{
//Create
const li = document.createElement("li");
li.textContent = taskInput.value;

li.className = "flex items-center justify-around border rounded-2xl pt-2 pb-2  gap-5 mb-2";

taskList.appendChild(li);
count++;
remainingTodo.innerHTML= `Your Remaining Todo : ${count}`;
taskInput.value ="";
//delete
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded";

li.appendChild(deleteBtn);

deleteBtn.addEventListener("click", () => {
    count--;
        remainingTodo.textContent = `Your Remaining Todo : ${count}`;

  li.remove();
});

//edit
  const editBtn = document.createElement("button");
  editBtn.textContent ="Edit";
  editBtn.className = "bg-blue-500 text-white px-2 py-1 rounded";
  li.appendChild(editBtn);

  editBtn.addEventListener("click", ()=>{
    const newTask = prompt("Enter New Task");
    li.firstChild.textContent= newTask;
    
  });

}
});


