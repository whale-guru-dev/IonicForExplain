import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, MenuController } from 'ionic-angular';
import { PostDataServiceProvider } from '../../services/postDataService';
import { LoginPage } from '../login/login';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
})
export class RegisterPage {
  responseData :any;
  fbuser:Object;
  userData={"email":"","username":"","password":"","family_name":"","last_name":"","mobile":"","profile_photo":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook,
     public loadingCtrl:LoadingController, public toastCtrl:ToastController, public postService: PostDataServiceProvider,public alertCtrl: AlertController,public menu: MenuController) {
      this.menu.swipeEnable(false);


  }

  register(){
    let loading = this.loadingCtrl.create({
      content:"Please Wait..."
    });
    loading.present();
    if(this.navParams.get('param1')){
      this.fbuser=this.navParams.get('param1');
      this.userData.email=this.fbuser["email"];
      this.userData.family_name=this.fbuser["first_name"];
      this.userData.last_name=this.fbuser["last_name"];
      this.userData.profile_photo=this.fbuser["picture"];
    }
    this.postService.postData(this.userData, "create").then((result)=>{
      loading.dismiss();
     if (Object(result).status=="success"){
      localStorage.setItem('userData', JSON.stringify(this.responseData))
      this.navCtrl.setRoot(LoginPage);
      let toast = this.toastCtrl.create({
        message:"SingUp Success!",
        duration:2000
      }).present();
     } else{
       let toast = this.toastCtrl.create({
         message:"SignUp Failed!",
         duration:2000
       }).present();
     }
    }, (err) =>{
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message:"No Network",
        duration:2000
      }).present();

    });
  }

  doFabRegister(){
    let loading = this.loadingCtrl.create({
      content:"Please Wait..."
    });
    loading.present();
    var that=this;
    let permissions = new Array<string>();
    let nav = this.navCtrl;
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
        //   gender: user.gender,
        //   picture: user.picture,
        //   email:user.email
        // })
        // .then(function(){
          that.userData.email=user.email;
          that.userData.family_name=user.first_name;
          that.userData.last_name=user.last_name;
          that.userData.profile_photo=user.picture;
          const alert = that.alertCtrl.create({
            title: 'Facebook Register',
            message: 'Enter a username and password to register with Facebook',
            inputs: [
              {
                name: 'username',
                type:'text',
                placeholder: 'username'
              },
              {
                name: 'mobile',
                type: 'number',
                placeholder: 'Mobile'
              },
              {
                name: 'password',
                type: 'password',
                placeholder: 'password'
              },
              {
                name: 'confirm_pass',
                type: 'password',
                placeholder: 'Confirm password'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: (data: any) => {
                  that.navCtrl.setRoot(RegisterPage);
                }
              },
              {
                text: 'Register',
                handler: (data: any) => {
                  if(data.password==data.confirm_pass){
                  let loading = that.loadingCtrl.create({
                    content:"Please Wait..."
                  });
                  loading.present();
                  that.userData.username=data.username;
                  that.userData.password=data.password;
                  that.userData.mobile=data.mobile;
                  that.postService.postData(that.userData, "fbcreate").then((result)=>{
                    loading.dismiss();
                   if (Object(result).status=="success"){
                    localStorage.setItem('userData', JSON.stringify(that.responseData))
                    that.navCtrl.push(LoginPage);
                    let toast = that.toastCtrl.create({
                      message:"SingUp Success!",
                      duration:2000
                    }).present();
                   } else{
                     let toast = that.toastCtrl.create({
                       message:"SignUp Failed!",
                       duration:2000
                     }).present();
                   }
                  }, (err) =>{
                    loading.dismiss();
                    let toast = that.toastCtrl.create({
                      message:"No Network",
                      duration:2000
                    }).present();
              
                  });}
                }
              }
            ]
          });
      
          alert.present();
          loading.dismiss();
        // }, function (error) {
        //   console.log(error);
        // })
      })
    }, function(error){
      console.log(error);
    });
  }
}
