import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, Platform, ModalController } from 'ionic-angular';
import { map } from 'rxjs/operator/map';
import { RegisterEventPage } from '../register-event/register-event';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController,
    public maps: GoogleMapsProvider,
    public platform: Platform,
    public locations: LocationsProvider, 
    public geoloc: Geolocation,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log("load");
    this.platform.ready().then(() => {
      console.log("masuk");
      this.loadMap();
    });

  }

  loadMap()
  {
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
    let locationsLoaded = this.locations.load();
    console.log("loadMap");

    Promise.all([
      mapLoaded,
      locationsLoaded
    ]).then((result) => {
      console.log("promised");
      let locations = result[1];

      for (let location of locations) {
        this.maps.addMarker(location.Latitude, location.Longitude);
        console.log("marker");
      }

    });
    console.log("udah promise");
  }

   onLocate()
  {
    let mapLoaded = this.maps.showCurLocation();
  }

  showModal()
  {
    let center = this.maps.getCenter(); 
    let modal = this.modalCtrl.create(RegisterEventPage, center);
    modal.present();
  }

}
