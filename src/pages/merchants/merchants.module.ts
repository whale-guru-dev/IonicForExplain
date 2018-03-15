import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantsPage } from './merchants';

@NgModule({
  declarations: [
    MerchantsPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantsPage),
  ],
})
export class MerchantsPageModule {}
