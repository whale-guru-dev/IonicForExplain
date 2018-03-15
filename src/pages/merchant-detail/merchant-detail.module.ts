import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantDetailPage } from './merchant-detail';

@NgModule({
  declarations: [
    MerchantDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantDetailPage),
  ],
})
export class MerchantDetailPageModule {}
