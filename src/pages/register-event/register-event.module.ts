import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterEventPage } from './register-event';

@NgModule({
  declarations: [
    RegisterEventPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterEventPage),
  ],
  exports: [
    RegisterEventPage
  ]
})
export class RegisterEventPageModule {}
