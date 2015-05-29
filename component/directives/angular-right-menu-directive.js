var rmMenuDirective = () => {
    

    let html = 'component/templates/angular-right-menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/menu/css/menu.css',
        replace: false,
        scope: {
            title: '@',
            backgroundColor: '@',
            titleBorderBottomColor: '@',
            titleColor: '@',
            items: '=?'
        },
        controller: rmMenuController,
        link: function (scope, element, attrs, controller) {

            if(!scope.title || scope.title === ''){
                scope.title = 'Menu';
            }

            if(!scope.backgroundColor || scope.backgroundColor === ''){
                scope.backgroundColor = '#F5F5F5';
            }

            if(!scope.titleBorderBottomColor || scope.titleBorderBottomColor === ''){
                scope.titleBorderBottomColor = '#f5da55';
            }

            if(!scope.titleColor || scope.titleColor === ''){
                scope.titleColor = '#000000';
            }

            if(!scope.items){
                scope.items = [];
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