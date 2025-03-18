import React from "react";
import { SubTask } from "../types/TaskInterface"; // Define the SubTask type
import Checkbox from "./Checkbox";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import "../styles/SubTaskItem.css";

interface SubTaskItemProps {
  subTask: SubTask;
  onToggleComplete: () => void;
  onDelete: () => void;
}
const handleEdit = () => {}


const SubTaskItem: React.FC<SubTaskItemProps> = ({ subTask, onToggleComplete, onDelete }) => {
  return (
    <div className="subtask-item ">
<Checkbox checked={subTask.completed} onChange={onToggleComplete} />

    <div className="subtask-hover">

        <div className="info">
          <span className={`task-title`}>{subTask.title}</span>
        </div>


      <div className="edit-delete">
        <button onClick={handleEdit} className="edit-btn">
        <IconEdit size={24} stroke={2} color="#5F33E1" />
        </button>
        <button onClick={onDelete} className="delete-btn">
        <IconTrash size={24} stroke={2} color="#5F33E1" />
        </button>
      </div>
      </div>

   
    </div>
  );
};

export default SubTaskItem;
