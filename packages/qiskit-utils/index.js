/*
  Copyright IBM Corp. 2017. All Rights Reserved.

  This code may only be used under the Apache 2.0 license found at
  http://www.apache.org/licenses/LICENSE-2.0.txt.

  Authors:
  - Jesús Pérez <jesusper@us.ibm.com>
*/

'use strict';

const path = require('path');

// Lodash as base. TODO: Maybe not needed anymore.
const utils = require('lodash');
const debug = require('debug');
// TODO: Use the native one.
const promisify = require('es6-promisify');

const { version } = require('./package.json');


function pathToTag(fullPath) {
  const res = path.basename(fullPath, '.js');

  if (!res || res === fullPath) {
    throw new Error('Not valid path');
  } else {
    return res;
  }
}


// Exposed stuff.
utils.version = version;
utils.pathToTag = pathToTag;
utils.debug = debug;
utils.promisify = promisify;


module.exports = utils;
