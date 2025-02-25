import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
