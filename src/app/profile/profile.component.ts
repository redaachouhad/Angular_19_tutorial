import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  dummyData: any;
  isEligible: boolean;
  apiData:any;

  constructor(private _sharedData: SharedDataService) {
    this.dummyData = this._sharedData.userData;
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  getData(){
    this._sharedData.getUserData().subscribe(res=> {
      this.apiData = res
    });
  }

  ngOnInit(): void {
    this.getData();
  }


}
