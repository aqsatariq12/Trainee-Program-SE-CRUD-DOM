const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const remainingTodo = document.getElementById("remainingTodo");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

let count=0;
let editingTask = null;
addBtn.addEventListener("click", () => {

  const task = taskInput.value;

  if (task.trim() === "") {
    return;
  }

  if (editingTask) {

    editingTask.textContent = task;

    editingTask = null;

    taskInput.value = "";

    addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

    return;
  }
else{
//Create
const li = document.createElement("li");

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "mr-3";

const taskText = document.createElement("span");
taskText.textContent = taskInput.value;

li.appendChild(checkbox);
li.appendChild(taskText);

li.className = "flex items-center border border-gray-400 rounded-sm px-4 py-2 mb-2";

const btnContainer = document.createElement("div");
btnContainer.className = "flex gap-3 ml-auto";
li.appendChild(btnContainer);

taskList.appendChild(li);
count++;
remainingTodo.innerHTML= `Your Remaining Todo : ${count}`;
deleteSelectedBtn.classList.remove("hidden");
taskInput.value ="";

//edit
const editBtn = document.createElement("button");
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
editBtn.className = "text-gray-500 text-sm hover:text-black";

btnContainer.appendChild(editBtn);

  editBtn.addEventListener("click", ()=>{

    // const newTask = prompt("Enter New Task");
    // taskInput.innerHTML = ``;
    taskInput.value = taskText.textContent;
    editingTask = taskText;
    
    addBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    addBtn.className = "text-white bg-gray-500 p-2 rounded-md text-md hover:bg-black ";


if (newTask !== null && newTask.trim() !== "") {
  taskText.textContent = newTask;
}
    
  });
//delete
const deleteBtn = document.createElement("button");
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
deleteBtn.className = "text-gray-500 text-sm hover:text-black";

btnContainer.appendChild(deleteBtn);

deleteBtn.addEventListener("click", () => {
    count--;
    remainingTodo.textContent = `Your Remaining Todo : ${count}`;

  li.remove();
  if (count === 0) {
    deleteSelectedBtn.classList.add("hidden");
  }
});

}
});
//delete bulk

deleteSelectedBtn.addEventListener("click", () => {
  const allTasks = taskList.querySelectorAll("li");

  allTasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');

    if (checkbox.checked) {
      task.remove();
      count--;
      if (count === 0) {
  deleteSelectedBtn.classList.add("hidden");
}
    }
  });

  remainingTodo.textContent = `Your Remaining Todo : ${count}`;
});


