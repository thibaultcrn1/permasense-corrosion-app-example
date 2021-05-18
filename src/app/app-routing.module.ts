import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeasurementPointComponent } from './measurement-point/measurement-point.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'measurement-point', component: MeasurementPointComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
