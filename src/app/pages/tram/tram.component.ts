import { Component } from '@angular/core';

@Component({
  selector: 'app-tram',
  templateUrl: './tram.component.html',
  styleUrl: './tram.component.scss'
})
export class TramComponent {
  formData = {
    date: '',
    route: '',
    people: 1
  };


  onSubmit(value: any) {
    console.log('Form inviato:', value);

  }
}
