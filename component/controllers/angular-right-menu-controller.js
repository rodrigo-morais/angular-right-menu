var rmMenuController = ($scope) => {
    $scope.select = (item) => {
        $scope.items.forEach(function(_item){
            _item.selected = false;
        });
        menu.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);