var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope, $http) {
//     $http({
//         method : "GET",
//         url : "MOCK_DATA.JSON"
//     }).then(function mySuccess(response) {
//         $scope.myWelcome = response.data;
//     }, function myError(response) {
//         $scope.myWelcome = response.statusText;
//     });
// });



app.controller('myCtrl', function($scope, DataService) {
    DataService.getData().then(function(resp){
        $scope.myWelcome = resp.data;
    })
});

app.service('DataService',function($http){
    this.getData = function(){
        return $http.get('MOCK_DATA.JSON');
    }
});