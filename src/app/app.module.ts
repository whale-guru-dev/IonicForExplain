import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { FeedPage } from "../pages/feed/feed";
import { MerchantsPage } from "../pages/merchants/merchants";
import { HistoryPage } from "../pages/history/history";
import { MyProfilePage } from "../pages/my-profile/my-profile";
import { ExplorePage } from "../pages/explore/explore";
import { MerchantDetailPage } from "../pages/merchant-detail/merchant-detail";
import { MapPage } from "../pages/map/map";
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse  } from '@ionic-native/facebook';
import { PostDataServiceProvider } from '../services/postDataService';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    FeedPage,
    ExplorePage,
    MerchantsPage,
    HistoryPage,
    MyProfilePage,
    MerchantDetailPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUGoPkz8mzqB-YpiQdyk0wImvr5jYmJMw'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    FeedPage,
    ExplorePage,
    MerchantsPage,
    HistoryPage,
    MyProfilePage,
    MerchantDetailPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    NativeStorage,
    Facebook,
    PostDataServiceProvider
  ]
})
export class AppModule {}
