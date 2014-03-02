import {Kettle} from 'kettle.js/kettle';
import {Stowe} from 'stowe.js/stowe';

export class Kitchen {

  constructor(kettle: Kettle, stowe: Stowe) {
    this.kettle = kettle;
    this.stowe = stowe;
  }

  prepareBreakfast() {
    this.kettle.on();
    this.stowe.on();
    this.kettle.off();
    this.stowe.off();
  }
}