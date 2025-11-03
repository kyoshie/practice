'use client';

import TodoItem from "@/components/todo-item";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState([""]);
  const [newTask, setNewTask] = useState("");

  function addTask(): void {
    if (newTask.trim() === "") return;
    setTask([...task, newTask])
    setNewTask("")
  }

  function removeTask(indexToRemove: number): void {
    setTask(task.filter((_, index) => index !== indexToRemove));
  }
  
    return (
    <div className="min-h-screen flex flex-row gap-10 items-center justify-center bg-gray-50 p-6">
       <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
          className="text-black"
  placeholder="Add task"
       />
        <button onClick={addTask}>Add task</button>
        {task.map((t, index) => (
          <TodoItem
            key={index}
            task={t}
            onDelete={() => removeTask(index)}
          />
        ))}

    </div>
  );
}
