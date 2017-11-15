
app.controller('tab1Ctrl', function ($scope) {
    $scope.names = ["ShowAll", "Text", "Photos", "Videos"];
    $scope.oldList = ["text1.txt", "text2.txt", "photo1.jpg", "photo2.jpg", "video1.mp4", "video2.mp4"];
    var z = $scope.oldList;
    $scope.update = function () {
        var x = $scope.selectedName;
        if (x === "Text") {
            $scope.newList = [];
            for (var i = 0; i < $scope.oldList.length; i++) {
                var y = $scope.oldList[i];
                if (y.includes(".txt")) {
                    $scope.newList.push(y);
                }
            }
        }
        else if (x === "Photos") {
            $scope.newList = [];
            for (var i = 0; i < $scope.oldList.length; i++) {
                var y = $scope.oldList[i];
                if (y.includes(".jpg")) {
                    $scope.newList.push(y);
                }
            }
        }

        else if (x === "Videos") {
            $scope.newList = [];
            for (var i = 0; i < $scope.oldList.length; i++) {
                var y = $scope.oldList[i];
                if (y.includes(".mp4")) {
                    $scope.newList.push(y);
                }
            }
        }
        else if (x === "ShowAll") {
            $scope.newList = [];
            $scope.newList = $scope.oldList;
        }
    }
});