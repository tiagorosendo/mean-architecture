var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate'
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
        .when('/project', {
            templateUrl: 'partials/project/customerapi.html',
            controller: 'projectController'
        })
        .otherwise({
            redirectTo: '/home'
        });

    $locationProvider.html5Mode({enabled: true, requireBase: false})
}]);

myApp.filter('startFrom', function () {
    return function (data, start) {
        return data.slice(start);
    }
});