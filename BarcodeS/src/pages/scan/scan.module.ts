import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanPage } from './scan';

import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    ScanPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPage),
    NgxQRCodeModule
  ],
})
export class ScanPageModule {}
