(function() {
    
    angular.module('category').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/:cat', {
                templateUrl: '/app/components/category/category-specific/category-specific.html',
                controller: 'RouteCategoryController'
            })
            .when('/:cat/:idProd', {
                templateUrl: '/app/components/category/product-specific/product-specific.html',
                controller: 'RouteProductController'
            })
            .otherwise({
                templateUrl: '/app/components/category/category-specific/category-specific.html',
                controller: 'RouteCategoryController'
            });
    }]);
})();