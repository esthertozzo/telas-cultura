import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelasCulturaPageRoutingModule } from './telas-cultura-routing.module';

import { TelasCulturaPage } from './telas-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelasCulturaPageRoutingModule
  ],
  declarations: [TelasCulturaPage]
})
export class TelasCulturaPageModule {}
