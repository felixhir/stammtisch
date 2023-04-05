import { Injectable } from '@angular/core';
import { Color } from './color.enum';
import { Value } from './value.enum';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public mapToImage(color: Color): string {
    switch(color) {
      case Color.Acorns:
        return '../../assets/symbols/acorn.png';
      case Color.Bells:
        return '../../assets/symbols/bell.png';
      case Color.Hearts:
        return '../../assets/symbols/heart.png';
      case Color.Leaves:
        return '../../assets/symbols/leaf.png';
      default:
        return '';
    }
  }

  public mapToSymbol(value: Value): string {
    switch (value) {
      case Value.Ace:
        return 'A';
      case Value.Eight:
        return '8';
      case Value.Jack:
        return 'U';
      case Value.King:
        return 'K';
      case Value.Nine:
        return '9';
      case Value.Queen:
        return 'Q';
      case Value.Seven:
        return '7';
      case Value.Ten:
        return '10';
      default:
        return 'error';
    }
  }
}
