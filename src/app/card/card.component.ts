import { Component } from '@angular/core';
import { Card } from '../card';
import { Value } from './value.enum';
import { Color } from './color.enum';
import { CARDS } from './stack-cards';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public cardService: CardService) {
  } 

  card: Card = {
    color: Color.Acorns,
    value: Value.Jack
  };

  stack = CARDS;

  get color(): Color {
    return this.card.color;
  }

  get value(): Value {
    return this.card.value;
  }

}
