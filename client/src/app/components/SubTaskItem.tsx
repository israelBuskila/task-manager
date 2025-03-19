import React, { useState } from "react";
import { SubTask } from "../types/TaskInterface"; // Define the SubTask type
import Checkbox from "./Checkbox";
import "../styles/SubTaskItem.css";
import { Icons } from "../constants/icon";
import { useSetAtom } from "jotai";
import { deleteSubtaskAtom, updateSubtaskAtom } from "../data/state";
import Input from "./Input";

interface SubTaskItemProps {
  taskId: string;
  subTask: SubTask;
  onToggleComplete: () => void;
  onDelete: () => void;
}

const handleEdit = () => { }


const SubTaskItem: React.FC<SubTaskItemProps> = ({ taskId, subTask, onDelete }) => {
  const updateSubTask = useSetAtom(updateSubtaskAtom)
  const [completed, setCompleted] = useState(subTask.completed)
  const [updatedSubTask, setUpdatedSubTask] = useState<SubTask>()
  const deleteSubTask = useSetAtom(deleteSubtaskAtom)

  const onToggleComplete = () => {
    setCompleted(prev => !prev)
    const updatedSubTasks = { ...subTask, completed: !subTask.completed } as SubTask
    updateSubTask({ taskId, subtask: updatedSubTasks })
  }

  return (
    <div className="subtask-item ">
      <Checkbox checked={completed} onChange={onToggleComplete} />

      <div className="subtask-hover">
        <Input label="Sub task" value={subTask.title} onChange={() => { }} />
      </div>

      <div className="edit-delete">
        <button onClick={handleEdit} className="edit-btn">
          <Icons.edit />
        </button>
        <button onClick={() => deleteSubTask({taskId, subtaskId: subTask.id})} className="delete-btn">
          <Icons.delete />
        </button>
      </div>



    </div>
  );
};

export default SubTaskItem;
