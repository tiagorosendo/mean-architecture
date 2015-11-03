myApp.factory('Api', function($resource) {
    return {
        Customer: $resource('/api/customer/:id', {id: '@id'})
    }
});