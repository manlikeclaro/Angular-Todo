import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {UserService} from "../services/user.service";
import {User} from "../shared/user.model";
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  providers: [
    LoggingService,
    UserService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  identifiedUser!: User | undefined; // Placeholder for the selected user

  constructor(
    private loggingService: LoggingService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.loadUsers() // Initialize users from storage or defaults
  }

  // Get users from UserService
  get users() {
    return this.userService.getUsers();
  }

  // Getter to find the currently selected user
  get selectedUser() {
    return this.userService.findUser(this.identifiedUser!);
  }

  // Method to handle user selection
  onSelectUser = (obj: User) => {
    this.identifiedUser = obj;
  }
}
