import { Routes } from '@angular/router';
import { TasksPage} from './tasks-page';
import { About } from '../about/about';

export const TASKS_ROUTES: Routes = [
  { path: '', component: TasksPage },
  { path: 'about', component: About}
];