(function() {
    
    angular.module('thumbnail').controller('ThumbnailController', ['$http', function($http) {
        var store = this;
        store.products = [];
        store.category = ['hightech', 'voyage', 'mode', 'electromenager', 'loisirs'];
            
/*        $http.get('../../products.json').success(function(data){
            store.products = data;
            console.log("products loaded");
        }).error(function() {
            console.log("error loading products");
        });*/
        
        store.products = [
    {
        title : 'Apple Iphone 4s',
        desc : '',
        category : 'hightech',
        oldPrice : 499.90,
        newPrice : 399.90,
        curOffers : 8,
        maxOffers : 15
    },
    
    {
        title : 'Apple TV',
        desc : '',
        category : 'hightech',
        oldPrice : 99.90,
        newPrice : 59.90,
        curOffers : 4,
        maxOffers : 20
    },
    
    {
        title : 'Samsung Galaxy S5',
        desc : '',
        category : 'hightech',
        oldPrice : 599.90,
        newPrice : 449.90,
        curOffers : 13,
        maxOffers : 15
    },
    
    {
        title : 'Casque Beats',
        desc : '',
        category : 'hightech',
        oldPrice : 299.00,
        newPrice : 229.00,
        curOffers : 5,
        maxOffers : 10
    },
            
    {
        title : 'Voyage à Honk Kong',
        desc : '',
        category : 'voyage',
        oldPrice : 799.90,
        newPrice : 599.90,
        curOffers : 8,
        maxOffers : 10
    },
    
    {
        title : "Vivez l'expérience Japon !",
        desc : '',
        category : 'voyage',
        oldPrice : 899.90,
        newPrice : 649.90,
        curOffers : 4,
        maxOffers : 8
    },
    
    {
        title : 'Vivez le rêve américain !',
        desc : '',
        category : 'voyage',
        oldPrice : 699.90,
        newPrice : 519.50,
        curOffers : 13,
        maxOffers : 20
    },
    
    {
        title : 'Visitez la Laponie',
        desc : '',
        category : 'voyage',
        oldPrice : 399.90,
        newPrice : 229.90,
        curOffers : 4,
        maxOffers : 10
    }
]
        
    }]);

})();