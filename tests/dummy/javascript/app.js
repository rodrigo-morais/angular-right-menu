var app = angular.module('myApp', ['COMPONENT']);

(function(){
    'use strict';

    var controllerId = 'JsonController';

    app.controller(controllerId, ['$scope', controller]);

    function controller($scope){
         $scope.styles = styles;
        };
    }


})();