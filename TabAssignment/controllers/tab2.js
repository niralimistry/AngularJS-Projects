app.controller('tab2Ctrl', function ($scope) {
    $scope.newList = [];
    $scope.images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    $scope.select = function (i) {
        $scope.firstImage = this.images[i];
    }
});