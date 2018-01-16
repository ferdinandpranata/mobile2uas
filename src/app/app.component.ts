import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";
import { AuthService } from '../services/Authservice';
import { DBService } from '../services/Dbservice';
import { EventService } from '../services/Eventservice';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  homePage = HomePage;
  loginPage = LoginPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private AuthService : AuthService, private DBService : DBService) {
    platform.ready().then(() => {

      firebase.initializeApp({
        apiKey: "AIzaSyBsTKy-z-PWDOC-L_FRCy1pPelmvf7j4Yw",
        authDomain: "nevent-mobile.firebaseapp.com",
        databaseURL: "https://nevent-mobile.firebaseio.com",
        projectId: "nevent-mobile"
    
      });

      firebase.auth().onAuthStateChanged(user => {
        if(user){
          console.log("MASUKIN");
          this.onLoad(this.homePage);
        }else{
          console.log("PINDAH");
          this.onLoad(this.loginPage);
        }
    });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.rootPage = page;
  }

  isLoginPage(){
    if(this.rootPage == this.loginPage)
    return true;
    else 
    return false;
  }

  logout(){
    this.AuthService.logout();
  }

}

