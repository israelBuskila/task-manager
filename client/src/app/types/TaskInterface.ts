export interface SubTask {
    id: string;
    title: string;
    completed: boolean;
  }
  
  export interface Task {
    id: string;
    title: string;
    category: string;
    completed: boolean;
    progress: number;
    subtasks: SubTask[];
  }