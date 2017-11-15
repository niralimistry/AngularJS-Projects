var app = angular.module("myApp", ["ngRoute","tab1Ctrl","tab2Ctrl","tab3Ctrl"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "tab1.html",
            controller: "tab1Ctrl"
        })
        .when("/tab2", {
            templateUrl: "tab2.html",
            controller: "tab2Ctrl"
        })
        .when("/tab3", {
            templateUrl: "tab3.html",
            controller: "tab3Ctrl"
        });
});