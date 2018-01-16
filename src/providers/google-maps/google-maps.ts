import { Injectable } from '@angular/core';
import { ConnectivityProvider } from '../connectivity/connectivity'
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EventDetailPage } from '../../pages/event-detail/event-detail';

/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

declare var google;

@Injectable()
export class GoogleMapsProvider {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  infoWindows: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  center: any;
  mapLoadedObserver: any;
  markers: any = [];
  // add your apiKey for GoogleMaps
  // example: apiKey: string = 'ARfdaDE..';
  apiKey: "AIzaSyAdnPwfydBvHl5t49DFVPOpLShCWdZJVpI";

  constructor(public connectivityService: ConnectivityProvider,
              public geolocation: Geolocation,
              public modalCtrl: ModalController) {

  }

  init(mapElement: any, pleaseConnect: any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
    this.infoWindows = [];
    return this.loadGoogleMaps();

  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == "undefined" || typeof google.maps == "undefined") {

        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();

        if (this.connectivityService.isOnline()) {

          window['mapInit'] = () => {

            this.initMap().then(() => {
              resolve(true);
            });

            this.enableMap();
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (this.apiKey) {
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          }

          document.body.appendChild(script);

        }
      }
      else {

        if (this.connectivityService.isOnline()) {
          this.initMap();
          this.enableMap();
        }
        else {
          this.disableMap();
        }

      }

      this.addConnectivityListeners();

    });

  }

  initMap(): Promise<any> {

    this.mapInitialised = true;

    return new Promise((resolve) => {

      this.geolocation.getCurrentPosition().then((position) => {

        // UNCOMMENT FOR NORMAL USE
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        //let latLng = new google.maps.LatLng(40.713744, -74.009056);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          tilt: 45,
          //gestureHandling: "cooperative",
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            }
          ]
        }

        this.map = new google.maps.Map(this.mapElement, mapOptions);
        resolve(true);

      });

    });

  }

  disableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "block";
    }

  }

  enableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "none";
    }

  }

  addConnectivityListeners(): void {

    document.addEventListener('online', () => {

      console.log("online");

      setTimeout(() => {

        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        }
        else {
          if (!this.mapInitialised) {
            this.initMap();
          }

          this.enableMap();
        }

      }, 2000);

    }, false);

    document.addEventListener('offline', () => {

      console.log("offline");

      this.disableMap();

    }, false);

  }

  addMarker(lat: number, lng: number, locationData): void {
    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindowToMarker(marker, locationData);
    this.markers.push(marker);
    
  }

  // =================================================== CUR CODES =================================================================//

  addCurMarker(lat: number, lng: number): void 
  {
    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.markers.push(marker);
  }

  addInfoWindow(marker, text){
    var infowindow = new google.maps.InfoWindow({
      content:text
      });
    
    infowindow.open(this.map,marker);
  }

  addInfoWindowToMarker(marker, locationData) {
    var infoWindowContent = 
        "<div id='content'><p>" + locationData.Name + "</p></div>" + 
        "<div><p>" + locationData.Date + "</p></div>" +
        "<button class='button' id='myid' style='padding:3px; background:transparent; color:#666; border: solid 0.5px #aaa; border-radius:3px;'>Info</button>";
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('myid').addEventListener('click', () => {
      this.showModal(locationData);
      });
      });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow); 
   
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  getCenter()
  {
    return this.map.getCenter();
  }
  
  showModal(data)
  {
    console.log(data);
    let modal = this.modalCtrl.create(EventDetailPage, data);
    modal.present();
  }

  showCurLocation()
  {
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.setCenter(latLng);

     let infoText = "Lokasi Anda"; 

     var infowindow = new google.maps.InfoWindow({
      content:infoText
      });
      infowindow.setPosition(latLng);
      this.closeAllInfoWindows();
      infowindow.open(this.map);
      setTimeout(function () {
        infowindow.close();
    }, 1500);
    }, (err) => {
      console.log(err);
      });
    
  }
}
