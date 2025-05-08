import {Component, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {Iuser} from '../iuser';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-update-user',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit{

  userId : { uid: number; } | undefined;
  userData: any;
  updateUserForm: FormGroup;

  constructor(
    private crud: CrudService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateUserForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }


  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id'],
    }
    this.crud.getDataById(this.userId.uid).subscribe(res=>{
      this.userData = res;
      this.updateUserForm.setValue({
        id: this.userData?.id,
        name: this.userData?.name,
        username: this.userData?.username,
        email: this.userData?.email,
      })
    })

  }


  onSubmit() {
    console.log(this.updateUserForm.value);
    this.crud.putDataById(this.updateUserForm.value as Iuser).subscribe(res=>{
      this.router.navigateByUrl('/crud').then(()=>{});
    })
  }

  onCancel() {
    this.router.navigateByUrl('/crud').then(()=>{});
  }
}
