angular.module('rmRightMenu').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('component/templates/angular-right-menu.html',
    "<div class=\"menu\" style=\"background-color: {{backgroundColor}};\">\n" +
    "    <div class=\"title\" style=\"border-bottom: solid 1px {{titleBorderBottomColor}}; color: {{titleColor}}\">{{title}}</div>\n" +
    "    <ul>\n" +
    "        <li\n" +
    "            data-ng:repeat=\"item in items\"\n" +
    "            data-ng:click=\"select(item)\"\n" +
    "        >\n" +
    "            <a\n" +
    "                href=\"{{ item.link }}\"\n" +
    "                data-ng:class=\"{'selected': item.selected}\"\n" +
    "                data-ng:style=\"item.selected && {'color': itemSelectedColor}\"\n" +
    "            >\n" +
    "                {{ item.text }}\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );

}]);
