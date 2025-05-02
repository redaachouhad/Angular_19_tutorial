import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {of} from 'rxjs';
import {CustomPipe} from '../custom.pipe';
import {PurePipe} from '../pure.pipe';
import {ImpurePipe} from '../impure.pipe';

@Component({
  selector: 'app-build-in-pipes',
  imports: [CommonModule, CustomPipe, PurePipe, ImpurePipe],
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.scss'
})
export class BuildInPipesComponent {
  angularPipes: string = "use Pipes to format data in angular templates";
  personData = {
    name: "John",
    age: 25,
    city: "Paris",
  };
  currentDate: Date = new Date();
  items = of(['Apple', 'Banana', 'Orange']);
  mobile: any = 4846464684646464;
}
