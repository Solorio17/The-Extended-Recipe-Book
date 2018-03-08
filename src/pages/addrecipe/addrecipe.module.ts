import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddrecipePage } from './addrecipe';

@NgModule({
  declarations: [
    AddrecipePage,
  ],
  imports: [
    IonicPageModule.forChild(AddrecipePage),
  ],
})
export class AddrecipePageModule {}
