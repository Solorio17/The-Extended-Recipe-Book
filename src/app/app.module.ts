import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppinglistPage } from "../pages/shoppinglist/shoppinglist";
import { RecipesPage } from "../pages/recipes/recipes";
import { AddrecipePage } from "../pages/addrecipe/addrecipe";
import { ShoppingListService } from "../services/shopping-list";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShoppinglistPage,
    RecipesPage,
    AddrecipePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShoppinglistPage,
    RecipesPage,
    AddrecipePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService
  ]
})
export class AppModule {}
