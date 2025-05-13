import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.scss'
})
export class Sibling2Component {
  @Input() sibling2Data!: string;

}
