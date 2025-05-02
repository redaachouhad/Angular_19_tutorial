import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  topic: string = "";
  constructor(private router: Router) {
    this.topic = "Angular 19";
    console.log("Constructor called");
  }

  // Lifecycle hooks:




  loginData() {
    // user verification logic
    // this.router.navigateByUrl("/structural-directive");
    this.router.navigate(['structural-directive']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges called.");
  }

  ngOnInit(): void {
  //   use for API call
    console.log("2. ngOnInit called");
  }

  ngDoCheck(): void {
  // used for every change detected.
    console.log("3. ngDoCheck called");
  }

  ngAfterContentInit(): void {
  // use for ng-content
    console.log("4. ngAfterContentInit called");
  }

  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    // use for viewChild.
    console.log("6. ngAfterViewInit called");
  }

  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked called");
  }







}
