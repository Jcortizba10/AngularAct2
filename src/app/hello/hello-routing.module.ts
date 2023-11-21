import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './components/world/world.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RickComponent } from './components/rick/rick.component';
import { ObservableComponent } from './components/observable/observable.component';


const routes: Routes = [
  {
    path: 'world',
    component: WorldComponent
  },
  {
    path:"list",
    component: TaskListComponent
  },
  {
    path:"",
    component: RickComponent
  },
  {
    path:"observable",
    component:ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
