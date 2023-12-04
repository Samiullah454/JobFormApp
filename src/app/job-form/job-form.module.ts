import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFormRoutingModule } from './job-form-routing';
import { JobFormComponent } from './job-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    JobFormRoutingModule
  ]
})
export class JobFormModule { }
