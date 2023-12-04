import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormModule } from './job-form/job-form.module';

const routes: Routes = [
  { path: '', loadChildren: () => JobFormModule }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
