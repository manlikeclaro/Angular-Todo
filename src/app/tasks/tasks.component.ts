import {Component, Input} from '@angular/core';
import {User, UserInterface} from "../../shared/user.model";
import {TaskComponent} from "./task/task.component";
import {DummyTasks} from "../../shared/dummy-tasks";
import {DummyUsers} from "../../shared/dummy-users";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: User;

  tasks = DummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }


}
