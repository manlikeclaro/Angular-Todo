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
  @Input({required: true}) task!: Task; // Input property for task data
  @Output() complete = new EventEmitter<Task>(); // Event emitter for task completion

  // Method to handle button click and emit task completion event
  handleClick = () => {
    this.complete.emit(this.task);
  }
}
