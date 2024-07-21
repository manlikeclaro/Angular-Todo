import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../shared/task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
