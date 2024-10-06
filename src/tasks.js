import homePage from "./home";

const tasksPage = () => {
    addTask();
}

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

}




   





function createTask(){
    


    }





export {addTask};