import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 0,
    text: 'ERROR',
    day: 'ERROR',
    reminder: false,
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }

}
