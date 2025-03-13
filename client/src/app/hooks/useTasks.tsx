import { useState, useEffect } from "react";
import { TaskI } from "../types/TaskInterface";
import { dummyTasks } from "../utils/dummyTasks";

const useTasks = () => {
  const [tasks, setTasks] = useState<TaskI[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : dummyTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: TaskI) => setTasks([...tasks, task]);
  const updateTask = (updatedTask: TaskI) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  const deleteTask = (taskId: number) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTasks;
