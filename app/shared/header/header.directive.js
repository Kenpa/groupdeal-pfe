(function() { 

    angular.module('header').directive('gdHeader', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/shared/header/headerview.html'
        };
    });
       
})();