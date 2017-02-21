(function() {
  'use strict';

  angular.module('app.core', [
    // Angular modules
    'underscore',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ngSanitize',
    'angularMoment',

    // Cross module dependencies
    'app.config',
    'app.defaultLang'
  ]);

})();
