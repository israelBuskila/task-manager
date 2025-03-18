import React, { useEffect } from "react"
import TaskItem from "./TaskItem";
import { Task } from "../types/TaskInterface";

interface TaskListProps {
    tasks: Task[]
}


const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    useEffect(() => {
        console.log(tasks)
    })
    return(
        <div className="task-group">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task}  />
        ))}
      </div>
    )
}

export default TaskList