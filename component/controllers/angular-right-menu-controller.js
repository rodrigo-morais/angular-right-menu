var rmMenuController = ($scope, $css, rmRightMenuCSS) => {
    $scope.select = (item) => {
        $scope.items.forEach(function(_item){
            _item.selected = false;
        });
        item.selected = true;
    };

    $css.bind(rmRightMenuCSS.path, $scope);
};

rmMenuController.$inject = ['$scope', '$css', 'rmRightMenuCSS'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);