import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {DummyUsers} from "../../shared/dummy-users";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<object>();

  getAvatar() {
    return `assets/users/${this.user.avatar}`;
  }

  handleClick = () => {
    this.select.emit(this.user);
  }

}
