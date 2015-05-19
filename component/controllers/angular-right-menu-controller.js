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