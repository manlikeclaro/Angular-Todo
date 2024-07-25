import {Injectable} from '@angular/core';
import {User} from "../shared/user.model";
import {DummyUsers} from "../shared/dummy-users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = DummyUsers;

  constructor() {
    this.loadUsers(); // Initialize users from local storage or defaults
  }

  // Return the list of users
  getUsers = () => {
    return this.users;
  }

  // Find a user
  findUser = (obj: User) => {
    return this.getUsers().find(user => user == obj);
  }

  // Return user's profile picture
  getUserAvatar = (obj: User) => {
    return `assets/users/${obj.avatar}`;
  }

  loadUsers(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers); // Load users from local storage
    } else {
      localStorage.setItem('users', JSON.stringify(this.users)); // Save users to local storage
    }
  }
}
