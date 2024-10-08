import { todayTask, soonTask, futureTask, createTask } from './tasks.js';

let currentActiveTaskArray = todayTask;

const sideBar = () => {

    const todayBtn = document.querySelector('#todayBtn');
    const soonBtn = document.querySelector('#soonBtn');
    const futureBtn = document.querySelector('#futureBtn');
    const title = document.querySelector('#page');
    const todayTaskCounter = document.querySelector('#todayTaskCounter');
    const soonTaskCounter = document.querySelector('#soonTaskCounter');
    const futureTaskCounter = document.querySelector('#futureTaskCounter');


    title.innerHTML = "Today";
    todayBtn.style.backgroundColor = "whitesmoke";
    currentActiveTaskArray = todayTask;
    todayTaskCounter.innerHTML = "";
    soonTaskCounter.innerHTML = "";
    futureTaskCounter.innerHTML = "";
   
   

    const resetBackgroundColors = () => {
        todayBtn.style.backgroundColor = "";
        soonBtn.style.backgroundColor = "";
        futureBtn.style.backgroundColor = "";
    };

    function updateCounters(){
        todayTaskCounter.innerHTML = todayTask.length;   
        soonTaskCounter.innerHTML = soonTask.length;     
        futureTaskCounter.innerHTML = futureTask.length; 

        if(todayTask.length === 0){
            todayTaskCounter.innerHTML = "";
        }

        if(soonTask.length === 0){
            soonTaskCounter.innerHTML = "";
        }

        if(futureTask.length === 0){
            futureTaskCounter.innerHTML = "";
        }

    }


    todayBtn.addEventListener("click", function() {
        resetBackgroundColors();
        title.innerHTML = "Today";
        todayBtn.style.backgroundColor = "whitesmoke";
        currentActiveTaskArray = todayTask;  
        createTask(todayTask);
        updateCounters();
       
        
    });

    soonBtn.addEventListener("click", function() {
        resetBackgroundColors();
        title.innerHTML = "Soon";
        soonBtn.style.backgroundColor = "whitesmoke";
        currentActiveTaskArray = soonTask;  
        createTask(soonTask);
        updateCounters();
    });

    futureBtn.addEventListener("click", function() {
        resetBackgroundColors();
        title.innerHTML = "Future";
        futureBtn.style.backgroundColor = "whitesmoke";
        currentActiveTaskArray = futureTask;  
        createTask(futureTask);
        updateCounters();
    });

};

export default sideBar; 
export {currentActiveTaskArray};


