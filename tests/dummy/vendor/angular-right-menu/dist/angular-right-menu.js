'use strict';

var rmRightMenu = angular.module('rmRightMenu', []);
angular.module('rmRightMenu').run(['$templateCache', function ($templateCache) {
    'use strict';

    $templateCache.put('component/templates/angular-right-menu.html', '<div class="menu" style="background-color: {{backgroundColor}};">\n' + '    <div class="title" style="border-bottom: solid 1px {{titleBorderBottomColor}}; color: {{titleColor}}">{{title}}</div>\n' + '    <ul>\n' + '        <li\n' + '            data-ng:repeat="item in items"\n' + '            data-ng:click="select(item)"\n' + '        >\n' + '            <a\n' + '                href="{{ item.link }}"\n' + '                data-ng:class="{\'selected\': item.selected}"\n' + '                data-ng:style="item.selected && {\'color\': itemSelectedColor, \'background-color\': itemSelectedBackColor, \'border-left\': itemSelectedBorderLeft} || item.selected === false && {\'color\': itemColor}"\n' + '            >\n' + '                {{ item.text }}\n' + '            </a>\n' + '        </li>\n' + '    </ul>\n' + '</div>');
}]);

var rmMenuController = function rmMenuController($scope) {
    $scope.select = function (item) {
        $scope.items.forEach(function (_item) {
            _item.selected = false;
        });
        item.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);
var rmMenuDirective = function rmMenuDirective() {

    var html = 'component/templates/angular-right-menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'vendor/angular-right-menu/dist/assets/angular-right-menu.css',
        replace: false,
        scope: {
            title: '@',
            backgroundColor: '@',
            titleBorderBottomColor: '@',
            titleColor: '@',
            items: '=?',
            itemSelectedColor: '@',
            itemSelectedBackColor: '@',
            itemSelectedBorderLeft: '@',
            itemColor: '@'
        },
        controller: rmMenuController,
        link: function link(scope, element, attrs, controller) {

            if (!scope.title || scope.title === '') {
                scope.title = 'Menu';
            }

            if (!scope.backgroundColor || scope.backgroundColor === '') {
                scope.backgroundColor = '#F5F5F5';
            }

            if (!scope.titleBorderBottomColor || scope.titleBorderBottomColor === '') {
                scope.titleBorderBottomColor = '#f5da55';
            }

            if (!scope.titleColor || scope.titleColor === '') {
                scope.titleColor = '#000000';
            }

            if (!scope.items) {
                scope.items = [];
            }

            if (!scope.itemSelectedColor || scope.itemSelectedColor === '') {
                scope.itemSelectedColor = '#000000';
            }

            if (!scope.itemSelectedBackColor || scope.itemSelectedBackColor === '') {
                scope.itemSelectedBackColor = '#FFFAF0';
            }

            if (!scope.itemSelectedBorderLeft || scope.itemSelectedBorderLeft === '') {
                scope.itemSelectedBorderLeft = 'solid 2px #f5da55';
            }

            if (!scope.itemColor || scope.itemColor === '') {
                scope.itemColor = '#8c8e87';
            }

            scope.$on('change-menu', function (event, args) {
                var menu = scope.items[args.position];
                scope.select(menu);
            });
        }
    };
};

rmMenuDirective.$inject = [];

rmRightMenu.directive('rmMenu', [rmMenuDirective]);