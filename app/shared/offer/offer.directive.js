(function() { 

    angular.module('offer').directive('offer', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/shared/offer/offerView.html'
        };
    });
        
})();