app.controller('tab3Ctrl', function($scope) {
    $scope.oldItems = ["item1", "item2", "item3", "item4"];
    var l = $scope.oldItems;
    $scope.updateList = function() {
        l.pop();
        l.unshift($scope.item);
        $scope.item = "";
    }
});