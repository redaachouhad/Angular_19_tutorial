import {Component, OnInit} from '@angular/core';
import {ResourceService} from '../Services/resource.service';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss'
})
export class ResourceApiComponent implements OnInit {

  constructor(private resource: ResourceService) {}

  apiData: any;

  getData(){

    //////using subscribe method:
    // this.resource.getAllData().subscribe(res=>{
    //   this.apiData = res;
    // })

    //////using rxResource().
    // this.apiData = this.resource.rxResourceData;

    //////using resource() with fetch().
    this.apiData = this.resource.resourceData;
  }

  ngOnInit(): void {
    this.getData();
  }
}
