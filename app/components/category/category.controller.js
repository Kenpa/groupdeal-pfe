(function() {
    angular.module('category').controller("RouteCategoryController", function($scope, $routeParams) {
        
        // high tech is the default category
        
        if ($routeParams.cat != null)
            $scope.routeCat = $routeParams.cat;
        else
            $scope.routeCat = 'hightech';
        
        switch($routeParams.cat) {
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
    
    angular.module('category').controller("RouteProductController", function($scope, $routeParams) {       
        if ($routeParams.idProd != null)
            $scope.routeProd = $routeParams.idProd;      
    });
    
})();