var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'btford.socket-io'
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
        .when('/customer', {
            templateUrl: 'partials/customer.html',
            controller: 'customerController'
        })
        .when('/chat', {
            templateUrl: 'partials/chat.html',
            controller: 'chatController'
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