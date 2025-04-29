import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-structural-directive-ng-switch-vs-switch',
    imports: [
        FormsModule,
    ],
  templateUrl: './structural-directive-ng-switch-vs-switch.component.html',
  styleUrl: './structural-directive-ng-switch-vs-switch.component.scss'
})
export class StructuralDirectiveNgSwitchVsSwitchComponent {
  color: string = 'red';
  userRole: string = 'admin';

}
