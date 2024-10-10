import { currentActiveTaskArray } from './sidebar.js';
import { saveTasks, loadTasks } from './localStorage.js';
import sideBar from './sidebar.js';

const myTasks = [];
const todayTask = [];
const soonTask = [];
const futureTask = [];

const loadedTasks = loadTasks();

loadedTasks.todayTask.forEach(task => todayTask.push(task));
loadedTasks.soonTask.forEach(task => soonTask.push(task));
loadedTasks.futureTask.forEach(task => futureTask.push(task));




const priorityMap = {
    "High": 1, 
    "Medium": 2,
    "Low": 3
};

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
    saveTasks(todayTask, soonTask, futureTask);
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


    if(taskArray.length === 0){
        const noTasksMessage = document.createElement('p');
        noTasksMessage.setAttribute('id', 'noTasksMessage');
        noTasksMessage.textContent = "No tasks";
        taskbar.appendChild(noTasksMessage);
        return;
    }

    taskArray.sort((a, b) => {
        return priorityMap[a.priority] - priorityMap[b.priority];
    });

    
    for (let i = 0; i < taskArray.length; i++) {
        let task = taskArray[i];
        let taskTab = document.createElement("div");
        taskTab.setAttribute("class", "taskTab");
        taskTab.innerHTML =
        `<div id="taskTab">
            <div class="taskItem">
                <label for="title">Title</label>
                <p class="title">${task.title}</p>
            </div>
            <div class="taskItem">
                <label for="description">Description</label>
                <p class="description">${task.description}</p>
            </div>

            <div class="taskItem">
                <label for="dueDate">Due Date</label>
                <p class="dueDate">${task.dueDate}</p>
            </div>
            <div class="taskItem">
                <label for="priority">Priority</label>
                <p class="priority">${task.priority}</p>
            </div>
            <button class="removeBtn">Remove</button>
        </div>`;
        
        taskbar.appendChild(taskTab);
        
        let removeBtn = taskTab.querySelector('.removeBtn');
        removeBtn.addEventListener('click', function() {
            taskTab.style.transition = "opacity 200ms";
            taskTab.style.opacity = "0";  

            setTimeout(()=> {
            removeTask(i, taskArray);

            }, 210)
            
            
            

        /*if(todayTask.length === 0){
            todayTaskCounter.innerHTML = "";
        }

        if(soonTask.length === 0){
            soonTaskCounter.innerHTML = "";
        }

        if(futureTask.length === 0){
            futureTaskCounter.innerHTML = "";
        }*/

        });
        
        taskTab.style.backgroundColor = "rgb(230, 230, 230)";
    
    }
}

function removeTask(index, taskArray) {
    createTask(currentActiveTaskArray);
    taskArray.splice(index, 1);
    createTask(taskArray);
    saveTasks(todayTask, soonTask, futureTask);
    
    
    
   
    const todayTaskCounter = document.querySelector('#todayTaskCounter');
    const soonTaskCounter = document.querySelector('#soonTaskCounter');
    const futureTaskCounter = document.querySelector('#futureTaskCounter');
        
    todayTaskCounter.innerHTML = todayTask.length || "";  
    soonTaskCounter.innerHTML = soonTask.length || "";    
    futureTaskCounter.innerHTML = futureTask.length || "";

}




export { Tasks, addTask, todayTask, soonTask, futureTask, myTasks, createTask, categorizeTask };  
