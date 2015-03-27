(function() {
    
    angular.module('productSpecific').factory('AddProductService', function($window, $rootScope,$timeout) {
        if (localStorage.getItem("store-product") === null) {
            store = [];
        }
        else{
            store = JSON.parse(localStorage.getItem('store-product'));
        }
        return {
            getStore: function() {
                return store;
            },
            addProduct: function(product) {
                var ix = 0;
                if (store.length != 0) {
                    for(var i = 0, len = store.length; i < len; i++) { // custom indexOf
                        if (store[i].id == product.id) { 
                            break;
                        }
                        else
                            ix++;
                    }
                    if (ix == store.length)
                        store.push(product);
                }
                else
                    store.push(product);  
                
                localStorage.setItem('store-product', JSON.stringify(store));

            },
            delProduct : function(idproduct) {
                for(var i = 0, len = store.length; i < len; i++) {
                    if (store[i].id == idproduct) {
                        store.splice(i, 1);
                        break;
                    }
                }
                localStorage.setItem('store-product', JSON.stringify(store));
            }
            
        };
    });
    
})();