import {Component, Input} from '@angular/core';
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
export class TasksComponent {
  @Input({required: true}) user!: User;
  newTaskCreate = false;
  tasks = DummyTasks;

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
  }
}
