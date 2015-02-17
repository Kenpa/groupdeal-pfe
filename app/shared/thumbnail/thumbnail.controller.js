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
        title : 'Samsung Galaxy S5',
        desc : '',
        category : 'hightech',
        images : "/assets/img/samsung-galaxy-s5.jpg",
        oldPrice : 599.90,
        newPrice : 449.90,
        curOffers : 8,
        maxOffers : 10,
        isHot : true
    },
    
    {
        title : 'Playstation 4 Gold Edition',
        desc : '',
        category : 'hightech',
        images : "/assets/img/ps4-gold-edition.jpg",
        oldPrice : 399.90,
        newPrice : 319.90,
        curOffers : 7,
        maxOffers : 10,
        isHot : false
    },
            
    {
        title : 'Apple Iphone 4s',
        desc : '',
        category : 'hightech',
        images : "/assets/img/iphone-4s.jpg",
        oldPrice : 499.90,
        newPrice : 399.90,
        curOffers : 8,
        maxOffers : 15,
        isHot : false
    },
    
    {
        title : 'Apple TV',
        desc : '',
        category : 'hightech',
        images : "/assets/img/apple-tv.jpg",
        oldPrice : 99.90,
        newPrice : 59.90,
        curOffers : 4,
        maxOffers : 20,
        isHot : false
    },
    
    {
        title : 'Samsung Galaxy S4',
        desc : '',
        category : 'hightech',
        images : "/assets/img/samsung-galaxy-s4.jpg",
        oldPrice : 399.90,
        newPrice : 249.90,
        curOffers : 13,
        maxOffers : 15,
        isHot : false
    },
    
    {
        title : 'Casque Beats',
        desc : '',
        category : 'hightech',
        images : "/assets/img/beats.jpg",
        oldPrice : 299.00,
        newPrice : 229.00,
        curOffers : 5,
        maxOffers : 10,
        isHot : false
    },
            
    {
        title : 'Voyage à Honk Kong',
        desc : '',
        category : 'voyage',
        images : "/assets/img/hk-voyage.jpg",
        oldPrice : 799.90,
        newPrice : 599.90,
        curOffers : 8,
        maxOffers : 10,
        isHot : false
    },
    
    {
        title : "Vivez l'expérience Japon !",
        desc : '',
        category : 'voyage',
        images : "/assets/img/tokyo-voyage.jpg",
        oldPrice : 899.90,
        newPrice : 649.90,
        curOffers : 4,
        maxOffers : 8,
        isHot : false
    },
    
    {
        title : 'Vivez le rêve américain !',
        desc : '',
        category : 'voyage',
        images : "/assets/img/ny-voyage.jpg",
        oldPrice : 699.90,
        newPrice : 519.50,
        curOffers : 13,
        maxOffers : 20,
        isHot : false
    },
    
    {
        title : 'Visitez la Laponie',
        desc : '',
        category : 'voyage',
        images : "/assets/img/laponie-voyage.jpg",
        oldPrice : 399.90,
        newPrice : 229.90,
        curOffers : 4,
        maxOffers : 10,
        isHot : false
    }
]
        
    }]);

})();