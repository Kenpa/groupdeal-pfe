(function() { 

    angular.module('thumbnail').directive('productThumbnail', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/shared/thumbnail/thumbnailview.html'
        };
    });
       
})();