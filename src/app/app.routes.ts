import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
  loadChildren: () => import("./hello/hello.module").then(m => m.HelloModule)

  }
];
