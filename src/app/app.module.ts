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
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DeleteMultipleRecordsComponent } from './delete-multiple-records/delete-multiple-records.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    HttpInterceptorComponent,
    TemplateDrivenFromComponent,
    ReactiveFormComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    DeleteMultipleRecordsComponent
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
    MatCheckboxModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
