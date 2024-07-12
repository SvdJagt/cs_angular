import {HomeComponent} from './home/home.component';
import { Routes } from '@angular/router';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    { 
      path: 'home/:search',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      title: 'Frog details',
      loadComponent: () => import('./details/details.component').then(mod => mod.DetailsComponent)
    },
    {
      path: 'todo',
      title: 'Todo List',
      loadComponent: () => import("./todo/todo.component").then((m) => m.TodoComponent),
    },
    {
      path: 'contactpage',
      title: 'Contact Page',
      loadComponent: () => import("./contactpage/contactpage.component").then((m) => m.ContactpageComponent),
    },
    {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  ];

  export default routeConfig;