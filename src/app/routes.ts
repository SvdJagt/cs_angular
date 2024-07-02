import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { TodoComponent } from './todo/todo.component';

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
      component: DetailsComponent,
      title: 'Frog details',
    },
    {
      path: 'todo',
      component: TodoComponent,
      title: 'Todo List',
    },
    {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  ];

  export default routeConfig;