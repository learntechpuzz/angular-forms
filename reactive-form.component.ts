import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  dateValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
} from '../validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public showError: boolean = false;

  public formValidation = new FormGroup({
    reactName: new FormControl('', {
      validators: [nameValidator('Name',10,20)],
      updateOn: 'blur',
    }),
    reactEmail: new FormControl('', {
      validators: [emailValidator('Email')],
      updateOn: 'submit',
    }),
    reactDob: new FormControl('', {
      validators: [dateValidator('DOB')],
      updateOn: 'change',
    }),
    reactPhone: new FormControl('', {
      validators: [phoneValidator('Phone',10)],
      updateOn: 'change',
    }),
  });

  scrollToFirstError(controls) {
    for (let x in controls) {
      if (controls[x].errors) {
        document.querySelector('#' + x).scrollIntoView();
        break;
      }
    }
  }

  submitReactForm() {
    this.showError = true;
    console.log(this.formValidation.controls);
    this.scrollToFirstError(this.formValidation.controls);
  }
}
