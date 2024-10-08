import { currentActiveTaskArray } from './sidebar.js';
import sideBar from './sidebar.js';

const myTasks = [];
const todayTask = [];
const soonTask = [];
const futureTask = [];

function Tasks(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function addTask() {
    let title = document.querySelector("#taskTitle").value;
    let description = document.querySelector("#taskDescription").value;
    let dueDate = document.querySelector("#taskDueDate").value;
    let priority = document.querySelector("#taskPriority").value;
    
    let newTask = new Tasks(title, description, dueDate, priority);
    myTasks.push(newTask);
    
    categorizeTask(newTask);
    createTask(currentActiveTaskArray);  
}

function categorizeTask(task) {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    
    const timeDifference = dueDate - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    if (daysDifference === 0) {
        todayTask.push(task);
    } else if (daysDifference > 0 && daysDifference <= 7) {
        soonTask.push(task);
    } else if (daysDifference > 7) {
        futureTask.push(task);
    }
}

function createTask(taskArray) {
    let taskbar = document.querySelector('#taskbar');
    taskbar.innerHTML = "";
    
    for (let i = 0; i < taskArray.length; i++) {
        let task = taskArray[i];
        let taskTab = document.createElement("div");
        taskTab.setAttribute("class", "taskTab");
        taskTab.innerHTML =
        `<div id="taskTab">
            <label for="title">Title</label>
            <p class="title">${task.title}</p>
            <label for="description">Description</label>
            <p class="description">${task.description}</p>
            <p class="dueDate">${task.dueDate}</p>
            <p class="priority">${task.priority}</p>
            <button class="removeBtn">Remove</button>
            <p class="indexNum">${i}</p>
        </div>`;
        
        taskbar.appendChild(taskTab);
        
        let removeBtn = taskTab.querySelector('.removeBtn');
        removeBtn.addEventListener('click', function() {
            removeTask(i, taskArray);
            
            

        if(todayTask.length === 0){
            todayTaskCounter.innerHTML = "";
        }

        if(soonTask.length === 0){
            soonTaskCounter.innerHTML = "";
        }

        if(futureTask.length === 0){
            futureTaskCounter.innerHTML = "";
        }

        });
        
        taskTab.style.backgroundColor = "rgb(230, 230, 230)";
    
    }
}

function removeTask(index, taskArray) {
    //createTask(currentActiveTaskArray);
    taskArray.splice(index, 1);
    createTask(taskArray);
    
    console.log("todayTask is " + todayTask.length);
    console.log("soonTask is " + soonTask.length);
    
   
        const todayTaskCounter = document.querySelector('#todayTaskCounter');
        const soonTaskCounter = document.querySelector('#soonTaskCounter');
        const futureTaskCounter = document.querySelector('#futureTaskCounter');
        
        todayTaskCounter.innerHTML = todayTask.length || "";  // Show counter or empty string
        soonTaskCounter.innerHTML = soonTask.length || "";    // Show counter or empty string
        futureTaskCounter.innerHTML = futureTask.length || "";

}




export { Tasks, addTask, todayTask, soonTask, futureTask, myTasks, createTask, categorizeTask };  // <<-- Export functions and task arrays
