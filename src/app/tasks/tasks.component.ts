import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/user.model'; // Import user model
import {Task} from '../../shared/task.model'; // Import task model
import {TaskComponent} from './task/task.component'; // Import task component
import {NewTaskComponent} from './new-task/new-task.component'; // Import new task component
import {DummyTasks} from '../../shared/dummy-tasks'; // Import dummy tasks data

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent // Import new task component for task creation
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  // Input property for the user
  @Input({required: true}) user!: User;
  newTaskCreate = false; // Boolean to toggle task creation form visibility
  tasks = DummyTasks; // Array to store the list of tasks

  // Lifecycle hook for component initialization
  ngOnInit(): void {
    this.loadTasks(); // Load tasks from local storage or initialize with dummy tasks
  }

  // Method to get tasks for the selected user
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  // Method to handle completed task removal
  handleCompletedTask = (obj: Task) => {
    this.tasks = this.tasks.filter(task => task !== obj); // Remove completed task from the list
    this.saveTasks(); // Save the updated task list
  }

  // Method to toggle task creation state
  handleTaskCreation = () => {
    this.newTaskCreate = !this.newTaskCreate;
  }

  // Method to generate a new task ID
  newTaskId = () => {
    return `task-${this.tasks.length + 1}`;
  }

  // Method to handle new task addition
  handleNewTask = (obj: Task) => {
    obj.id = this.newTaskId(); // Assign a new ID to the task
    obj.userId = this.user.id; // Assign user ID to the task
    this.tasks.push(obj); // Add new task to the list
    this.handleTaskCreation(); // Hide task creation form
    this.saveTasks(); // Save the updated task list
  }

  // Method to load tasks from local storage or initialize with DummyTasks
  loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.saveTasks(); // Save the initial dummy tasks to local storage
    }
  }

  // Method to save tasks to local storage
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Store tasks as a JSON string
  }
}
