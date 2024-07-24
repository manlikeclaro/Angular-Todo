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
  // Event emitted when task creation is cancelled
  @Output() finished = new EventEmitter<void>();
  // Event emitted when a new task is added
  @Output() added = new EventEmitter<Task>();

  // Initialize a new task with empty values
  enteredTask = new Task('', '', '', '', '');

  // Method to handle click event on the backdrop or cancel button
  handleClick = () => {
    this.finished.emit(); // Emit finished event to close the dialog
  }

  // Method to handle form submission
  handleSubmit = (obj: Task) => {
    this.added.emit(obj); // Emit added event with the new task
  }
}
