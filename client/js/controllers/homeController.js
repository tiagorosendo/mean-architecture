myApp.controller('homeController', ['$scope', function ($scope) {

    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/angularjs.png",
        link: "http://www.angularjs.org"
    },
    {
        image: "img/mongodb.png",
        link: "http://www.mongodb.com"
    },
    {
        image: "img/nodejs.png",
        link: "http://www.nodejs.org"
    }]
}]);