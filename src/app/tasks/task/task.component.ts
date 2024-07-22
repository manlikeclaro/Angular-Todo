import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../shared/task.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<object>();

  handleClick = () => {
    this.complete.emit(this.task);
  }

}
