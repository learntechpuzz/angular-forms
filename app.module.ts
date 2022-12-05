import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonErrorDisplayComponent } from './common-error-display/common-error-display.component';
import { TemplateFormValidatorDirective } from './template-form-validator.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CommonErrorDisplayComponent,
    TemplateFormValidatorDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
