(function() {
    angular.module('category').controller("RouteCategoryController", function($scope, $routeParams) {
        
        // high tech is the default category
        
        if ($routeParams.param != null)
            $scope.routeCat = $routeParams.param;
        else
            $scope.routeCat = 'hightech';
        
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
                 $scope.labelCat = 'High-Tech';
        }
       
    });
})();