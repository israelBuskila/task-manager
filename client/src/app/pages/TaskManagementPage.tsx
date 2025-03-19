import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { addTaskAtom, tasksAtom, updateTaskAtom } from "../data/state";
import { Task } from "../types/TaskInterface";
import { Icons } from "../constants/icon";
import CategorySelection from "../components/CategorySelection";
import Input from "../components/Input";
import CTAButton from "../components/CTAButton";
import "../styles/TaskManagementPage.css";

import SubTaskItem from "../components/SubTaskItem";

const TaskManagementPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks] = useAtom(tasksAtom); // Fix useAtom return value
  const addTask = useSetAtom(addTaskAtom);
  const updateTask = useSetAtom(updateTaskAtom);

  const existingTask = tasks.find((task) => task.id ===id);

  const [task, setTask] = useState<Task>(
    existingTask || { id: Date.now().toString(), title: "", category: "", completed: false, progress: 0, subtasks: [] }
  );

  const [error, setError] = useState("");

  const handleSelect = (optionValue: string) => {
    setTask((prevTask) => ({
      ...prevTask,
      category: prevTask.category === optionValue ? "" : optionValue,
    }));
  };

  const handleToggleTask = () => setTask((prev) => ({ ...prev, completed: true }))

  const handleSave = () => {
    if (!task.title.trim()) {
      setError("Task name is required.");
      return;
    }

    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    navigate("/");
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <Icons.back width={24} height={24} />
        <span className="back-text">Back</span>
      </button>

      <div className="create-task">
        <h3>{existingTask ? "Edit Task" : "Create New Task"}</h3>

        <CategorySelection  selectedItems={task.category} handleSelect={handleSelect} />

        <Input
          label='Name your task'
          value={task.title}
          onChange={(value) => {
            setTask({ ...task, title: value });
            setError("");
          }}
          placeholder="Name your task..."
          error={error}
        />

<div className="subtask-container">
    {task.subtasks?.map((subTask) => (
       <SubTaskItem
        key={subTask.id}
        taskId={task.id}
        subTask={subTask}
        onToggleComplete={() => {}}
        onDelete={() => {}}
      />
    ))}
</div>

        <CTAButton label="+ Add sub tasks" variant="secondary" onClick={() => {}} />
      </div>

      <div className="new-task">
        <div className="save-changes">
          <CTAButton label={existingTask ? "Save Changes" : "Save new task"} variant="primary" onClick={handleSave} fullWidth />
          {existingTask && (
            <CTAButton
              label="✔ Mark as completed"
              variant="secondary"
              onClick={handleToggleTask}
              fullWidth
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManagementPage;
