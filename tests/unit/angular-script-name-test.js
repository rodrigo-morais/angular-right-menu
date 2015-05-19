describe('Unit test to COMPONENT', function() {
  var $compile,
      $rootScope,
      $timeout;

  beforeEach(module('COMPONENT'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

});