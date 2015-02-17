(function() {
    
    angular.module('category').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/:param', {
                templateUrl: '/app/components/category/category-specific/category-specific.html',
                controller: 'RouteCategoryController'
            })
            .otherwise({
                templateUrl: '/app/components/category/category-specific/category-specific.html',
                controller: 'RouteCategoryController'
            });
    }]);
})();