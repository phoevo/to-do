import { currentActiveTaskArray, updateCounters } from './sidebar.js';
import {Tasks, todayTask, soonTask, futureTask, myTasks, createTask, addTask, categorizeTask } from './tasks.js';  


const homePage = () => {

    const page = document.querySelector('section');
    const overlay = document.createElement('div');
    const popup = document.createElement('div');
    const top = document.querySelector('#top');    
    const todayBtn = document.querySelector('#todayBtn');
    const soonBtn = document.querySelector('#soonBtn');
    const futureBtn = document.querySelector('#futureBtn');


    const newBtn = document.querySelector('#newBtn');
    newBtn.addEventListener("click", function(){
        taskWindow();
    })

    function taskWindow() { 
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
        popup.id = 'popup';
        popup.innerHTML = 
            `<form id ="popupDiv">
                <p id="popupTitle">Create a Task<p>
                    <label for = "taskTitle">Title</label><br><br>
                    <input type="text" id="taskTitle"><br><br>

                    <label for = "taskDescription">Description</label><br><br>
                    <input type="text" id="taskDescription"><br><br>

                    <label for = "taskDueDate">For when?</label><br><br>
                    <input type="date" id="taskDueDate" required><br><br>

                    <label for = "taskPriority">...and its priority</label>
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
            document.body.appendChild(popup);

        const submitBtn = document.querySelector("#popupDiv")

        console.log("todayTask is " + todayTask.length);
        console.log("soonTask is " + soonTask.length);
    


        submitBtn.addEventListener("submit", function(){
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
                todayBtn.style.backgroundColor = 'rgb(255, 70, 0)'; // Change to orange
                todayBtn.style.transition = 'background-color 0.5s'; // Smooth transition
                
                
                
                // Set a timeout to revert the color after flashing
                setTimeout(() => {
                    todayBtn.style.backgroundColor = "whitesmoke"; // Revert to original color
                }, 200);



            } else if (daysDifference > 0 && daysDifference <= 7) {
                placement = "Soon"; 
                soonBtn.style.backgroundColor = 'rgb(255, 70, 0)'; 
                soonBtn.style.transition = 'background-color 0.5s'; 
                soonTaskCounter.innerHTML++;
                
                setTimeout(() => {
                    soonBtn.style.backgroundColor = "gainsboro"; 
                }, 200);


            } else {
                placement = "Future"; 
                futureBtn.style.backgroundColor = 'rgb(255, 70, 0)'; 
                futureBtn.style.transition = 'background-color 0.5s'; 
                futureTaskCounter.innerHTML++;
                
                setTimeout(() => {
                    futureBtn.style.backgroundColor = "gainsboro"; 
                }, 200);

            }

            const notification = document.createElement('p');
            notification.setAttribute("id", "notification");
            notification.innerHTML = `Task added to ${placement}` ;
            top.appendChild(notification);
            setTimeout(() => {
                notification.remove();
             }, 2000);


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
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }

        overlay.addEventListener('click', hidePopup);
        document.querySelector('#closeButton').addEventListener('click', hidePopup);

    
    }
}

export default homePage;