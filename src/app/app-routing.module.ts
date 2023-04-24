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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
