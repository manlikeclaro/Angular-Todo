import {Injectable} from '@angular/core';
import {Task} from '../shared/task.model';
import {DummyTasks} from '../shared/dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = DummyTasks;

  constructor() {
    this.loadTasks(); // Initialize tasks from local storage or defaults
  }

  // Return the list of tasks
  getTasks = () => {
    return this.tasks;
  }

  // Filter tasks by user ID
  getUserTasks = (userId: string) => {
    return this.getTasks().filter(task => task.userId === userId);
  }

  // Generate a new task ID
  generateTaskId = () => {
    return `task-${this.getTasks().length + 1}`;
  }

  // Add a new task to the list
  addTask = (obj: Task) => {
    obj.id = this.generateTaskId(); // Assign a new ID to the task
    this.getTasks().push(obj); // Add the task to the list
    this.saveTasks();
  }

  // Remove the task from the list
  removeTask = (obj: Task) => {
    this.tasks = this.getTasks().filter(task => task !== obj);
    this.saveTasks();
  }

  // Set or Load tasks from local storage
  loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks); // Load tasks from local storage
    } else {
      this.saveTasks(); // Save default tasks to local storage
    }
  }

  // Save tasks to local storage
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
