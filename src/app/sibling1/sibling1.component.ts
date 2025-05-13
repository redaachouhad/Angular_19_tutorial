import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.scss'
})
export class Sibling1Component {
  @Output() sibling1Event = new EventEmitter<any>();

  onSubmit(value: any) {
    this.sibling1Event.emit(value);
  }
}
