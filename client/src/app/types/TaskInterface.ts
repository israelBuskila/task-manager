// Subtask Interface (No Category)
export interface SubTask {
    id: string;
    title: string;
    completed: boolean;
  }
  
  // Task Interface (Has Category)
  export interface Task {
    id: string;
    title: string;
    category: string;
    completed: boolean;
    progress: number;
    subtasks: SubTask[];
  }