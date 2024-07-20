import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DummyUsers} from "../shared/dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DummyUsers;
  identifiedUser?: {};

  // identifiedUser?: {} = this.users[Math.floor(Math.random() * this.users.length)];

  get selectedUser() {
    return this.users.find(user => this.identifiedUser === user)
  }

  onSelectUser = (obj: {}) => {
    return this.identifiedUser = obj;
  }

}
