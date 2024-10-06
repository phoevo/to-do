import {addTask} from "./tasks";

const homePage = () => {


    const page = document.querySelector('section');
    const overlay = document.createElement('div');
    const popup = document.createElement('div');
    
    

    const newBtn = document.querySelector('#newBtn');
    newBtn.addEventListener("click", function(){
        taskWindow();
    })

   
    function taskWindow() { 
        overlay.id = 'overlay';
        document.body.appendChild(overlay);

        popup.id = 'popup';
        popup.innerHTML = 
            `<div id ="popupDiv">
                <p id="popupTitle">Create a Task<p>
                    <label for = "taskTitle">Title</label><br><br>
                    <input type="text" id="taskTitle"><br><br>

                    <label for = "taskDescription">Description</label><br><br>
                    <input type="text" id="taskDescription"><br><br>

                    <label for = "taskDueDate">For when?</label><br><br>
                    <input type="text" id="taskDueDate"><br><br>

                    <label for = "taskPriority">...and its priority</label>
                    <select name="Due Date" id="taskPriority">
                         <option value="Low">Low</option>
                         <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select><br>

                    <div id = "popupButtons">
                        <button id="closeButton">Close</button>
                        <input type="submit" value="Add" id="submitBtn"></input>
                    </div>
                </div>`;
        document.body.appendChild(popup);

        const submitBtn = document.querySelector("#submitBtn")
        submitBtn.addEventListener("click", function(){
            addTask();
            

        })
            
         
        
       

        page.appendChild(overlay);
        page.appendChild(popup);

        popup.style.display = 'block';
        overlay.style.display = 'block';

      


        
    

        // Function to hide the popup
        function hidePopup() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }

    overlay.addEventListener('click', hidePopup);
    document.querySelector('#closeButton').addEventListener("click", hidePopup);
    
    }
}

export default homePage;