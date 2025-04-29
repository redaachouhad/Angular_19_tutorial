import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [
    NgForOf,
    FormsModule

  ],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss'
})
export class StructuralDirectiveNgforVsForComponent {
  employees: any[] = [
      {empName: 'John', empNumber: 101, empEmail: 'john@gmail.com', empDept: 'IT'},
      {empName: 'Bob', empNumber: 102, empEmail: 'bob@gmail.com', empDept: 'HR'},
      {empName: 'Peter', empNumber: 103, empEmail: 'peter@gmail.com', empDept: 'QA'},
  ];

  companyList: string[] = ['Atos', 'Capgemini', 'Accenture', 'TCS'];
}
