import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../services/Authservice';
import { DBService } from '../services/Dbservice';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    LoginPage,
    ProfilePage,
    SignupPage  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    LoginPage,
    ProfilePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    AuthService,
    DBService,
    LocationsProvider
  ]
})
export class AppModule {}
