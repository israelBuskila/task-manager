import React from "react";
import { TaskI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import { getIconPath } from "../utils/icons";
import useTasks from "../hooks/useTasks";

interface TaskItemProps {
  task: TaskI;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTasks(); 
  const navigate = useNavigate();

  const handleToggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div className="task-item">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="hidden-checkbox"
        />
        <img src={getIconPath(task.completed ? "checked" : "noChecked")} alt="Checkbox" width={16} height={16} />
      </label>

      <img src={getIconPath(task.category)} alt={task.category} className="category-icon" />

      <div className="task-details">
        <span className={`task-title ${task.completed ? "completed" : ""}`}>{task.title}</span>
        <span className="task-category">{task.category}</span>
      </div>

      <div className="task-actions">
        <button onClick={handleEdit} className="edit-btn">Edit</button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
