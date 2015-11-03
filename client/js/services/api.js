myApp.factory('Api', function($resource) {
    return {
        Customer: $resource('/api/customers/:id', {id: '@id'})
    }
});