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

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  handleCompletedTask = (obj: object) => {
    this.tasks = this.tasks.filter(task => task !== obj);
  }

  handleTaskCreation = () => {
    this.newTaskCreate = !this.newTaskCreate;
  }

  handleNewTask = (obj: Task) => {
    obj.id = `task-${99}`;
    obj.userId = this.user.id;
    this.tasks.push(obj)
    this.handleTaskCreation()
  }

}
