(function() { 

    angular.module('footer').directive('gdFooter', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/shared/footer/footerview.html'
        };
    });
       
})();