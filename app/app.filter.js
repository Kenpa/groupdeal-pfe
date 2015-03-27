(function() {
    
    angular.module('app').filter('query', function() {
        return function(items, queryTxt) {   
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                
                if (queryTxt.length >= 3) {
                    if (item.title.toLowerCase().indexOf(queryTxt.toLowerCase()) >= 0)
                        filtered.push(item);  
                }
            }
            return filtered;
        };
    });
    
})();