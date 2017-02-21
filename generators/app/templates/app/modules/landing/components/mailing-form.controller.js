(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:MailingFormCtrl
   * @description
   * # MailingFormCtrl
   * A module to manage mailing
   */
  angular.module('app.landing')
    .controller('MailingFormCtrl', MailingFormCtrl);

  /* @ngInject */
  function MailingFormCtrl($log, $scope, $analytics, $translate) {

    var vm = this;

    vm.submit = submit;

    return vm;

    function submit(email) {
      if (!email) {
        return Promise.resolve();
      }

      $analytics.eventTrack('mailing');
    }

  }

})();
