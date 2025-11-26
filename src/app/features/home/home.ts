import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {Task} from '../../core/services/task';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  taskService = inject(Task);
  // tasks$!: ReturnType<Task['getTask']>;
  tasks$ = this.taskService.tasks$;

  // constructor(private taskService: Task) {
  //   this.tasks$ = this.taskService.getTask();  
  // }

    addTask(title: string) {
    this.taskService.addTask(title);
  }
  count = 0
  intervalId = 0

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    console.log('nginit');
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck()
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('ng destroy')
  }
}