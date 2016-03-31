var app = angular.module('myApp', ['myApp.controller', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'view/home.html',
        controller: 'homeController'
    });
}]);