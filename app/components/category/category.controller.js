(function() {
    angular.module('category').controller("RouteCategoryController", function($scope, $routeParams) {
        $scope.routeCat = $routeParams.param;
        switch($routeParams.param) {
            case 'hightech':
                 $scope.labelCat = 'High-Tech';
                 break;
            case 'voyage':
                 $scope.labelCat = 'Voyages';
                 break;
            case 'loisirs':
                 $scope.labelCat = 'Loisirs';
                 break;
            case 'electromenager':
                 $scope.labelCat = 'Electroménager';
                 break;
            case 'mode':
                 $scope.labelCat = 'Mode';
                 break;
                
            default:
        }
       
    });
})();