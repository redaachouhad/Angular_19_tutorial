import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../crud.service';
import {Iuser} from '../iuser';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-view-user',
  imports: [
    JsonPipe
  ],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit{

  userData: Iuser | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.crud.getDataById(this.activatedRoute.snapshot.params['id']).subscribe(res=>{
      this.userData = res;
    });
  }


  onClose() {
    this.router.navigateByUrl('/crud');
  }
}
