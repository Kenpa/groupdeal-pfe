(function() {
    angular.module('category').controller("RouteCategoryController", function($scope, $routeParams) {
        $scope.routeCat = $routeParams.param;
    });
})();