const taskButton = document.getElementById("taskButton")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskItem")

let tasks = []

const taskFunctions = () => {
    let newTask = taskInput.value.trim()

    if (newTask === "") {
        return
    }

    tasks.push(newTask)

    const li = document.createElement("li")
    li.textContent = newTask

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delete-btn")

    deleteBtn.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(deleteBtn)
    taskList.appendChild(li)

    taskInput.value = ""
}

taskButton.addEventListener("click", taskFunctions)
taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            taskFunctions()
        }
    })
