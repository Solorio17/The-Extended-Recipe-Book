import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddrecipePage } from "../addrecipe/addrecipe"


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onAddRecipes(){
    this.navCtrl.push(AddrecipePage)
  }
}
