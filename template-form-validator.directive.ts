import { Attribute, Directive, HostBinding, Input } from '@angular/core';
import {
  AbstractControl,
  NgModel,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appTemplateFormValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TemplateFormValidatorDirective,
      multi: true,
    },
  ],
})
export class TemplateFormValidatorDirective implements Validator {
  constructor(
    @Attribute('minlength') public minlength: number,
    @Attribute('maxlength') public maxlength: number
  ) {}
  @Input('control') control: NgModel;

  validate(Abscontrol: AbstractControl): ValidationErrors | null {
    if (Abscontrol.value !== null) {
      switch (this.control.name) {
        case 'Name':
          return !Abscontrol.value.length
            ? { error: true, message: `${this.control.name} must be entered` }
            : !Abscontrol.value.match(
                new RegExp(
                  '^[a-zA-Z]{' + this.minlength + ',' + this.maxlength + '}$'
                )
              )
            ? {
                error: true,
                message: `${this.control.name} must contain only alphabets. Min no is ${this.minlength} and the Max is ${this.maxlength}`,
              }
            : null;

        case 'Email':
          return !Abscontrol.value.length
            ? { error: true, message: `${this.control.name} must be entered` }
            : !Abscontrol.value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              )
            ? { error: true, message: `${this.control.name} is invalid` }
            : null;

        case 'Phone':
          return !Abscontrol.value.length
            ? { error: true, message: `${this.control.name} must be entered` }
            : !Abscontrol.value.match(
                new RegExp('^\\d{' + this.maxlength + '}$')
              )
            ? {
                error: true,
                message: `${this.control.name} must be numeric with ${this.maxlength} digits`,
              }
            : null;

        case 'DOB':
          let today = new Date();
          let selectedDate = new Date(Abscontrol.value);
          return !Abscontrol.value.length
            ? { error: true, message: `${this.control.name} must be entered` }
            : selectedDate.getTime() > today.getTime()
            ? {
                error: true,
                message: `${this.control.name} cannot be a future date`,
              }
            : null;
      }
    }
    return null;
  }
}
