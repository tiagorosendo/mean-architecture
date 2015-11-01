var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });

    $locationProvider.html5Mode({enabled: true, requireBase: false})
}]);