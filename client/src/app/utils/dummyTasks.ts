import { TaskI } from "../types/TaskInterface";

export const dummyTasks: TaskI[] = [
  { id: 1, title: "Finish project report", category: "Work", completed: false, progress: 20 },
  { id: 2, title: "Buy groceries", category: "Shop", completed: true, progress: 100 },
  { id: 3, title: "Walk the dog", category: "Pets", completed: false, progress: 50 },
  { id: 4, title: "Call mom", category: "Personal", completed: false, progress: 10 },
  { id: 5, title: "Read a book", category: "Self Care", completed: true, progress: 100 },
  { id: 6, title: "Prepare presentation", category: "Work", completed: false, progress: 40 },
  { id: 7, title: "Book a dentist appointment", category: "Self Care", completed: false, progress: 0 },
  { id: 8, title: "Order new headphones", category: "Shop", completed: true, progress: 100 },
  { id: 9, title: "Plan weekend trip", category: "Personal", completed: false, progress: 30 },
  { id: 10, title: "Clean the house", category: "Personal", completed: true, progress: 100 },
];
