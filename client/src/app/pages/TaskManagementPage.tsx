import { useState } from "react";
import { TaskI, CategoryI } from "../types/TaskInterface";
import { useNavigate, useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import { Icons } from "../constants/icon";
import CategorySelection from "../components/CategorySelection";
import Input from "../components/Input";
import CTAButton from "../components/CTAButton";
import "../styles/TaskManagementPage.css"

const TaskManagementPage = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const { id } = useParams();
  
  const existingTask = tasks.find(task => task.id === Number(id));
  
  const [task, setTask] = useState<TaskI>(
    existingTask || { id: Date.now(), title: "", category: "", completed: false, progress:Math.round(Math.random() * 100) }
  );

  
  const handleSelect = (optionValue: CategoryI) => {
    setTask((prevTask) => ({
      ...prevTask,
      category: prevTask.category === optionValue ? "" : optionValue
    }));
  };

  const handleSave = () => {
    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };
   
  const labeSave = existingTask ? "Save Changes" : "Save new task"

  return (
    <div >
    <button className="back-button"   onClick={() => navigate(-1)}>
      <Icons.back width={24} height={24} />
      <span className="back-text">Back</span>
    </button>

    <div className="create-task">
    <h3>{existingTask ? "Edit Task" : "Create New Task"}</h3>
      <CategorySelection selectedItems={task.category} handleSelect={handleSelect}/>

      <Input 
        label="" 
        value={task.title} 
        onChange={(value) => {
          setTask({ ...task, title: value });
          setError("");
        }}
        placeholder="Name your task..."
        error={error} 
      />  
    <CTAButton label="+ Add sub tasks" variant="secondary" onClick={handleSave}/>
    </div>
         <div className="new-task">
          <div className="save-changes">
         <CTAButton label={labeSave} variant="primary" onClick={handleSave} fullWidth/>
         {existingTask && <CTAButton label="✔ Mark as completed" variant="secondary" onClick={handleSave} fullWidth/>
        }
        </div>
         </div>
    </div>
  );
};

export default TaskManagementPage;
