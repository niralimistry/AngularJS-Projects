var App = angular.module("myApp", []);
App.controller('mainCtrl', function ($scope, $rootScope) {
    $scope.$on('EventName', function (abc, args) {
        $scope.message = args.message;
    })
    $scope.handleEvent1 = function(msg1) {
        $scope.$broadcast('EventName1', {message: msg1})
    };
});
App.controller('SecondCtrl', function ($scope, $rootScope) {
    $scope.handleEvent = function(msg) {
        $scope.$emit('EventName', {message: msg})
    };
    $scope.$on('EventName1', function (xyz, args1) {
        $scope.message1 = args1.message1;
    })
    $scope.$on('EventName2', function (xyz, args2) {
        $scope.message2 = args2.message2;
    })
});
App.controller('thirdCtrl', function ($scope, $rootScope) {
    $scope.handleEvent2 = function(msg2) {
        $rootScope.$broadcast('EventName2', {message2: msg2})
    };
});