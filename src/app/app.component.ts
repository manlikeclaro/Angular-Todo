import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DummyUsers} from '../shared/dummy-users'; // Import dummy user data
import {TasksComponent} from './tasks/tasks.component';

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
  users = DummyUsers; // Assign dummy users to the component
  identifiedUser?: {}; // Placeholder for the selected user

  // Getter to find the currently selected user
  get selectedUser() {
    return this.users.find(user => this.identifiedUser === user);
  }

  // Method to handle user selection
  onSelectUser = (obj: {}) => {
    return this.identifiedUser = obj;
  }
}
