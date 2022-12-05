import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {
  dateValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
} from './validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 }
