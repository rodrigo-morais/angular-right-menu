var rmRightMenu = angular.module('rmRightMenu', []);
define(['exports', 'module', 'components/menu/controllers/rmMenuController'], function (exports, module, _componentsMenuControllersRmMenuController) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _rmMenuController = _interopRequireDefault(_componentsMenuControllersRmMenuController);

    angular.module('rmRightMenu').run(['$templateCache', function ($templateCache) {
        'use strict';

        $templateCache.put('component/templates/angular-right-menu.html', '<div class="menu">\r' + '\n' + '    <div class="title">\r' + '\n' + '        Menu\r' + '\n' + '    </div>\r' + '\n' + '    <ul>\r' + '\n' + '        <li\r' + '\n' + '            data-ng:repeat="menu in menus"\r' + '\n' + '            data-ng:click="select(menu)"\r' + '\n' + '        >\r' + '\n' + '            <a\r' + '\n' + '                href="{{ menu.link }}"\r' + '\n' + '                data-ng:class="{\'selected\': menu.selected}"\r' + '\n' + '            >\r' + '\n' + '                {{ menu.text }}\r' + '\n' + '            </a>\r' + '\n' + '        </li>\r' + '\n' + '    </ul>\r' + '\n' + '</div>');
    }]);

    var rmRightMenu = angular.module('rmRightMenu', []);
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

    _rmMenuController['default'].$inject = ['$scope'];

    module.exports = _rmMenuController['default'];

    var rmMenuDirective = function rmMenuDirective() {

        var html = 'app/components/menu/templates/menu.html';

        return {
            restrict: 'E',
            templateUrl: html,
            css: 'app/components/menu/css/menu.css',
            replace: true,
            controller: _rmMenuController['default'],
            link: function link(scope, element, attrs, controller) {
                scope.$on('change-menu', function (event, args) {
                    var menu = scope.menus[args.position];
                    scope.select(menu);
                });
            }
        };
    };

    rmMenuDirective.$inject = [];

    module.exports = rmMenuDirective;
});