import React, { useCallback } from "react";
import { TaskI } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import '../styles/TaskItem.css'
import ProgressRing from "./ProgressRing";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import RenderIcon from "./RenderIcon";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";

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

        <RenderIcon iconName={task.category} className="category-icon" backgroundColor={CATEGORY_OPTIONS[task.category].backgroundColor}/>

        <div className="info">
          <span className="task-category">{task.category}</span>
          <span className={`task-title `}>{task.title}</span>
        </div>
      </div>
        <ProgressRing progress={task.progress} color={CATEGORY_OPTIONS[task.category].color}/>
      </div>


      <div className="edit-delete">
        <button onClick={handleEdit} className="edit-btn">
        <IconEdit size={24} stroke={2} color="#5F33E1" />
        </button>
        <button onClick={handleDelete} className="delete-btn">
        <IconTrash size={24} stroke={2} color="#5F33E1" />
        </button>
      </div>
   
    </div>
  );
};

export default TaskItem;
