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
    
    angular.module('thumbnail').filter('isHot', function() {
        return function(items) {
            
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                
                if (!item.isHot)
                    filtered.push(item);
                
            }
            return filtered;
        };
    });
    
    
    angular.module('thumbnail').filter('tagsMatch', function() {
        return function(items, idProd) {
            
            var filtered = [];
            for (var i = 0; i < items.length; i++) 
            {
                var item = items[i];  
                var j = 0;
                var notPush = true;
                
                while (j < items[idProd].tags.length && notPush)
                {
                    var k=0;
                    while (k < item.tags.length) {
                        if (items[idProd].tags[j] != item.tags[k])
                            k++;
                        else
                            k = item.tags.length+1
                    }
                    
                    if (k = item.tags.length+1){
                        filtered.push(item);
                        notPush = false;
                    }
                    else
                        j++;
                }              
            }
            return filtered;
        };
    });
    
})();