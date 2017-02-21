'use strict';

describe('In app.login', function() {
  describe('In login-form.controller', function() {

    var LoginFormCtrl, scope;

    beforeEach(module('app'));
    beforeEach(module('app.const'));
    beforeEach(module('app.config'));
    beforeEach(module('app.login'));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      LoginFormCtrl = $controller('LoginFormCtrl', {
        $scope: scope
      });
    }));

    it('has all expected methods', function() {

      expect(LoginFormCtrl.login).toBeDefined();

    });

  });
});
