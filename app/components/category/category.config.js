(function() {
    
    angular.module('category').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/category/:param', {
                templateUrl: '/app/components/category/category.html',
                controller: 'RouteController'
            });
    }]);
})();