angular.module('rmRightMenu').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('component/templates/angular-right-menu.html',
    "<div class=\"menu\" style=\"background-color: {{backgroundColor}};\">\r" +
    "\n" +
    "    <div class=\"title\">{{title}}</div>\r" +
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
