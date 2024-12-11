import { Component } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.scss'
})
export class BusComponent {
  formData = {
    date: '',
    route: '',
    people: 1
  };


  onSubmit(value: any) {
    console.log('Form inviato:', value);

  }
}
