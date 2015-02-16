(function() {
    
    angular.module('thumbnail').filter('category', function() {
        return function(items, category) {
            
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                
                if (item.category === category)
                    filtered.push(item);
                
            }
            return filtered;
        };
    });
    
})();