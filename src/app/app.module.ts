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
import { EventService } from '../services/Eventservice';
<<<<<<< HEAD
import { DatePicker } from '@ionic-native/date-picker';
=======
>>>>>>> b4f7ee9843c59a233dc31d30f3ce9a1890e6460d

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { RegisterEventPage } from '../pages/register-event/register-event';

import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';
import { ProfilEditPage } from '../pages/profil-edit/profil-edit';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    EventDetailPage,
    RegisterEventPage,
    ProfilEditPage  
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
    SignupPage,
    EventDetailPage,
    RegisterEventPage,
    ProfilEditPage 
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
    EventService,
<<<<<<< HEAD
    LocationsProvider,
    DatePicker
=======
    LocationsProvider
>>>>>>> b4f7ee9843c59a233dc31d30f3ce9a1890e6460d
  ]
})
export class AppModule {}
