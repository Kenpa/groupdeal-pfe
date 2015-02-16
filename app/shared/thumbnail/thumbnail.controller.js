(function() {
    
    angular.module('thumbnail').controller('ThumbnailController', ['$http', function($http) {
        var store = this;
        store.products = [];
        store.categories = 
            [
                {
                    category:'hightech',
                    label:'High-Tech'
                },
                {
                    category:'voyage',
                    label:'Voyages'
                },
                {
                    category:'mode',
                    label:'Mode'
                },
                {
                    category:'electromenager',
                    label:'Electroménager'
                },
                {
                    category:'loisirs',
                    label:'Loisirs'
                }
            ];
            
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
        images : "/assets/img/thumbnails/iphone4s.jpg",
        oldPrice : 499.90,
        newPrice : 399.90,
        curOffers : 8,
        maxOffers : 15
    },
    
    {
        title : 'Apple TV',
        desc : '',
        category : 'hightech',
        images : "/assets/img/thumbnails/appletv.jpg",
        oldPrice : 99.90,
        newPrice : 59.90,
        curOffers : 4,
        maxOffers : 20
    },
    
    {
        title : 'Samsung Galaxy S4',
        desc : '',
        category : 'hightech',
        images : "/assets/img/thumbnails/samsungs4.jpg",
        oldPrice : 399.90,
        newPrice : 249.90,
        curOffers : 13,
        maxOffers : 15
    },
    
    {
        title : 'Casque Beats',
        desc : '',
        category : 'hightech',
        images : "/assets/img/thumbnails/beats.jpg",
        oldPrice : 299.00,
        newPrice : 229.00,
        curOffers : 5,
        maxOffers : 10
    },
            
    {
        title : 'Voyage à Honk Kong',
        desc : '',
        category : 'voyage',
        images : "/assets/img/thumbnails/hk.jpg",
        oldPrice : 799.90,
        newPrice : 599.90,
        curOffers : 8,
        maxOffers : 10
    },
    
    {
        title : "Vivez l'expérience Japon !",
        desc : '',
        category : 'voyage',
        images : "/assets/img/thumbnails/tokyo.jpg",
        oldPrice : 899.90,
        newPrice : 649.90,
        curOffers : 4,
        maxOffers : 8
    },
    
    {
        title : 'Vivez le rêve américain !',
        desc : '',
        category : 'voyage',
        images : "/assets/img/thumbnails/ny.jpg",
        oldPrice : 699.90,
        newPrice : 519.50,
        curOffers : 13,
        maxOffers : 20
    },
    
    {
        title : 'Visitez la Laponie',
        desc : '',
        category : 'voyage',
        images : "/assets/img/thumbnails/laponie.jpg",
        oldPrice : 399.90,
        newPrice : 229.90,
        curOffers : 4,
        maxOffers : 10
    }
]
        
    }]);

})();