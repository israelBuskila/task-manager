import { useState } from "react";
import { TaskI, CategoryI } from "../types/TaskInterface";
import { useNavigate, useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";

const TaskManagementPage = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const existingTask = tasks.find(task => task.id === Number(id));
  const [task, setTask] = useState<TaskI>(
    existingTask || { id: Date.now(), title: "", category: "Work", completed: false }
  );

  const handleSave = () => {
    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>{existingTask ? "Edit Task" : "New Task"}</h1>
      <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
      <select value={task.category} onChange={(e) => setTask({ ...task, category: e.target.value as CategoryI })}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shop">Shop</option>
        <option value="Pets">Pets</option>
        <option value="Self Care">Self Care</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default TaskManagementPage;
