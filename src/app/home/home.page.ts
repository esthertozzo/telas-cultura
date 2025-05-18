import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(public router: Router) { }

  temp1 = 0;
  temp2 = 0;
  temp3 = 0;
  temp4 = 0;
  media = " ";
  culturas = [
    { nome: 'Espinafre', min: -6, max: 18 },
    { nome: 'Couve', min: -5, max: 25 },
    { nome: 'Alho', min: -5, max: 18 },
    { nome: 'Alface', min: 10, max: 20 },
    { nome: 'Cenoura', min: 10, max: 20 },
    { nome: 'Trigo', min: 12, max: 25 },
    { nome: 'Batata', min: 15, max: 20 },
    { nome: 'Morangos', min: 15, max: 25 },
    { nome: 'Uvas', min: 20, max: 30 },
    { nome: 'Soja', min: 20, max: 30 },
    { nome: 'Arroz', min: 20, max: 35 },
    { nome: 'Cana-de-açúcar', min: 20, max: 32 },
    { nome: 'Cacau', min: 21, max: 32 },
    { nome: 'Gergelim', min: 25, max: 40 },
    { nome: 'Cajueiro', min: 27, max: 39 },
    { nome: 'Palma forrageira', min: 30, max: 42 },
  ];
  msgFinal = "";

  calcular() {
    this.media = ((this.temp1 + this.temp2 + this.temp3 + this.temp4) / 4).toFixed(1);

    let recomendadas = [];

    for (let i = 0; i < this.culturas.length; i++) {
      const cultura = this.culturas[i];
      if (Number(this.media) >= cultura.min && Number(this.media) <= cultura.max) {
        recomendadas.push(cultura.nome);
      }
    }

    if (recomendadas.length > 0) {
      this.msgFinal = `As culturas ideais para a média de temperatura ${this.media}°C são: ${recomendadas.join(', ')}`;
    } else {
      this.msgFinal = `Nenhuma cultura é ideal para a média de temperatura ${this.media}°C`;
    }

    this.router.navigateByUrl(
      `/telas-cultura/${this.temp1}/${this.temp2}/${this.temp3}/${this.temp4}/${this.media}/${this.culturas}/${this.msgFinal}`
    )
  }

}
