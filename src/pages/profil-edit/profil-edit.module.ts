import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilEditPage } from './profil-edit';

@NgModule({
  declarations: [
    ProfilEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilEditPage),
  ],
  exports: [
    ProfilEditPage
  ]
})
export class ProfilEditPageModule {}
