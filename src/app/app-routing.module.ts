import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { DeleteMultipleRecordsComponent } from './delete-multiple-records/delete-multiple-records.component';
import { GenericFunctionComponent } from './generic-function/generic-function.component';
import { SearchFilterationComponent } from './search-filteration/search-filteration.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { MatchipComponent } from './matchip/matchip.component';
import { HostListernerComponent } from './host-listerner/host-listerner.component';
import { ChildComponent } from './child/child.component';
import { SteperComponent } from './steper/steper.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { UploadMultiFilesComponent } from './upload-multi-files/upload-multi-files.component';

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
    path:'delete-multiple-records',
    component:DeleteMultipleRecordsComponent
  },
  {
    path:'generic-function',
    component:GenericFunctionComponent
  }, 
  {
    path:'search-filteration', 
    component:SearchFilterationComponent
  },
  {
    path:'shadow-dom',
    component:ShadowDomComponent
  },
  {
    path:'ng-template',
    component:NgtemplateComponent
  },
  {
    path:"matchip",
    component:MatchipComponent
  },
  {
    path:'host-listener',
    component:HostListernerComponent
  },
  {
    path:'view-child',
    component:ChildComponent
  },
  {
    path:'steper',
    component:SteperComponent
  },
  {
    path:'todo-app',
    component:TodoAppComponent
  },
  {
    path:'upload-multi-files',
    component:UploadMultiFilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
