(function() { 

    angular.module('app').directive('searchList', function() {
        return {
            link : function(scope, element, attr) {
                element.mouseover(function() {
                    element.css({'background-color':'#825be3','color':'white'});
                }).mouseout(function() {
                    element.css({'background-color':'#bdbdbd','color':'black'});
                });
            }
        };
    });
       
})();