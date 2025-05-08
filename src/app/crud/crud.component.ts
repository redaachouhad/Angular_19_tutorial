import {Component, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {Iuser} from '../iuser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit{
  apiData: Iuser[] = [];
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
