import {Component, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {Iuser} from '../iuser';
import {Router} from '@angular/router';
import {ReusableComponent} from '../reusable/reusable.component';

@Component({
  selector: 'app-crud',
  imports: [
    ReusableComponent
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit{
  apiData: Iuser[] = [];
  parentProperty: string = "CRUD Operations: Kindly find all users";

  constructor(private crud: CrudService, private router: Router) {
  }

  getAllData(){
    this.crud.getData().subscribe(res=>{
      this.apiData = res;
    })
  }

  ngOnInit(): void {
    this.getAllData();
  }


  addNewUser() {
    this.router.navigateByUrl('/adduser');
  }

  onUpdate(id: number) {
    // /updateuser/:id
    this.router.navigate(['/updateuser', id]);
  }


  onView(id: number) {
    this.router.navigate(['/viewuser', id]);
  }

  onDelete(id: number) {
    this.crud.deleteDataById(id).subscribe(res=>{
      alert('Record Deleted Successfully');
      this.getAllData();
    })
  }
}
