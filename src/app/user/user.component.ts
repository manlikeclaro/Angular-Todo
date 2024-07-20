import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<object>();

  getAvatar() {
    return `assets/users/${this.user.avatar}`;
  }

  handleClick = () => {
    this.select.emit(this.user);
  }

}
