import homePage from "./home";

const myTasks = [];



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
    console.log("task added");
    myTasks.push(newTask);
    console.log(myTasks);
    createTask();

}



function createTask(){
    let taskbar = document.querySelector('#taskbar');
    taskbar.innerHTML = "";
    for (let i = 0; i < myTasks.length; i++){
        let task = myTasks[i];
        let taskTab = document.createElement("div");
        taskTab.setAttribute("class", "taskTab");
        taskTab.innerHTML =
        `<div id="taskTab">

            <label for= "title">Title</label>
            <p class="title">${task.title}</p>

            <label for= "description">Description</label>
            <p class = "description" >${task.description}</p>

            <p class = "dueDate" >${task.dueDate}</p>
            <p class = "priority" >${task.priority}</p>
            <button id= "editBtn" >Edit</button>
            <button class="removeBtn" >Remove</button>
            <p class = "indexNum" >${i}</p>
        </div>`;


        taskbar.appendChild(taskTab);

        let removeBtn = taskTab.querySelector('.removeBtn');
        removeBtn.addEventListener('click', function() {
            removeTask(i); 
        });
        
        taskTab.style.backgroundColor = "rgb(230, 230, 230)";
        console.log(i);
       
        
    }

}

function removeTask(index) {
    console.log(myTasks[index]); 
    myTasks.splice(index, 1);

    if (myTasks.length === 0) {
        document.querySelector('#taskbar').innerHTML = "No tasks";
    } else {
        createTask();
    }
}



/*let removeBtn = document.querySelector("removeBtn");
    removeBtn.addEventListener("click", function(index){
        console.log(myTasks[index]);
        if(myTasks.length > 1){
            myTasks.splice(index, 1);
            createTask();
       }
       else if(myTasks.length >= 0){
        myTasks.length = 0;
        taskbar.innerHTML = "No tasks";
       }
       
       
    })*/



/*function removeTask(index){
    console.log(myTasks[index]);
        if(myTasks.length > 1){
            myTasks.splice(index, 1);
            createTask();
       }
       else if(myTasks.length = 0){
        myTasks.length = 0;
        taskbar.innerHTML = "No tasks";
       }
    
}*/






export {addTask};
export {createTask};
export {removeTask};
