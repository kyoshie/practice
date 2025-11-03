'use client'

{/*  🧩 React Challenge: “Todo List (Beginner Version)”
🎯 Goal:
Build a simple Todo List app that lets you:
1. Add new tasks 📝
2. Display the list of tasks
3. Remove a task ❌

🧠 What You’ll Practice
1. useState for managing the list of tasks
2. Passing props (to show and delete tasks)
3. Mapping over an array to display multiple items

🧱 Requirements
The Parent Component (TodoApp):
1. Has a useState array named tasks
2. Has a function addTask that adds a new task
3. Has a function removeTask that deletes a task (based on index or id)

Renders:
1. An input box and Add Task button
2. A list of <TodoItem /> child components

The Child Component (TodoItem):
Receives props:
1. task (the text)
2. onDelete (function to remove it)
3. Displays the task name and a ❌ button that calls onDelete*/}

type tasks = {
    task: string,
    onDelete: () => void
}

export default function TodoItem({task, onDelete}:tasks) {
    return(
        <div className="flex gap-5 text-black">
            <p>Task: {task}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}