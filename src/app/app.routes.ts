import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';

export const routes: Routes = [
    { path:"",component: Home},
    { path: 'about', component: About}
];
