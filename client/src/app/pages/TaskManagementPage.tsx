import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { addTaskAtom, tasksAtom, updateTaskAtom } from "../data/state";
import { SubTask, Task } from "../types/TaskInterface";
import { Icons } from "../constants/icon";
import CategorySelection from "../components/CategorySelection";
import Input from "../components/Input";
import CTAButton from "../components/CTAButton";
import "../styles/TaskManagementPage.css";
import SubTaskItem from "../components/SubTaskItem";
import Typography from "../components/Typography";

const TaskManagementPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks] = useAtom(tasksAtom);
  const addTask = useSetAtom(addTaskAtom);
  const updateTask = useSetAtom(updateTaskAtom);

  const existingTask = tasks.find((task) => task.id === id);

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

  const handleOnChangeTask = (value: string) => {
    setTask({ ...task, title: value });
    setError("");
  }

  const onChangeSubTask = (subTask: SubTask) => {
    const updatedSubTask = { ...task.subtasks }.map(st => st.id === subTask.id ? subTask : st)
    setTask({ ...task, subtasks: updatedSubTask });
    setError("");
  }

  const handleAddSubTask = () => {
    const newSubTask: SubTask = { id: Date.now().toString(), title: "New Sub Task", completed: false };
    const updatedSubTasks: SubTask[] = [...task.subtasks, newSubTask];
    setTask({ ...task, subtasks: updatedSubTasks });
  };

  const handleDeleteSubTask = (subTaskId: string) => {
    const updatedSubTasks = [...task.subtasks].filter(st => st.id !== subTaskId)
    setTask({ ...task, subtasks: updatedSubTasks })
  }

  const onToggleComplete = (subTaskId: string) => {
    const updatedSubTasks = [...task.subtasks].map(st => st.id === subTaskId ? { ...st, completed: !st.completed } : st)
    setTask({ ...task, subtasks: updatedSubTasks })
  }

  const handleSave = () => {
    if (!task.title.trim()) {
      setError("Task name is required.");
      return;
    }

    if (!task.category.trim()) {
      setError("Task category is required.");
      return;
    }

    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
      // setTasks(prevTasks => [...prevTasks, task])
    }
    navigate("/");
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <Icons.back width={24} height={24} />
        <Typography variant="medium">Back</Typography>
      </button>

      <div className="create-task">
        <Typography variant="large">{existingTask ? "Edit Task" : "Create New Task"}</Typography>

        <CategorySelection selectedItems={task.category} handleSelect={handleSelect} />

        <Input
          label='Name your task'
          value={task.title}
          onChange={handleOnChangeTask}
          placeholder="Name your task..."
          error={error}
        />

        <div className="subtask-container">
          {task.subtasks?.map((subTask) => (
            <SubTaskItem
              key={subTask.id}
              taskId={task.id}
              subTask={subTask}
              onChange={onChangeSubTask}
              onDelete={handleDeleteSubTask}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>

        <div className="subtasks-actions">
          <CTAButton label="+ Add sub tasks" variant="secondary" onClick={handleAddSubTask} />
          <Icons.delete />
        </div>
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
