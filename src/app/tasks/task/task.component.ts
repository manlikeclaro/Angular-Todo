import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../../shared/task.model'; // Import task model
import {DatePipe} from '@angular/common'; // Import DatePipe for date formatting

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe // Import DatePipe to format dates in the template
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Input property for task data
  @Input({required: true}) task!: Task;
  // Event emitter for task completion
  @Output() complete = new EventEmitter<Task>();

  // Method to handle button click and emit task completion event
  handleClick = () => {
    this.complete.emit(this.task); // Emit the task to the parent component
  }
}
