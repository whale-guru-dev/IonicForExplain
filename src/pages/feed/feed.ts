import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ExplorePage } from "../explore/explore";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public testimonialss:Array<Object>;
  public buttonToggle:boolean=false;
  public iconName:string="add-circle";
  testimonials = [
    {
      imageUrl: 'assets/merchant-image/image1.jpg',
      // quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Restaurant King Nasgor',
      rating:5,
      status:'Open Now',
      position: '0.4km',
      availablefrom:'8 am',
      availableto:'10pm'
    },
    {
      imageUrl: 'assets/merchant-image/image2.jpg',
      // quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
      name: 'McDonalds',
      rating:4,
      status:'Close',
      position: '0.3km',
      availablefrom:'8 am',
      availableto:'10pm'
    },
    {
      imageUrl: 'assets/merchant-image/image3.jpg',
      // quote: 'The only skills I have the patience to learn are those that have no real application in life.',
      name: 'Coffee shop',
      rating:3,
      status:'Open Now',
      position: '0.2km',
      availablefrom:'8 am',
      availableto:'10pm'
    },


  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menu.swipeEnable(true);
    this.testimonialss=[];

    for(let i=0;i<2;i++){
      this.testimonialss.push(this.testimonials[i]);
    }
    // this.iconName="add-circle";
  }
  showmore(){
    this.buttonToggle = !this.buttonToggle;
    if(this.buttonToggle){
      this.testimonialss=[];
      for(let i=0;i<this.testimonials.length;i++){
        this.testimonialss.push(this.testimonials[i]);
      }
      this.iconName="remove-circle";
    }else{
      this.testimonialss=[];
      for(let i=0;i<2;i++){
        this.testimonialss.push(this.testimonials[i]);
      }
      this.iconName="add-circle";
    }
    // console.log(this.buttonToggle);
  }
 
  gotoSearch(){
    this.navCtrl.setRoot(ExplorePage);
  }

}