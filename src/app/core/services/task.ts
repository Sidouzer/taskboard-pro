import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks = [
    { id: 1, title: 'Préparer le cours dAngular'},
    { id: 2, title: 'Faire le TP'},
    { id: 3, title: 'Faire tout fonctionner'}
  ];

  getTask() {
    return of(this.tasks).pipe(delay(1000));
  }

  private taskSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.taskSubject.asObservable();

  addTask(title: string) {
      const newTask = {id: Date.now(), title};
      this.tasks = [...this.tasks, newTask];
      this.taskSubject.next(this.tasks);
      console.log('method addTask');
      }
}
