import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Onion Latke', 'This is latke. Not sure what it is.',
      'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg'),
    new Recipe('Potato Latke', 'This is also latke.',
      'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
