var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "mainCtrl"
    })
        .when("/Employee", {
            templateUrl: "empList.html",
        })
        .when("/addUser", {
            templateUrl: "addUser.html",
            controller: "addUserCtrl"
        })
});

app.service('DataService', function ($http) {
    this.getData = function () {
        return $http.get('empList.json');
    }
    this.mainVm;
    this.data;
    this.editIndex;
    this.editrow;
});

app.controller('employeeCtrl', function ($scope, DataService, $location) {

    DataService.getData().then(function (resp) {
        DataService.mainVm = resp.data;
        $scope.data = DataService.mainVm;
    });

    $scope.add = function () {
        editIndex = "";
        editrow = "";
        $scope.newUser = [];
        $location.path('/addUser');
    };

    $scope.editUser = function (position) {
        console.log("hello");
        editIndex = position;
        editrow = DataService.mainVm[editIndex];
        $location.path('/addUser');
        $scope.newUser = DataService.mainVm[position];
    };

    $scope.deleteUser = function (index) {
        $scope.data.splice(index, 1);
    };
});

app.controller('addUserCtrl', function ($scope, DataService, $location) {
    $scope.save = function () {
        console.log(editrow);
        if(editrow === "") {
            DataService.mainVm.push($scope.newUser);
            $scope.data = DataService.mainVm;
        }
        else {
            DataService.mainVm[editIndex] = $scope.newUser;
            $scope.data = DataService.mainVm;
        }
        $location.path('/Employee');
    }
});

app.controller('mainCtrl', function ($scope, DataService, $location) {

});


