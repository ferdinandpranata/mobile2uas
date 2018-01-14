import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;
  tab3Root: any = ProfilePage;

  constructor(public navCtrl: NavController) {

  }

}
