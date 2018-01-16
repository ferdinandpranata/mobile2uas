import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DBService } from '../../services/Dbservice';

/**
 * Generated class for the ProfilEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil-edit',
  templateUrl: 'profil-edit.html',
})
export class ProfilEditPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private dbService:DBService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilEditPage');
  }

  updateProfil(form){
    console.log("asdf",form.value.name)
    let a = this.dbService.updateData(form.value.name,'https://firebasestorage.googleapis.com/v0/b/nevent-mobile.appspot.com/o/NeventTrans.png?alt=media&token=064b0a52-705a-45a1-9215-c153ea759950');
    console.log("ini a",a);
  }

}
