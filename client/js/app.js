var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/home'
        });

    $locationProvider.html5Mode({enabled: true, requireBase: false})
}]);