function saveTasks(todayTask, soonTask, futureTask) {
    localStorage.setItem('todayTasks', JSON.stringify(todayTask));
    localStorage.setItem('soonTasks', JSON.stringify(soonTask));
    localStorage.setItem('futureTasks', JSON.stringify(futureTask));
}

function loadTasks() {
    const loadedTodayTasks = JSON.parse(localStorage.getItem('todayTasks')) || [];
    const loadedSoonTasks = JSON.parse(localStorage.getItem('soonTasks')) || [];
    const loadedFutureTasks = JSON.parse(localStorage.getItem('futureTasks')) || [];
    
    return {
        todayTask: loadedTodayTasks,
        soonTask: loadedSoonTasks,
        futureTask: loadedFutureTasks
    };
}


export { saveTasks, loadTasks };
