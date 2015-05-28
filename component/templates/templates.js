angular.module('rmRightMenu').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('component/templates/angular-right-menu.html',
    "<div class=\"menu\" style=\"background-color: {{backgroundColor}};\">\n" +
    "    <div class=\"title\">{{title}}</div>\n" +
    "    <ul>\n" +
    "        <li\n" +
    "            data-ng:repeat=\"menu in menus\"\n" +
    "            data-ng:click=\"select(menu)\"\n" +
    "        >\n" +
    "            <a\n" +
    "                href=\"{{ menu.link }}\"\n" +
    "                data-ng:class=\"{'selected': menu.selected}\"\n" +
    "            >\n" +
    "                {{ menu.text }}\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );

}]);
