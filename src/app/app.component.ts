import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UserComponent} from './user/user.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {DirectivesComponent} from './directives/directives.component';
import {
  StructuralDirectiveNgifVsIfComponent
} from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import {
  StructuralDirectiveNgforVsForComponent
} from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import {
  StructuralDirectiveNgSwitchVsSwitchComponent
} from './structural-directive-ng-switch-vs-switch/structural-directive-ng-switch-vs-switch.component';
import {
  AttributeDirectivesComponentComponent
} from './attribute-directives-component/attribute-directives-component.component';
import {SignalsComponent} from './signals/signals.component';
import {LinkedSignalsComponent} from './linked-signals/linked-signals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, DataBindingComponent, DirectivesComponent, StructuralDirectiveNgifVsIfComponent, StructuralDirectiveNgforVsForComponent, StructuralDirectiveNgSwitchVsSwitchComponent, AttributeDirectivesComponentComponent, SignalsComponent, LinkedSignalsComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello Neighbour';
}
