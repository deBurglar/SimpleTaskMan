let count = 0;  // To keep track of the number of tasks
let tasktext = "";
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    count += 1;

    // Get the value from the input and trim it
    const taskInput = document.getElementById("taskInput").value.trim();

    // If input is not empty, proceed
    if (taskInput !== "") {
        // Update the tasktext with count
        tasktext = count + ".) " + taskInput;

        // Reference to the task list div
        const taskList = document.getElementById('taskList');

        // Create a new div element to hold the task
        const taskItem = document.createElement('div');
        taskItem.textContent = tasktext;

        // Append the task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        document.getElementById("taskInput").value = "";

        // Clear the tasktext for next input (though it's reset every time)
        tasktext = "";
    }
});
