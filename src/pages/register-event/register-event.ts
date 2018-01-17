import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventService} from '../../services/Eventservice'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService:EventService) {
    console.log(navParams.data);
    this.location = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterEventPage');
  }

  eventForm(form){
      console.log(form);
      console.log(form.value.timeofevent +form.value.contact+ form.value.name + form.value.description + form.value.dateofevent + this.location.lat() + this.location.lng());
      this.eventService.writeUserData(form.value.timeofevent.toString() ,form.value.contact.toString() ,form.value.dateofevent ,form.value.description,this.location.lat(),this.location.lng(),form.value.name);
    
  }



   // this.newEvent = {Category:"Party",Creator:"j9k7BQFaUKOqk0YQjohZauFypXJ2",Date:"12/12/2012",Description:"Pesta ulang tahun",Latitude:"-6.25759923",Longitude:"106.61879003",Name:"Pesta ulang tahun"};
            // this.EventService. writeUserData("category", "creator", "date", "description",-6.2552636,-6.2552636, "nama")
            // this.EventService.storeList(token);

}

