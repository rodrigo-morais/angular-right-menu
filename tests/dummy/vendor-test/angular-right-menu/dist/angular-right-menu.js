'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var rmRightMenu = angular.module('rmRightMenu', []);
angular.module('rmRightMenu').run(['$templateCache', function ($templateCache) {
    'use strict';

    $templateCache.put('component/templates/angular-right-menu.html', '<div class="menu" style="background-color: {{backgroundColor}};">\n' + '    <div class="title" style="border-bottom: solid 1px {{titleBorderBottomColor}}; color: {{titleColor}}">{{title}}</div>\n' + '    <ul>\n' + '        <li\n' + '            data-ng:repeat="item in items"\n' + '            data-ng:click="select(item)"\n' + '        >\n' + '            <a\n' + '                href="{{ item.link }}"\n' + '                data-ng:class="{\'selected\': item.selected}"\n' + '                data-ng:style="item.selected && {\'color\': itemSelectedColor, \'background-color\': itemSelectedBackColor, \'border-left\': itemSelectedBorderLeft} || item.selected === false && {\'color\': itemColor}"\n' + '            >\n' + '                {{ item.text }}\n' + '            </a>\n' + '        </li>\n' + '    </ul>\n' + '</div>');
}]);

var RightMenuCSS = (function () {
    function RightMenuCSS() {
        _classCallCheck(this, RightMenuCSS);

        this.path = 'vendor/angular-right-menu/dist/assets/angular-right-menu.css';
    }

    _createClass(RightMenuCSS, [{
        key: 'setCSSPath',
        value: function setCSSPath(_path) {
            this.path = _path;
        }
    }, {
        key: '$get',

        /*@ngInject*/
        value: function $get() {
            return {
                path: this.path
            };
        }
    }]);

    return RightMenuCSS;
})();

rmRightMenu.provider('rmRightMenuCSS', RightMenuCSS);
var rmMenuController = function rmMenuController($scope, $css, rmRightMenuCSS) {
    $scope.select = function (item) {
        $scope.items.forEach(function (_item) {
            _item.selected = false;
        });
        item.selected = true;
    };

    $css.bind(rmRightMenuCSS.path, $scope);
};

rmMenuController.$inject = ['$scope', '$css', 'rmRightMenuCSS'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);
var rmMenuDirective = function rmMenuDirective() {

    var html = 'component/templates/angular-right-menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        //css: 'vendor/angular-right-menu/dist/assets/angular-right-menu.css',
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

rmRightMenu.directive('rmMenu', [rmMenuDirective]);