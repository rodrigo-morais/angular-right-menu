var app = angular.module('myApp', ['door3.css', 'rmRightMenu']);

app.config(["rmRightMenuCSSProvider", function(rmRightMenuCSSProvider){
  rmRightMenuCSSProvider.setCSSPath('vendor-test/angular-right-menu/dist/assets/angular-right-menu.css');
}]);

(function(){
    'use strict';

    var controllerId = 'AppController';

    app.controller(controllerId, ['$scope', controller]);

    function controller($scope){
        $scope.items = [
            {
                "text": "Add Spent",
                link: "/#spent",
                "selected": true
            },
            {
                "text": "Daily Spendings",
                "link": "/#daily",
                "selected": false
            },
            {
                "text": "Monthly Spendings",
                "link": "/#monthly",
                "selected": false
            }
        ]
    };
})();