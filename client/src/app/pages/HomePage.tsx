import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";
import { CategoryI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css'
import Filter from "../components/Filter";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";
import Dropdown from "../components/Dropdown";


const HomePage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<CategoryI | "Filter">("Filter");
  const { tasks, deleteTask, updateTask} = useTasks(); 
  const navigate = useNavigate();

  const filteredTasks = filterCategory === "Filter" ? tasks : tasks.filter(task => task.category === filterCategory);

  const inProgressCount = filteredTasks.reduce((acc, t) => t.completed ? acc : acc + 1, 0);


  return (
    <div className="tasks">
      <div className="title-filter">
        <div className="progress">
        <div className="in-progress">In progress</div>
        <div className="count">{inProgressCount}</div>
        </div>

        <Dropdown />
      </div>
      
      <div className="task-group">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
        ))}
      </div>

      <button className="new-task-button" onClick={() => navigate("/task")}>
        + New Task
      </button>

    </div>
  );
};

export default HomePage;
