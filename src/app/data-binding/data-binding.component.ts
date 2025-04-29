import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
    name: string = "Reda Achouhad";
    topic: string = "Data Binding";
    image: string = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=";
    random: string  = "";
    onSave (){
      alert("Saved Successfully");
    }

    onChange(){
      alert("Country has changed successfully");
    }

}
