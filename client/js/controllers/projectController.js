myApp.controller('projectController', function ($scope, Api) {
    $scope.form = {};
    $scope.customers = [];

    Api.Customer.query({}, function (data) {
        $scope.customers = data;
    });

    $scope.delete = function(customer) {
        Api.Customer.delete({id: customer._id}, function (data) {
            var index = $scope.customers.indexOf(customer);
            $scope.customers.splice(index, 1);
        });
    };

    $scope.addToDatabase = function () {
        Api.Customer.save({}, $scope.form, function () {
            $scope.customers.push($scope.form);
            $scope.form = {};
        })
    }
});