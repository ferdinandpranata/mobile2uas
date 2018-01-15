import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/Authservice';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  constructor(private AuthService : AuthService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signup');
  }

  signUpForm(form){
    console.log(form.value.email + form.value.password+ form.value.Confirmpassword);
    if(form.value.password == form.value.Confirmpassword){
      this.AuthService.signup(form.value.email, form.value.password);
    }
    else{
      console.log("password gak sama");
    }
   }


}



