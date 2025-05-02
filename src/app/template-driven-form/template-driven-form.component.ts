import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {User} from '../user';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit{
  userObject: User = {}

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName: "John",
    //   lastName: "Vim",
    //   email: "john@gmail.com",
    //   password: "123698745",
    //   isCheck: false,
    // }
  }

  setValues(userForm: NgForm) {
    let obj = {
      firstName: "John",
      lastName: "Vim",
      email: "john@gmail.com",
      password: "123698745",
      isCheck: true,
    }
    userForm.setValue(obj);
  }

  patchValues(userForm: NgForm) {
    let obj = {
      firstName: "John",
      lastName: "Vim",
      email: "john@gmail.com",
    }
    userForm.control.patchValue(obj);
  }

  resetValues(userForm: NgForm) {
    userForm.resetForm();
  }
}
