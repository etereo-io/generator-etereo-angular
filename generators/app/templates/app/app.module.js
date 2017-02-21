(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # Application
   *
   * Main module of the application.
   */
  angular.module('app', [
    'app.core',

    //features
    'app.account',
    'app.landing',
    'app.login',
    'app.content',
    'app.session-transfer',
    'app.ui',
    'app.user-layout',
    'app.utils'

  ]).config(configure).run(init);

  /* @ngInject */
  function configure($logProvider, $locationProvider, $compileProvider, configProvider) {

    /**
     * LOG DEBUG
     */
    $logProvider.debugEnabled(configProvider.get('debug'));

    $locationProvider.hashPrefix('');

    /**
     * SCOPE DEBUGGER
     */
    $compileProvider.debugInfoEnabled(!configProvider.get('isProduction'));

  }

  /* @ngInject */
  function init($log, $rootScope, $state, config, usersService) {

    /**
     * IE SVG HACK
     */
    svg4everybody();

    /**
     * GOOGLE ANALYTICS
     */
    /* jshint ignore:start */
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', config.get('googleAnalyticsCode'), 'auto');
    /* jshint ignore:end */

  }

})();
