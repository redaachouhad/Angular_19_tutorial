import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.reactiveForm = new FormGroup({
    //   firstname: new FormControl(""),
    //   lastname: new FormControl(""),
    //   email: new FormControl(""),
    //   password: new FormControl(),
    //   isChecked: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(""),
    //     street: new FormControl(""),
    //     pincode: new FormControl(),
    //   })
    // });
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
      skills: this.fb.array([])
    })
  }


  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup{
    return this.fb.group({
      skill: '',
    })
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }

  trackByIndex(index: number, _: any): number {
    return index;
  }


  onSubmit() {
    console.log(this.reactiveForm.value);
  };

  setValues() {
    this.reactiveForm.setValue({
      firstname: "Peter",
      lastname: "Green",
      email: "peter@gmail.com",
      password: 123456789,
      isChecked: true,
      address: {
        city: "paris",
        street: "wall street",
        pincode: 1234,
      },
      skills: [],
    });
  };

  patchValues() {
    this.reactiveForm.patchValue({
      firstname: "Peter",
      address: {
        city: "Paris",
        street: "Wall street",
        pincode: 1234,
      }
    });
  };

  resetValues() {
    this.reactiveForm.reset();
    this.skills.clear();
  };
}
