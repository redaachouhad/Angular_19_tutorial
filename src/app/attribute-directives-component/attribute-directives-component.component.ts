import { Component } from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-attribute-directives-component',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './attribute-directives-component.component.html',
  styleUrl: './attribute-directives-component.component.scss'
})
export class AttributeDirectivesComponentComponent {
  // 1
  textColor: string = 'text-success';

  changeColor(color: string) {
    this.textColor = color;
  }

//   2
  isTextGreen: boolean = false;
  changeIsTextGreen(boolColor: boolean){
    this.isTextGreen = boolColor;
  }

//   3
  userClass: string = '';

  // 4
  styleColor: string = 'blue';
  updateColor(textWarning: string) {
    this.styleColor = textWarning;
  }

//   5
  customClass: any = {
    'color': 'pink',
    'height': '150px',
    'width': '400px',
    'border': '1px solid black',
  }
}
