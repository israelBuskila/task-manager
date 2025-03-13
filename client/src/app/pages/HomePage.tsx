import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";
import { CategoryI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<CategoryI | "All">("All");
  const { tasks } = useTasks(); 
  const navigate = useNavigate();

  const filteredTasks = filterCategory === "All" ? tasks : tasks.filter(task => task.category === filterCategory);

  return (
    <div>
      <div className="filter">
        <select onChange={(e) => setFilterCategory(e.target.value as CategoryI | "All")}>
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shop">Shop</option>
          <option value="Pets">Pets</option>
          <option value="Self Care">Self Care</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <button className="new-task-button" onClick={() => navigate("/task")}>
        + New Task
      </button>
    </div>
  );
};

export default HomePage;
