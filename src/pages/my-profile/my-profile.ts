import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menu.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

}
