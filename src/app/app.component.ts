import { Component } from '@angular/core';
import { Card } from './card.interface';
import { cards } from './cards.const';
@Component({
  selector: 'jo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string | null = null;
  spinDirection: 'x' | 'y' | null = null;

  constructor() { }

  get filteredCards(): Card[] {
    const term = (this.searchTerm || '').toLowerCase();
    return cards.filter(card =>
      term === ''
      || card.title.toLowerCase().includes(term)
      || card.type.toLowerCase().includes(term)
    );
  }

  onClickRing(): void {
    if (this.spinDirection === null)
      this.spinDirection = 'x';
    else if (this.spinDirection === 'x')
      this.spinDirection = 'y';
    else
      this.spinDirection = null;
  }

  cardType(type: string) {
    if (type === '🎲')
      return 'Game';
    if (type === '📦')
      return 'Package';
    if (type === '🛠️')
      return 'Utility';
    throw new Error('operation undefined');
  }
}
