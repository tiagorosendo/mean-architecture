myApp.controller('chatController', function ($scope, Socket) {
    Socket.connect();
    $scope.$on('$locationChangeStart', function (event) {
        Socket.disconnect(true);
    })
});