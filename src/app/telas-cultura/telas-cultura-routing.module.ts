import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelasCulturaPage } from './telas-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: TelasCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelasCulturaPageRoutingModule {}
