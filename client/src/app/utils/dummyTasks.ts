import { Task } from "../types/TaskInterface";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Finish project report",
    category: "Work",
    completed: false,
    progress: 20,
    subtasks: [
      { id: "1-1", title: "Write introduction", completed: false },
      { id: "1-2", title: "Add charts", completed: false },
      { id: "1-3", title: "Proofread", completed: false },
    ],
  },
  {
    id: "2",
    title: "Buy groceries",
    category: "Shop",
    completed: true,
    progress: 100,
    subtasks: [
      { id: "2-1", title: "Buy milk", completed: true },
      { id: "2-2", title: "Get vegetables", completed: true },
    ],
  },
  {
    id: "3",
    title: "Walk the dog",
    category: "Pets",
    completed: false,
    progress: 50,
    subtasks: [
      { id: "3-1", title: "Take leash", completed: true },
      { id: "3-2", title: "Go to the park", completed: false },
    ],
  },
  {
    id: "4",
    title: "Call mom",
    category: "Personal",
    completed: false,
    progress: 10,
    subtasks: [
      { id: "4-1", title: "Check the time", completed: false },
      { id: "4-2", title: "Find a quiet place", completed: false },
    ],
  },
  {
    id: "5",
    title: "Read a book",
    category: "Self Care",
    completed: true,
    progress: 100,
    subtasks: [
      { id: "5-1", title: "Pick a book", completed: true },
      { id: "5-2", title: "Read 20 pages", completed: true },
    ],
  },
  {
    id: "6",
    title: "Prepare presentation",
    category: "Work",
    completed: false,
    progress: 40,
    subtasks: [
      { id: "6-1", title: "Create slides", completed: true },
      { id: "6-2", title: "Practice speaking", completed: false },
    ],
  },
  {
    id: "7",
    title: "Book a dentist appointment",
    category: "Self Care",
    completed: false,
    progress: 0,
    subtasks: [],
  },
  {
    id: "8",
    title: "Order new headphones",
    category: "Shop",
    completed: true,
    progress: 100,
    subtasks: [],
  },
  {
    id: "9",
    title: "Plan weekend trip",
    category: "Personal",
    completed: false,
    progress: 30,
    subtasks: [
      { id: "9-1", title: "Find a location", completed: false },
      { id: "9-2", title: "Check weather", completed: false },
    ],
  },
  {
    id: "10",
    title: "Clean the house",
    category: "Personal",
    completed: true,
    progress: 100,
    subtasks: [
      { id: "10-1", title: "Vacuum floors", completed: true },
      { id: "10-2", title: "Wash dishes", completed: true },
    ],
  },
];
