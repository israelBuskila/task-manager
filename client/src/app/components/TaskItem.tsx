import React, { useCallback } from "react";
import { TaskI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import { getIconPath } from "../utils/icons";
import Checkbox from "./Checkbox";

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
    <div className="task-item">
      <div className="task-details">
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />

        <img src={getIconPath(task.category)} alt={task.category} className="category-icon" />

        <div className="task-text">
          <span className="task-category">{task.category}</span>
          <span className={`task-title `}>{task.title}</span>
        </div>
      </div>


      <div className="task-actions">
        <button onClick={handleEdit} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
