import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../../shared/task.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() finished = new EventEmitter<void>();
  @Output() added = new EventEmitter<Task>();

  enteredTask = new Task('', '', '', '', '');

  handleClick = () => {
    this.finished.emit();
  }

  handleSubmit = (obj: Task) => {
    this.added.emit(obj);
  }

}
