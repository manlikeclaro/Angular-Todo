import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../../../shared/task.model'; // Import task model
import {FormsModule} from '@angular/forms'; // Import forms module for ngModel

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
  @Output() finished = new EventEmitter<void>(); // Emit event on task creation cancel
  @Output() added = new EventEmitter<Task>(); // Emit event on new task addition


  // Initialize a new task with empty values
  enteredTask = new Task('', '', '', '', '');

  // Emit finished event to close the dialog
  handleClick = () => {
    this.finished.emit();
  }

  // Emit added event with the new task
  handleSubmit = (obj: Task) => {
    this.added.emit(obj);
  }
}
