(function() { 

    angular.module('thumbnail').directive('productThumbnail', function() {
        return {
            restrict : 'E',
            templateUrl : '/app/components/home/thumbnail/thumbnailview.html'
        };
    });
       
})();