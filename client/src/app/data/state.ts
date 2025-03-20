import { atom } from "jotai";
import { initialTasks } from "../utils/dummyTasks";
import { SubTask, Task } from "../types/TaskInterface";

export const tasksAtom = atom<Task[]>(initialTasks);
export const filterCategoryAtom = atom<string[]>([]);

export const getTaskByIdAtom = atom(
    (get) => (taskId: string) => get(tasksAtom).find((task) => task.id === taskId)
  );
  
export const addTaskAtom = atom(null, (get, set, newTask: Task) => {
  const tasks = get(tasksAtom);
  set(tasksAtom, [...tasks, newTask]);
});

export const updateTaskAtom = atom(
  null,
  (get, set, updatedTask: Task) => {
    const tasks = get(tasksAtom).map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    set(tasksAtom, tasks);
  }
);

export const deleteTaskAtom = atom(null, (get, set, taskId: string) => {
  const tasks = get(tasksAtom).filter((task) => task.id !== taskId);
  set(tasksAtom, tasks);
});

export const addSubtaskAtom = atom(
  null,
  (get, set, { taskId, subtask }: { taskId: string; subtask: SubTask }) => {
    const tasks = get(tasksAtom).map((task) =>
      task.id === taskId
        ? { ...task, subtasks: [...task.subtasks, subtask] }
        : task
    );
    set(tasksAtom, tasks);
  }
);

export const updateSubtaskAtom = atom(
  null,
  (get, set, { taskId, subtask }: { taskId: string; subtask: SubTask }) => {
    const tasks = get(tasksAtom).map((task) =>
      task.id === taskId
        ? {
            ...task,
            subtasks: task.subtasks.map((s) =>
              s.id === subtask.id ? subtask : s
            ),
          }
        : task
    );
    set(tasksAtom, tasks);
  }
);

export const deleteSubtaskAtom = atom(
  null,
  (get, set, { taskId, subtaskId }: { taskId: string; subtaskId: string }) => {
    const tasks = get(tasksAtom).map((task) =>
      task.id === taskId
        ? { ...task, subtasks: task.subtasks.filter((s) => s.id !== subtaskId) }
        : task
    );
    set(tasksAtom, tasks);
  }
);