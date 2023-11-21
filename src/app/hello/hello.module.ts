import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { WorldComponent } from './components/world/world.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RickComponent } from './components/rick/rick.component';
import { HttpClientModule } from '@angular/common/http';
import { RickService } from './services/rick.service';
import { ObservableService } from './services/observable.service';
import { ObservableComponent } from './components/observable/observable.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [WorldComponent, TaskListComponent, RickComponent, ObservableComponent],
  imports: [
    CommonModule,
    HelloRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers:[RickService, ObservableService]

})
export class HelloModule { }
