import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Latke', 'This is latke. Not sure what it is.',
      'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
