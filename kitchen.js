//this one is actually interesting when it comes to paths as I would like to cut off the /src folder
//I guess this is more to how DI is publishing to npm
import {Kettle} from 'kettle/kettle';
import {Stowe} from 'stowe/stowe';

export class Kitchen {

  constructor(kettle: Kettle, stowe: Stowe) {
    this.kettle = kettle;
    this.stowe = stowe;
  }

  function prepareBreakfast() {
    kettle.on();
    stowe.on();
  }
}