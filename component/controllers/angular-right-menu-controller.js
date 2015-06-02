var rmMenuController = ($scope) => {
    $scope.select = (item) => {
        $scope.items.forEach(function(_item){
            _item.selected = false;
        });
        item.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

rmRightMenu.controller('rmMenuController', [rmMenuController]);