import React from "react";
import { Task } from "../types/TaskInterface";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import '../styles/TaskItem.css'
import ProgressRing from "./ProgressRing";
import RenderIcon from "./RenderIcon";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";
import { useSetAtom } from "jotai";
import { deleteTaskAtom, updateTaskAtom } from "../data/state";
import { Icons } from "../constants/icon";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();
  const update = useSetAtom(updateTaskAtom);
  const removeTask = useSetAtom(deleteTaskAtom)


  const handleToggleComplete = () => {
    update({ ...task, completed: !task.completed });
  }

  const handleEdit = () => navigate(`/task/${task.id}`);

  const handleDelete = () => removeTask(task.id)


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
        <Icons.edit />
        </button>
        <button onClick={handleDelete} className="delete-btn">
        <Icons.delete />
        </button>
      </div>
   
    </div>
  );
};

export default TaskItem;
