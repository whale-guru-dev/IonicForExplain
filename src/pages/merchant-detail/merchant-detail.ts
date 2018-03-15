import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides, MenuController } from 'ionic-angular';
import { MerchantsPage } from "../merchants/merchants";
import { ExplorePage } from "../explore/explore";

/**
 * Generated class for the MerchantDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-merchant-detail',
  templateUrl: 'merchant-detail.html',
})
export class MerchantDetailPage {
  public merchant:Object;
  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/slide-image/portfolio4.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/slide-image/portfolio2.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/slide-image/portfolio3.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/slide-image/portfolio4.png',
      description: 'Take a look at our amazing options',
    }
  ];
  populars = [
    {
      title: 'Nasgor King Sambel Pedas',
      imageUrl: 'assets/slide-image/portfolio4.png',
      price:400,
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Nasi Telur Legend',
      imageUrl: 'assets/slide-image/portfolio2.png',
      price:700,
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/slide-image/portfolio3.png',
      price:900,
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/slide-image/portfolio4.png',
      price:600,
      description: 'Take a look at our amazing options',
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,public menu: MenuController) {
    this.menu.swipeEnable(true);
    this.merchant=navParams.get('param1');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
 }

 onSlideChanged() {
  this.slideIndex = this.slider.getActiveIndex();
  // console.log('Slide changed! Current index is', this.slideIndex);
 }
 seeAll(){
   this.navCtrl.setRoot(MerchantsPage);
 }

 gotoSearch(){
   this.navCtrl.setRoot(ExplorePage);
 }

}
