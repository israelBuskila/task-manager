import React, { useCallback } from "react";
import { TaskI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import { getIconPath } from "../utils/icons";
import Checkbox from "./Checkbox";
import '../styles/TaskItem.css'
import ProgressRing from "./ProgressRing";
import RenderIcon from "./RenderIcon";

interface TaskItemProps {
  task: TaskI;
  deleteTask: (id: number) => void;
  updateTask: (task: TaskI) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, updateTask }) => {
  const navigate = useNavigate();

  const handleToggleComplete = useCallback(() => {
    updateTask({ ...task, completed: !task.completed });
  }, [task, updateTask]);

  const handleEdit = () => navigate(`/task/${task.id}`);

  const handleDelete = () => deleteTask(task.id)


  return (
    <div className="hover">
    <div className="task">
      <div className="task-info">
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />

        <img src={getIconPath(task.category)} alt={task.category} className="category-icon" />

        <div className="info">
          <span className="task-category">{task.category}</span>
          <span className={`task-title `}>{task.title}</span>
        </div>
      </div>
      <div className="progress">
        <ProgressRing progress={23}/>
      </div>
      </div>


      <div className="edit-delete">
        <button onClick={handleEdit} className="edit-btn">
          <RenderIcon className="edit-icon" iconName="edit"/>
        </button>
        <button onClick={handleDelete} className="delete-btn">
          <RenderIcon className="delete-icon" iconName="delete"/>
        </button>
      </div>
   
    </div>
  );
};

export default TaskItem;
