import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { EventService } from '../../services/Eventservice';
import { AuthService } from '../../services/Authservice';

import { Event } from '../../data/event.interface';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EventDetailPage } from '../event-detail/event-detail';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  EventList: Event[] = [];
  newEvent:Event;
  constructor(public navCtrl: NavController, 
              public locations: LocationsProvider, 
              private AuthService:AuthService,
              private EventService:EventService,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');


    let token = this.AuthService.getActiveUser().getToken().then(
      (token:string) => {
        console.log("token", token)
        this.EventService.loadEventList(token)
        .subscribe(
          (data:any) => {
            console.log("Asd:",data);
            this.EventList = data;
            this.EventService.setInit(data);
            
            // this.newEvent = {Category:"Party",Creator:"j9k7BQFaUKOqk0YQjohZauFypXJ2",Date:"12/12/2012",Description:"Pesta ulang tahun",Latitude:"-6.25759923",Longitude:"106.61879003",Name:"Pesta ulang tahun"};
            // this.EventService. writeUserData("category", "creator", "date", "description",-6.2552636,-6.2552636, "nama")
            // this.EventService.storeList(token);
          },
          error => {
            console.log("asdf");
          }
        );
      }
      );
  }

  showModal(data)
  {
    console.log(data);
    let modal = this.modalCtrl.create(EventDetailPage, data);
    modal.present();
  }

}
