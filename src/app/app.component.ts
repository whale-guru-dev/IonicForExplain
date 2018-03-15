import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from "../pages/login/login";
import { FeedPage } from "../pages/feed/feed";
import { ExplorePage } from "../pages/explore/explore";
import { MerchantsPage } from "../pages/merchants/merchants";
import { HistoryPage } from "../pages/history/history";
import { MyProfilePage } from "../pages/my-profile/my-profile";
@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public buttonColor:string ='#F2A207';
  public nav: any;

  public rootPage: any = LoginPage;
  public pages=[
    {
      title: 'Feed',
      icon: 'flash',
      component: FeedPage
    },
    {
      title: 'Explore',
      icon: 'search',
      component: ExplorePage
    },
    {
      title: 'Merchants',
      icon: 'globe',
      component: MerchantsPage
    },
    {
      title: 'QR Code',
      icon: 'filing',
      component: HistoryPage
    },
    {
      title: 'MyProfile',
      icon: 'mail-open',
      component: MyProfilePage
    },
    {
      title: 'Logout',
      icon: 'log-out',
      component: LoginPage
    }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public nativeStorage: NativeStorage,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let env = this;
      localStorage.setItem('loginstatus',"false");
      if(localStorage.getItem('userData')!=null){
        env.nav.setRoot(ExplorePage);
      }
      else 
        env.nav.setRoot(LoginPage);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    if (page.title == "Logout") { localStorage.clear(); }
    this.buttonColor = '#ffffff';
    this.nav.setRoot(page.component);
  }
}

