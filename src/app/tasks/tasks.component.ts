import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../shared/user.model";
import {TaskComponent} from "./task/task.component";
import {DummyTasks} from "../../shared/dummy-tasks";
import {NewTaskComponent} from "./new-task/new-task.component";
import {Task} from "../../shared/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  @Input({required: true}) user!: User;
  newTaskCreate = false;
  // tasks = DummyTasks;

  // Array to store the list of tasks
  tasks: Task[] = [];

  // Lifecycle hook to perform component initialization
  ngOnInit(): void {
    this.loadTasks() // Load tasks from local storage or initialize with dummy tasks
  }

  // Method to get tasks for the selected user
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  // Method to handle completed task removal
  handleCompletedTask = (obj: object) => {
    this.tasks = this.tasks.filter(task => task !== obj);
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
    obj.id = this.newTaskId();
    obj.userId = this.user.id;
    console.log(obj);
    this.tasks.push(obj);
    this.handleTaskCreation();
    this.saveTasks();
  }

  // Method to load tasks from local storage or initialize with DummyTasks
  loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = DummyTasks; // Initialize with dummy tasks if no tasks are stored
      this.saveTasks(); // Save the initial dummy tasks to local storage
    }
  }

  // Method to save tasks to local storage
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Store tasks as a JSON string
  }
}
