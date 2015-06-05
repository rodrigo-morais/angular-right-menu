# angular-right-menu
Component AngularJS to create a menu in right side of page.

[![Build Status](https://travis-ci.org/rodrigo-morais/angular-right-menu.svg?branch=master)](https://travis-ci.org/rodrigo-morais/angular-right-menu)

## Installation

To install witn Bower:

```sh
$ bower install angular-right-menu --save-dev
```

## Dependencies
To use this component is necessary loading the components below:
 - <a href="https://github.com/door3/angular-css">angular-css</a>

## Example

To use this component is need call it in a template to passing menu items that should exist in a controller, directive or another stuff of project where component was installed.

```sh
------- scope -------
$scope.menuItems = [
            {
                "text": "Menu 1",
                link: "/#menu1",
                "selected": true
            },
            {
                "text": "Menu 2",
                "link": "/#menu2",
                "selected": false
            },
            {
                "text": "Menu 3",
                "link": "/#menu3",
                "selected": false
            }
        ];

------ template ------
<rm-menu data-items="menuItems">
</rm-menu>
```

Is possible inform some options to change the style of component.

- `title` - change the title printed on top of the menu. The standard title is Menu.
- `backgroundColor` - change the background color of menu. The standard background color is #F5F5F5.
- `titleBorderBottomColor` - change the color of border from menu title . The standard color is #f5da55.
- `titleColor` - change the color of menu title. The standard color is #000000.
- `itemSelectedColor` - change the color of a menu item selected. The standard color is #000000.
- `itemSelectedBackColor` - change the background color to a menu item selected. The standard color is #FFFAF0.
- `itemSelectedBorderLeft` - change the style and color of left border of a menu item selected. The standard style and color are "solid 2px #f5da55".
- `itemColor` - change the color of a menu item not selected. The standard color is #8c8e87.