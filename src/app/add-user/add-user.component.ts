import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-add-user',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  addUserForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private crud: CrudService) {
    this.addUserForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      username: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onCancel() {
    this.router.navigateByUrl('crud').then(()=>{});
  }

  onSubmit() {
    this.crud.postData(this.addUserForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud').then(()=>{});
    });
  }
}
