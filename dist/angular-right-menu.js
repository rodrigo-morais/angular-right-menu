var rmRightMenu = angular.module('rmRightMenu', []);
angular.module('rmRightMenu').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('component/templates/angular-right-menu.html',
    "<div class=\"menu\">\r" +
    "\n" +
    "    <div class=\"title\">\r" +
    "\n" +
    "        Menu\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "        <li\r" +
    "\n" +
    "            data-ng:repeat=\"menu in menus\"\r" +
    "\n" +
    "            data-ng:click=\"select(menu)\"\r" +
    "\n" +
    "        >\r" +
    "\n" +
    "            <a\r" +
    "\n" +
    "                href=\"{{ menu.link }}\"\r" +
    "\n" +
    "                data-ng:class=\"{'selected': menu.selected}\"\r" +
    "\n" +
    "            >\r" +
    "\n" +
    "                {{ menu.text }}\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>"
  );

}]);

var rmMenuController = ($scope) => {
    $scope.menus = [
        {
            text: 'Add Spent',
            link: '/#spent',
            selected: true
        },
        {
            text: 'Daily Spendings',
            link: '/#daily',
            selected: false
        },
        {
            text: 'Monthly Spendings',
            link: '/#monthly',
            selected: false
        }
    ];

    $scope.select = (menu) => {
        $scope.menus.forEach(function(_menu){
            _menu.selected = false;
        });
        menu.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

export default rmMenuController;
import rmMenuController from "components/menu/controllers/rmMenuController";

var rmMenuDirective = () => {
    

    let html = 'app/components/menu/templates/menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/menu/css/menu.css',
        replace: true,
        controller: rmMenuController,
        link: function (scope, element, attrs, controller) {
            scope.$on('change-menu', (event, args) => {
                let menu = scope.menus[args.position];
                scope.select(menu);
            });
        }
    };
};

rmMenuDirective.$inject = [];

export default rmMenuDirective;