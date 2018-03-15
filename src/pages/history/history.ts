import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ExplorePage } from "../explore/explore";
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public userData:Object;
  // public qr_url:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menu.swipeEnable(true);
    this.userData=JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  gotoSearch(){
    this.navCtrl.setRoot(ExplorePage);
  }

}
