(function() {
    
    angular.module('thumbnail').controller('ThumbnailController', ['$http', function($http) {
        var store = this;
        store.products = [];
            
/*        $http.get('../../products.json').success(function(data){
            store.products = data;
            console.log("products loaded");
        }).error(function() {
            console.log("error loading products");
        });*/
        
        store.products = [
    {
        name : 'Apple Iphone 4s',
        desc : '',
        oldPrice : 499.90,
        newPrice : 399.90,
        curOffers : 8,
        maxOffers : 15
    },
    
    {
        name : 'Apple TV',
        desc : '',
        oldPrice : 99.90,
        newPrice : 59.90,
        curOffers : 4,
        maxOffers : 20
    },
    
    {
        name : 'Samsung Galaxy S5',
        desc : '',
        oldPrice : 599.90,
        newPrice : 449.90,
        curOffers : 13,
        maxOffers : 15
    },
    
    {
        name : 'Casque Beats',
        desc : '',
        oldPrice : 299.00,
        newPrice : 229.00,
        curOffers : 5,
        maxOffers : 10
    }
]
        
    }]);

})();