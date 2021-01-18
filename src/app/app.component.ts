import { HttpClient } from '@angular/common/http';
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

  constructor() { }

  cardType(type: string) {
    if (type === '🎮')
      return 'Game';
    if (type === '📦')
      return 'Package';
    if (type === '🛠️')
      return 'Utility';
    throw new Error('operation undefined');
  }
}
