'use strict';

import memoryStorage from './memory.js';
import mongoStorage from './mongo.js';

let dataStorageModule = {};

switch( process.env.STORAGE ) {
  case 'mongo':
    dataStorageModule = mongoStorage;
    break;
  default:
    dataStorageModule = memoryStorage;
    break;
}

export default dataStorageModule;
