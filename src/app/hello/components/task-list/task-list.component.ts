import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] =[];

  ngOnInit(): void {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!): [];
    /* condicion ? valor si verdadero : valor si falso*/
  }

  onSubmit(formValue: Task){
    this.tasks.push(formValue);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    console.log(this.tasks)
  }
  onRemove(indice: number){
    this.tasks.splice(indice,1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
