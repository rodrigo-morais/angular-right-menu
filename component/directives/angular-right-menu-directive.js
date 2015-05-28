var rmMenuDirective = () => {
    

    let html = 'component/templates/angular-right-menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/menu/css/menu.css',
        replace: true,
        scope: {
            title: '@'
        },
        controller: rmMenuController,
        link: function (scope, element, attrs, controller) {

            if(!scope.title || scope.title === ''){
                scope.title = 'Menu';
            }

            scope.$on('change-menu', (event, args) => {
                let menu = scope.menus[args.position];
                scope.select(menu);
            });
        }
    };
};

rmMenuDirective.$inject = [];

rmRightMenu.directive('rmMenu', [rmMenuDirective]);