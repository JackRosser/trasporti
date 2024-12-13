import { iMezzo } from './../interfaces/i-mezzo';
import { MezziService } from './../services/mezzi.service';
import { Component } from '@angular/core';
import { TratteService } from '../services/tratte.service';
import { StatomezzoService } from '../services/statomezzo.service';
import { iTratta } from '../interfaces/i-tratta';

@Component({
  selector: 'app-test-cipo',
  templateUrl: './test-cipo.component.html',
  styleUrl: './test-cipo.component.scss',
})
export class TestCipoComponent {
  constructor(
    private tratteSvc: TratteService,
    private mezzoSvc: MezziService,
    private statoMezziSvc: StatomezzoService
  ) {}

  private mezzo1!: iMezzo;
  private tratta!: iTratta;
  ngOnInit() {
    this.mezzoSvc.getMezzi().subscribe((res) => {
      this.mezzo1 = res[0];
    });

    this.tratteSvc.getTratte().subscribe((res) => {
      this.tratta = res[0];
    });
  }

  public mettiInServizio() {
    this.statoMezziSvc
      .createServizio(this.mezzo1.id, this.tratta.id)
      .pipe((res) => {
        console.log('siamo qua');
        console.log(res);

        return res;
      })
      .subscribe((res) => {
        console.log('SIamoqua');
      });
  }
  public mettiInManutenzione() {
    this.statoMezziSvc
      .createManutenzione(this.mezzo1.id, 'Cambio gomme')
      .pipe((res) => {
        console.log('siamo qua');
        console.log(res);

        return res;
      })
      .subscribe((res) => {
        console.log('SIamoqua');
      });
  }
}
