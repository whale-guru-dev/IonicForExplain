import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, MenuController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { ExplorePage } from '../explore/explore';
import { PostDataServiceProvider } from '../../services/postDataService';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userData = {"username":"", "password":""};
  FB_APP_ID: number = 492017517839631;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook,public nativeStorage: NativeStorage,
    public postService:PostDataServiceProvider, public loadingCtrl:LoadingController, public toastCtrl:ToastController,public alertCtrl: AlertController,public menu: MenuController
  ) {
    this.menu.swipeEnable(false);
    localStorage.setItem('loginstatus',"false");
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    let loading = this.loadingCtrl.create({
      content:"Please Wait..."
    });
    loading.present();
      
    this.postService.postData(this.userData, "login").then((result)=>{
      loading.dismiss();
      if (Object(result).status=="success"){           
        localStorage.setItem('userData', JSON.stringify(Object(result).user));       
        localStorage.setItem('pass', this.userData.password);
        localStorage.setItem('loginstatus',"true");
        this.navCtrl.setRoot(ExplorePage);
      } else {
        let toast = this.toastCtrl.create({
          message:"Invalid Username or Password",
          duration:2000
        })
        toast.present();
        localStorage.setItem('loginstatus',"false");
      };    
      
    }, (err) =>{
      let toast = this.toastCtrl.create({
        message:"No Network",
        duration:2000
      })
      toast.present();
      loading.dismiss();      
    }); 
  }

  doFablog(){
    let loading = this.loadingCtrl.create({
      content:"Please Wait..."
    });
    loading.present();
    var that=this;
    let permissions = new Array<string>();
    // let nav = this.navCtrl;
	  let env = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile","email"];


    this.fb.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      env.fb.api("/me?fields=first_name,last_name,gender,email", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        // env.nativeStorage.setItem('user',
        // {
        //   first_name: user.first_name,
        //   last_name:user.last_name,
        //   gender: user.gender,g
        //   picture: user.picture,
        //   email:user.email
        // })
        // .then(function(){
          that.userData.username=user.email;
          
          that.postService.postData(that.userData, "fblogin").then((result)=>{
            loading.dismiss();
            if (Object(result).status=="success"){           
              localStorage.setItem('userData', JSON.stringify(Object(result).user));
              localStorage.setItem('loginstatus',"true");       
              that.navCtrl.setRoot(ExplorePage);
            } else {
              localStorage.setItem('loginstatus',"false");
              const alert = that.alertCtrl.create({
                title: 'New User',
                message: 'Do you agree to register with your facebook information?',
                buttons: [
                  {
                    text: 'Disagree',
                    handler: () => {
                      that.navCtrl.setRoot(LoginPage);
                    }
                  },
                  {
                    text: 'Agree',
                    handler: () => {
                      that.navCtrl.setRoot(RegisterPage,{
                        param1:user
                      });
                    }
                  }
                ]
              });
          
              alert.present();
            };    
            
          }, (err) =>{
            let toast = that.toastCtrl.create({
              message:"No Network",
              duration:2000
            })
            toast.present();
            loading.dismiss();      
          }); 
          // nav.push(ExplorePage);
          // console.log(user);
        // }, function (error) {
        //   console.log(error);
        // })
      })
    }, function(error){
      console.log(error);
    });
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
