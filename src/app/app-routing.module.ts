import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { DeleteMultipleRecordsComponent } from './delete-multiple-records/delete-multiple-records.component';

const routes: Routes = [
  {
    path:'http-interceptor',
    component:HttpInterceptorComponent
  },
  {
    path:'template-driven-from',
    component:TemplateDrivenFromComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  },
  {
    path:'output-decorator',
    component:OutputDecoratorComponent
  },
  {
    path:'input-decorator',
    component:InputDecoratorComponent
  },
  {
    path:'delete-multiple-records',
    component:DeleteMultipleRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
