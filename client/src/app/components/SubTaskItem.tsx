import React, { useState } from "react";
import { SubTask } from "../types/TaskInterface"; // Define the SubTask type
import Checkbox from "./Checkbox";
import "../styles/SubTaskItem.css";
import { Icons } from "./Icons";
import Input from "./Input";

interface SubTaskItemProps {
  taskId: string;
  subTask: SubTask;
  onChange: (subTask: SubTask) => void;
  onDelete: (subTaskId: string) => void;
  onToggleComplete: (subTaskId: string) => void;
}

const SubTaskItem: React.FC<SubTaskItemProps> = ({subTask, onChange, onDelete, onToggleComplete}) => {
  const [updatedSubTask, setUpdatedSubTask] = useState<SubTask>(subTask)

  const handleOnToggleComplete = () => onToggleComplete(subTask.id)

  const handelOnDelete = () => onDelete(subTask.id)

  const handleOnChange = (value: string) => {
    const updated = {...subTask, title: value}
    setUpdatedSubTask({...subTask, title: value})
    onChange(updated)
  }

  return (
    <div className="subtask-item ">

      <Checkbox checked={subTask.completed} onChange={handleOnToggleComplete} />

      <div className="subtask-hover">
        <Input label="Sub task" value={updatedSubTask.title} onChange={handleOnChange} />
      </div>

      <div className="edit-delete">
        <button onClick={() => {}} className="edit-btn">
          <Icons.edit />
        </button>
        <button onClick={handelOnDelete} className="delete-btn">
          <Icons.delete />
        </button>
      </div>

    </div>
  );
};

export default SubTaskItem;