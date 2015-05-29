/*jslint es5: true */
/*jshint multistr: true */
describe('Unit test to rmRightMenu', function () {
  var $compile,
      $rootScope,
      $timeout;

  beforeEach(module('rmRightMenu'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  it('Verify when title of menu is not informed if standard title is presented', function () {
    var element = $compile("<rm-menu></rm-menu>")($rootScope),
        menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #f5da55; color: #000000">Menu</div>';

        $rootScope.$digest();
        
        expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when title of menu is informed if correct title is presented', function () {
      var element = $compile("<rm-menu data-title='Test'></rm-menu>")($rootScope),
          menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #f5da55; color: #000000">Test</div>';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when title of menu is not informed if standard title is in scope', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().title).toBe('Menu');
  });

  it('Verify when title of menu is informed if correct title is in scope', function () {
      var element = $compile("<rm-menu data-title='Test'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().title).toBe('Test');
  });

  it('Verify when background color of menu is informed if correct color is in scope', function () {
      var element = $compile("<rm-menu data-background:color='#FFFFFF'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().backgroundColor).toBe('#FFFFFF');
  });

  it('Verify when background color of menu is not informed if correct color is in scope', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().backgroundColor).toBe('#F5F5F5');
  });

  it('Verify when background color of menu is not informed if correct color is presented', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope),
          menuReturn = '<div class="menu" style="background-color: #F5F5F5;">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when background color of menu is informed if correct color is presented', function () {
      var element = $compile("<rm-menu data-background:color='#000000'></rm-menu>")($rootScope),
          menuReturn = '<div class="menu" style="background-color: #000000;">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when title border bottom color of menu is informed if correct color is in scope', function () {
      var element = $compile("<rm-menu data-title-border-bottom:color='#FFFFFF'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().titleBorderBottomColor).toBe('#FFFFFF');
  });

  it('Verify when title border bottom color of menu is not informed if correct color is in scope', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().titleBorderBottomColor).toBe('#f5da55');
  });

  it('Verify when title border bottom color of menu is not informed if correct color is presented', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope),
          menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #f5da55; color: #000000">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when title border bottom color of menu is informed if correct color is presented', function () {
      var element = $compile("<rm-menu data-title-border-bottom:color='#000000'></rm-menu>")($rootScope),
          menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #000000; color: #000000">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });


  it('Verify when title color of menu is informed if correct color is in scope', function () {
      var element = $compile("<rm-menu data-title:color='#FFFFFF'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().titleColor).toBe('#FFFFFF');
  });

  it('Verify when title color of menu is not informed if correct color is in scope', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().titleColor).toBe('#000000');
  });

  it('Verify when title color of menu is not informed if correct color is presented', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope),
          menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #f5da55; color: #000000">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when title color of menu is informed if correct color is presented', function () {
      var element = $compile("<rm-menu data-title:color='#FFFFFF'></rm-menu>")($rootScope),
          menuReturn = '<div class="title ng-binding" style="border-bottom: solid 1px #f5da55; color: #FFFFFF">';

      $rootScope.$digest();

      expect(element.html().replace(/(\r\n|\n|\r)/gm, "").replace(/\t+/g, "")).toContain(menuReturn);
  });

  it('Verify when items of menu is informed if correct quantity of items in scope', function () {
      var element = $compile("<rm-menu data-items='[{\"text\": \"Add Spent\",link: \"/#spent\",\"selected\": true},{\"text\": \"Daily Spendings\",\"link\": \"/#daily\",\"selected\": false},{\"text\": \"Monthly Spendings\",\"link\": \"/#monthly\",\"selected\": false}]'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().items.length).toBe(3);
  });

  it('Verify when items of menu is not informed if correct quantity of items in scope', function () {
      var element = $compile("<rm-menu></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().items.length).toBe(0);
  });

  it('Verify when items of menu is informed if first item in scope has correct text', function () {
      var element = $compile("<rm-menu data-items='[{\"text\": \"Add Spent\",link: \"/#spent\",\"selected\": true},{\"text\": \"Daily Spendings\",\"link\": \"/#daily\",\"selected\": false},{\"text\": \"Monthly Spendings\",\"link\": \"/#monthly\",\"selected\": false}]'></rm-menu>")($rootScope);

      $rootScope.$digest();

      expect(element.isolateScope().items[0].text).toBe('Add Spent');
  });

});