import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CoursesRoutingModule,
    AppMaterialModule,
    CommonModule

  ]
})
export class CoursesModule { }
