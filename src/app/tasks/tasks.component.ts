import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../shared/task.model';
import { User } from '../../shared/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { LoggingService } from '../../services/logging.service';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  providers: [
    TaskService
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input({required: true}) user!: User; // Input property for user data
  newTaskCreate = false; // Controls visibility of task creation form

  constructor(
    private loggingService: LoggingService,
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.taskService.loadTasks(); // Initialize tasks from storage or defaults
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id); // Filter tasks by user
  }

  handleCompletedTask = (obj: Task) => {
    this.taskService.removeTask(obj); // Remove completed task
    // this.loggingService.logObject(obj); // Log completed task
  }

  handleTaskCreation = () => {
    this.newTaskCreate = !this.newTaskCreate; // Toggle task creation form
    this.loggingService.logStatus('newTaskCreate', `${this.newTaskCreate}`); // Log the change
  }

  handleNewTask = (obj: Task) => {
    obj.userId = this.user.id; // Set the task's user ID
    this.taskService.addTask(obj); // Add the new task
    this.handleTaskCreation(); // Hide the task creation form
    this.loggingService.logObject(obj); // Log new task
  }
}
