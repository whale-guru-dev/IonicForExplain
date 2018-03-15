import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MapPage } from "../map/map";

/**
 * Generated class for the ExplorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  populars = [
    {
      imageUrl: 'assets/merchant-image/image1.jpg',
      // quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Restaurant King Nasgor',
      rating:5,
      status:'Open Now',
      position: '0.4km',
      availablefrom:'8 am',
      availableto:'10pm',
      place:'JI,Jayaraya No. 45 Jemberaya Wetan',
      type:'Restaurant'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menu.swipeEnable(true);
  }

  gotoMapp(){
    this.navCtrl.setRoot(MapPage);
  }

}
