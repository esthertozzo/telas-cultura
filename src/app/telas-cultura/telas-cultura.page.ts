import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-telas-cultura',
  templateUrl: './telas-cultura.page.html',
  styleUrls: ['./telas-cultura.page.scss'],
  standalone: false,
})
export class TelasCulturaPage implements OnInit {

  constructor(public ar: ActivatedRoute, public router: Router) { }
  
  temp1: any;
  temp2: any;
  temp3: any;
  temp4: any;
  media: any;
  culturas: any;
  msgFinal: any;


  ngOnInit() {
    this.temp1 = this.ar.snapshot.paramMap.get('t1');
    this.temp2 = this.ar.snapshot.paramMap.get('t2');
    this.temp3 = this.ar.snapshot.paramMap.get('t3');
    this.temp4 = this.ar.snapshot.paramMap.get('t4');
    this.media = this.ar.snapshot.paramMap.get('m');
    this.culturas = this.ar.snapshot.paramMap.get('c');
    this.msgFinal = this.ar.snapshot.paramMap.get('mF');
  }

  voltar(){
    this.router.navigateByUrl('/');
  }

}
