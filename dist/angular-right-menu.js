'use strict';

var rmRightMenu = angular.module('rmRightMenu', []);
angular.module('rmRightMenu').run(['$templateCache', function ($templateCache) {
    'use strict';

    $templateCache.put('component/templates/angular-right-menu.html', '<div class="menu" style="background-color: {{backgroundColor}};">\n' + '    <div class="title">{{title}}</div>\n' + '    <ul>\n' + '        <li\n' + '            data-ng:repeat="menu in menus"\n' + '            data-ng:click="select(menu)"\n' + '        >\n' + '            <a\n' + '                href="{{ menu.link }}"\n' + '                data-ng:class="{\'selected\': menu.selected}"\n' + '            >\n' + '                {{ menu.text }}\n' + '            </a>\n' + '        </li>\n' + '    </ul>\n' + '</div>');
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
        replace: false,
        scope: {
            title: '@',
            backgroundColor: '@'
        },
        controller: rmMenuController,
        link: function link(scope, element, attrs, controller) {

            if (!scope.title || scope.title === '') {
                scope.title = 'Menu';
            }

            if (!scope.backgroundColor || scope.backgroundColor === '') {
                scope.backgroundColor = '#F5F5F5';
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