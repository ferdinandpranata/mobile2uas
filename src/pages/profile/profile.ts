import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/Authservice';
import { DBService } from '../../services/Dbservice';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService:AuthService, private dbService:DBService) {
  }

  user = this.dbService.getUser();

  ionViewDidLoad() {
    let aaa = this.dbService.updateData("ini admin", "https://www.reestickers.com/images/ree-logo-blue.png");
    this.user = this.dbService.getUser();
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.authService.logout();
  }
}
