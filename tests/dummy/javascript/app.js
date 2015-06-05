var app = angular.module('myApp', ['door3.css', 'rmRightMenu']);

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