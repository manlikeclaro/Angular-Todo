import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;

  @Output() select = new EventEmitter();

  getAvatar() {
    return `assets/users/${this.avatar}`;
  }

  handleClick = () => {
    this.select.emit(this.id);
  }

}
