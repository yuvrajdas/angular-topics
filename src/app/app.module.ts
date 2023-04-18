import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DeleteMultipleRecordsComponent } from './delete-multiple-records/delete-multiple-records.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GenericFunctionComponent } from './generic-function/generic-function.component';
import { ProductDashboardComponent } from './content-projection/product-dashboard/product-dashboard.component';
import { ProductWidgeComponent } from './content-projection/product-widge/product-widge.component';
import { SearchFilterationComponent } from './search-filteration/search-filteration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { NgChartsModule } from 'ng2-charts';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { MatchipComponent } from './matchip/matchip.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpInterceptorComponent,
    TemplateDrivenFromComponent,
    ReactiveFormComponent,
    OutputDecoratorComponent,
    DeleteMultipleRecordsComponent,
    GenericFunctionComponent,
    ProductDashboardComponent,
    ProductWidgeComponent,
    SearchFilterationComponent,
    ChartjsComponent,
    InputDecoratorComponent,
    AComponentComponent,
    BComponentComponent,
    ShadowDomComponent,
    NgtemplateComponent,
    MatchipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatChipsModule,
    NgChartsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
