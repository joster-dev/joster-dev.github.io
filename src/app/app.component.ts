import { Component } from '@angular/core';
import { Card } from './card.interface';
import { cards } from './cards.const';
import { IconModule } from '@joster-dev/icon';
import { ChaosControlModule } from '@joster-dev/chaos-control';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jo-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IconModule,
    ChaosControlModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchTerm: string | null = null;

  constructor() { }

  get filteredCards(): Card[] {
    const term = (this.searchTerm || '').toLowerCase();
    return cards.filter(card =>
      term === ''
      || card.title.toLowerCase().includes(term)
      || card.type.toLowerCase().includes(term)
    );
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
