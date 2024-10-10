import { currentActiveTaskArray, updateCounters, currentBtn } from './sidebar.js';
import {todayTask, soonTask, futureTask, addTask, categorizeTask } from './tasks.js';  


const homePage = () => {

    const page = document.querySelector('section');
    const overlay = document.createElement('div');
    const popup = document.createElement('div');
    const top = document.querySelector('#top');    
    const todayBtn = document.querySelector('#todayBtn');
    const soonBtn = document.querySelector('#soonBtn');
    const futureBtn = document.querySelector('#futureBtn');


    const newBtn = document.querySelector('#newBtn');
    newBtn.addEventListener("mouseover", newBtnHover, false);
    newBtn.addEventListener("mouseout", newBtnHoverAfter, false);
    const newText = document.querySelector('#newText');
    const plus = document.querySelector('#plusSymbol');
    newText.style.opacity = "0";
    plus.style.transition ="200ms";
    
    

    function newBtnHover(){ 
        newBtn.style.width = "7rem";
        newBtn.style.transition = "200ms";
        newText.innerHTML = "New";
        newText.style.opacity = "1";
        plus.style.transform = "rotate(90deg)";
        newBtn.appendChild(newText);
    }

    function newBtnHoverAfter(){  
        newBtn.style.width = "2.5rem";
        newText.style.opacity = "0";
        plus.style.transform = "rotate(0deg)";       
        

    } 

    newBtn.addEventListener("click", function(){
        taskWindow();
    })

    function taskWindow() { 
        overlay.id = 'overlay';
        popup.id = 'popup';
        popup.innerHTML = 
            `<form id ="popupDiv">
                <p id="popupTitle">New Task<p>
                    <label for = "taskTitle">Title</label><br><br>
                    <input type="text" id="taskTitle"><br><br>

                    <label for = "taskDescription">Description</label><br><br>
                    <input type="text" id="taskDescription"><br><br>

                    <label for = "taskDueDate">For when?</label><br><br>
                    <input type="date" id="taskDueDate" required><br><br>

                    <label for = "taskPriority">Priority</label><br>
                    <select name="Due Date" id="taskPriority">
                         <option value="Low">Low</option>
                         <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select><br>

                    <div id = "popupButtons">
                        <button type = "button" id="closeButton">Close</button>
                        <input type="submit" value="Add" id="submitBtn"></input>
                    </div>
            </form>`;
            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            setTimeout(() => {
                overlay.style.opacity = '1';
                overlay.style.visibility = 'visible';
                popup.style.opacity = '1';
                popup.style.visibility = 'visible';
            },0);

        const submitBtn = document.querySelector("#popupDiv");
        submitBtn.addEventListener("submit", function(event){
            event.preventDefault();
            const dueDate = document.querySelector("#taskDueDate").value; 
            const todayTaskCounter = document.querySelector('#todayTaskCounter');
            const soonTaskCounter = document.querySelector('#soonTaskCounter');
            const futureTaskCounter = document.querySelector('#futureTaskCounter');
            

            addTask();
            hidePopup();
            

            const today = new Date();
            const taskDue = new Date(dueDate);
            const timeDifference = taskDue - today;
            const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

            let placement;
            if (daysDifference === 0) {
                placement = "Today"; 
                todayBtn.style.backgroundColor = 'rgb(255, 70, 0)'; 
                todayBtn.style.transition = 'background-color 0.5s'; 
                
                setTimeout(() => {
                    if (currentBtn === "todayBtn") {
                        todayBtn.style.backgroundColor = "whitesmoke";
                    } else {
                        todayBtn.style.backgroundColor = "gainsboro";
                    }
                }, 200); 
                



            } else if (daysDifference > 0 && daysDifference <= 7) {
                placement = "Soon"; 
                soonBtn.style.backgroundColor = 'rgb(255, 70, 0)'; 
                soonBtn.style.transition = 'background-color 0.5s'; 
                soonTaskCounter.innerHTML++;
                
                setTimeout(() => {
                    if (currentBtn === "soonBtn") {
                        soonBtn.style.backgroundColor = "whitesmoke";
                    } else {
                        soonBtn.style.backgroundColor = "gainsboro";
                    }
                }, 200);


            } else {
                placement = "Future"; 
                futureBtn.style.backgroundColor = 'rgb(255, 70, 0)'; 
                futureBtn.style.transition = 'background-color 0.5s'; 
                futureTaskCounter.innerHTML++;
                
                setTimeout(() => {
                    if (currentBtn === "futureBtn") {
                        futureBtn.style.backgroundColor = "whitesmoke";
                    } else {
                        futureBtn.style.backgroundColor = "gainsboro";
                    }
                }, 200);

            }

            const notification = document.createElement('p');
            notification.setAttribute("id", "notification");
            notification.innerHTML = `Task added to ${placement}`;
            
            top.appendChild(notification);
            notification.style.transition = "opacity 1s";
            notification.style.opacity = "1";

            setTimeout(() => {
                notification.style.opacity = "0";
            }, 2000); 

            setTimeout(() => {
                notification.remove();
             }, 3000);


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
             

        })



        page.appendChild(overlay);
        page.appendChild(popup);

        popup.style.display = 'block';
        overlay.style.display = 'block';

        function hidePopup() {
                overlay.style.opacity = '0';
                popup.style.opacity = '0';

            setTimeout(() => {
                
                overlay.style.visibility = 'hidden';
                popup.style.visibility = 'hidden';
                popup.style.display = 'none';
                overlay.style.display = 'none';
                overlay.remove(); 
                popup.remove(); 
            }, 300);
            
            
        }

        overlay.addEventListener('click', hidePopup);
        document.querySelector('#closeButton').addEventListener('click', hidePopup);

    
    }
}

export default homePage;