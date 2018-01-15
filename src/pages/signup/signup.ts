import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/Authservice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  userForm: FormGroup;
  AuthService: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('123');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  private initializeForm(){
    this.userForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  signUp(){
    console.log(this.userForm.value)
    this.AuthService.signup(this.userForm.value.email,this.userForm.value.password);
  }
}
