import React, { useState } from "react";
import { SubTask } from "../types/TaskInterface"; // Define the SubTask type
import Checkbox from "./Checkbox";
import "../styles/SubTaskItem.css";
import { Icons } from "../constants/icon";
import { useSetAtom } from "jotai";
import { updateSubtaskAtom } from "../data/state";
import Input from "./Input";

interface SubTaskItemProps {
  taskId: string;
  subTask: SubTask;
  onChange: (subTask: SubTask) => void;
  onDelete: (subTaskId: string) => void;
}

const handleEdit = () => { }


const SubTaskItem: React.FC<SubTaskItemProps> = ({ taskId, subTask,onChange, onDelete }) => {
  const updateSubTask = useSetAtom(updateSubtaskAtom)
  const [completed, setCompleted] = useState(subTask.completed)
  const [updatedSubTask, setUpdatedSubTask] = useState<SubTask>(subTask)

  const onToggleComplete = () => {
    setCompleted(prev => !prev)
    // const updatedSubTask = { ...subTask, completed: !subTask.completed } as SubTask
    // updateSubTask({ taskId, subtask: updatedSubTask })
  }

  const handleOnChange = (value: string) => {
    const updated = {...subTask, title: value}
    setUpdatedSubTask({...subTask, title: value})
    onChange(updated)
  }

  const handelOnDelete = () => {
    onDelete(subTask.id)
  }

  return (
    <div className="subtask-item ">
      <Checkbox checked={completed} onChange={onToggleComplete} />

      <div className="subtask-hover">
        <Input label="Sub task" value={updatedSubTask.title} onChange={handleOnChange} />
      </div>

      <div className="edit-delete">
        <button onClick={handleEdit} className="edit-btn">
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
