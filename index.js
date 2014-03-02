import {Injector} from 'di/injector';

import {Kitchen} from 'kitchen';
import {Electricity} from 'electricity.js/electricity';

var injector = new Injector([]);

var kitchen = injector.get(Kitchen);
var electricity = injector.get(Electricity);

kitchen.prepareBreakfast();
console.log(electricity.getTotalUsage());