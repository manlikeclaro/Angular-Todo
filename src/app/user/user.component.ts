import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from "../../services/user.service"; // Import user model

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User; // Input property for user data
  @Input({required: true}) selected!: boolean; // Input property for selection state

  @Output() select = new EventEmitter<User>(); // Output event emitter for user selection

  constructor(private userService: UserService) {
  }

  // Method to get the avatar URL
  getAvatar() {
    return this.userService.getUserAvatar(this.user);
  }

  // Method to handle button click and emit user selection event
  handleClick = () => {
    this.select.emit(this.user);
  }
}
