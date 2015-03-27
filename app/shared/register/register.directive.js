(function() { 

    angular.module('register').directive('register', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/shared/register/registerView.html'
        };
    });
        
})();