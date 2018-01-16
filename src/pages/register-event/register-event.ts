import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register-event',
  templateUrl: 'register-event.html',
})
export class RegisterEventPage {

  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data);
    this.location = navParams.data;
    console.log("loc : " + this.location);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterEventPage');
  }

}
