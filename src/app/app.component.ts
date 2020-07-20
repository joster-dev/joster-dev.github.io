import { Component } from '@angular/core';
import { cards } from './cards.const';
@Component({
  selector: 'jo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = cards;
  searchTerm: string | null = null;
}
