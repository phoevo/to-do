import homePage from "./home";

const sideBar = () => {

    const todayBtn = document.querySelector('#todayBtn');
    const soonBtn = document.querySelector('#soonBtn');
    const futureBtn = document.querySelector('#futureBtn');
    const title = document.querySelector('#page');
    title.innerHTML = "Today";
    todayBtn.style.backgroundColor = "whitesmoke";
   
    
    

    const resetBackgroundColors = () => {
        todayBtn.style.backgroundColor = "gainsboro";
        soonBtn.style.backgroundColor = "gainsboro";
        futureBtn.style.backgroundColor = "gainsboro";
    };

    // Event listeners for button clicks
    todayBtn.addEventListener("click", function() {
        resetBackgroundColors();  // Reset all button backgrounds
        title.innerHTML = "Today";  // Set title to "Today"
        todayBtn.style.backgroundColor = "whitesmoke";  // Highlight todayBtn
        
    });

    soonBtn.addEventListener("click", function() {
        resetBackgroundColors();  // Reset all button backgrounds
        title.innerHTML = "Soon";  // Set title to "Soon"
        soonBtn.style.backgroundColor = "whitesmoke";  // Highlight soonBtn
    });

    futureBtn.addEventListener("click", function() {
        resetBackgroundColors();  // Reset all button backgrounds
        title.innerHTML = "Future";  // Set title to "Future"
        futureBtn.style.backgroundColor = "whitesmoke";  // Highlight futureBtn
    });
};





export default sideBar;