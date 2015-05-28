'use strict';

var rmRightMenu = angular.module('rmRightMenu', []);
angular.module('rmRightMenu').run(['$templateCache', function ($templateCache) {
    'use strict';

    $templateCache.put('component/templates/angular-right-menu.html', '<div class="menu">\r' + '\n' + '    <div class="title">{{title}}</div>\r' + '\n' + '    <ul>\r' + '\n' + '        <li\r' + '\n' + '            data-ng:repeat="menu in menus"\r' + '\n' + '            data-ng:click="select(menu)"\r' + '\n' + '        >\r' + '\n' + '            <a\r' + '\n' + '                href="{{ menu.link }}"\r' + '\n' + '                data-ng:class="{\'selected\': menu.selected}"\r' + '\n' + '            >\r' + '\n' + '                {{ menu.text }}\r' + '\n' + '            </a>\r' + '\n' + '        </li>\r' + '\n' + '    </ul>\r' + '\n' + '</div>');
}]);

var rmMenuController = function rmMenuController($scope) {
    $scope.menus = [{
        text: 'Add Spent',
        link: '/#spent',
        selected: true
    }, {
        text: 'Daily Spendings',
        link: '/#daily',
        selected: false
    }, {
        text: 'Monthly Spendings',
        link: '/#monthly',
        selected: false
    }];

    $scope.select = function (menu) {
        $scope.menus.forEach(function (_menu) {
            _menu.selected = false;
        });
        menu.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);
var rmMenuDirective = function rmMenuDirective() {

    var html = 'component/templates/angular-right-menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/menu/css/menu.css',
        replace: true,
        scope: {
            title: '@'
        },
        controller: rmMenuController,
        link: function link(scope, element, attrs, controller) {

            if (!scope.title || scope.title === '') {
                scope.title = 'Menu';
            }

            scope.$on('change-menu', function (event, args) {
                var menu = scope.menus[args.position];
                scope.select(menu);
            });
        }
    };
};

rmMenuDirective.$inject = [];

rmRightMenu.directive('rmMenu', [rmMenuDirective]);