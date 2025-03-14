import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";
import { CategoryI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css'
import Filter from "../components/Filter";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";
// import Select from "react-select/base";
// import { Options } from "react-select";

const HomePage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<CategoryI | "Filter">("Filter");
  const { tasks, deleteTask, updateTask} = useTasks(); 
  const navigate = useNavigate();

  const filteredTasks = filterCategory === "Filter" ? tasks : tasks.filter(task => task.category === filterCategory);

  const inProgressCount = filteredTasks.reduce((acc, t) => t.completed ? acc : acc + 1, 0);
    // const handleChange = (selectedOption) => {
    //   console.log("Selected:", selectedOption);}
    //   const options = [
    //     { value: "filter", label: "Filter" },
    //     { value: "work", label: "Work" },
    //     { value: "personal", label: "Personal" },
    //     { value: "shop", label: "Shop" },
    //     { value: "pets", label: "Pets" },
    //     { value: "self-care", label: "Self Care" },
    //   ];
  return (
    <div className="tasks">
      <div className="title-filter">
        <div className="progress">
        <div className="in-progress">In progress</div>
        <div className="count">{inProgressCount}</div>
        </div>

        <Filter filter={CATEGORY_OPTIONS} setFilter={setFilterCategory}/>
      {/* <Select options={options} onChange={handleChange}/> */}
      </div>
      
      <div className="task-list">
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
