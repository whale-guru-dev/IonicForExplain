import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ConnectivityServiceProvider } from "../../providers/connectivity-service/connectivity-service";
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
// import { Geolocation } from 'ionic-native';
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
  // [x: string]: any;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  @ViewChild('map') mapElement: ElementRef;
    lat:any;
    lng:any;
  
   constructor(public navCtrl: NavController, public connectivityService: ConnectivityServiceProvider,private geolocation: Geolocation,public platform: Platform) {
    platform.ready().then(() => {
    });
   }
  //  loadMap() {
  //   this.map = new GoogleMap('map');
  
  //   this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
  //     console.log('Map is ready!');
  //   });
  // }
  ionViewDidLoad(){
      this.getLocationInfo();
   }

  getLocationInfo() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        console.log('getLocationInfo > getCurrentPosition > lat&lng: ', this.lat, this.lng);
    }).catch((error) => {
        // let alert = this.alertCtrl.create({
        //     title: 'Error',
        //     subTitle: 'Error getting location',
        //     message: error.message,
        //     enableBackdropDismiss: false,
        //     buttons: [{
        //         text: 'Goto Myfeed',
        //         handler: data => {
        //             this.navCtrl.setRoot(MyFeed);
        //         }
        //     }]
        // });
        // alert.present();
        console.log('Error getting location('+error.code+ ') : ' + error.message);
    });
  }
}
