import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthService } from '../../services/Authservice';
import { DBService } from '../../services/Dbservice';
import { ProfilEditPage } from '../../pages/profil-edit/profil-edit'
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
  

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, private authService:AuthService, private dbService:DBService) {
  }

  user = this.dbService.getUser();
  ionViewWillEnter(){ this.user = this.dbService.getUser();
    console.log(this.user[0],this.user[1],this.user[2])
    if(this.user[0]==null){
      console.log(this.user[0],this.user[1],this.user[2])
      this.dbService.updateData(this.user[1],'https://firebasestorage.googleapis.com/v0/b/nevent-mobile.appspot.com/o/NeventTrans.png?alt=media&token=064b0a52-705a-45a1-9215-c153ea759950') 
      this.user = this.dbService.getUser();
      console.log(this.user)
    }}
    
    
  ionViewDidLoad() {
    // let aaa = this.dbService.updateData("ini admin", "https://www.reestickers.com/images/ree-logo-blue.png");
    this.user = this.dbService.getUser();
    console.log(this.user[0],this.user[1],this.user[2])
    if(this.user[0]==null){
      console.log(this.user[0],this.user[1],this.user[2])
      this.dbService.updateData(this.user[1],'https://firebasestorage.googleapis.com/v0/b/nevent-mobile.appspot.com/o/NeventTrans.png?alt=media&token=064b0a52-705a-45a1-9215-c153ea759950') 
      this.user = this.dbService.getUser();
    }
    console.log('ionViewDidLoad ProfilePage');
  }

  showModal()
  {
    let modal = this.modalCtrl.create(ProfilEditPage);
    modal.present();
  }

  logout(){
    this.authService.logout();
  }
}
