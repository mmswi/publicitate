// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Nav from '../_modules/navigation/navigation';

$(() => {
  new Nav();
  console.log('Welcome to Yeogurt!');
});
