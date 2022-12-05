import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidator(
  controlName: string,
  minlength: number,
  maxlength: number
) {
  return (control: AbstractControl): ValidationErrors | null => {
    let pattern = '^[a-zA-Z]{' + minlength + ',' + maxlength + '}$';
    return !control.value.length
      ? { error: true, message: `${controlName} is required` }
      : !control.value.match(new RegExp(pattern))
      ? {
          error: true,
          message: `${controlName} must contain only alphabets. Min no is ${minlength} and the Max is ${maxlength}`,
        }
      : null;
  };
}

export function emailValidator(controlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    return !control.value.length
      ? { error: true, message: `${controlName} is required` }
      : !control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ? { error: true, message: `${controlName} is invalid` }
      : null;
  };
}

export function phoneValidator(controlName: string, expectedLength: number) {
  let pattern = '^\\d{' + expectedLength + '}$';
  /* Add an extra backslash before \d if regex is constructed as a string. There is no need for // at the beginning and end of string if using RegExp  */
  return (control: AbstractControl): ValidationErrors | null => {
    return !control.value.length
      ? { error: true, message: `${controlName} is required` }
      : !control.value.match(new RegExp(pattern))
      ? {
          error: true,
          message: `${controlName} must be numeric with ${expectedLength} digits`,
        }
      : null;
  };
}

export function dateValidator(controlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    let today = new Date();
    let selectedDate = new Date(control.value);
    return !control.value.length
      ? { error: true, message: `${controlName} is required` }
      : selectedDate.getTime() > today.getTime()
      ? { error: true, message: `${controlName} cannot be a future date` }
      : null;
  };
}
