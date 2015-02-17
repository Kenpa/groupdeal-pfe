(function() {
    
    angular.module('app').controller('ProductsController', function() {
        var list = this;
        this.products =
        [
            {
                id : 1,
                title : 'Samsung Galaxy S5',
                desc : "20% de réduction pour l'achat de 15 smartphones Samsung Galaxy S5 ! N'hésitez-plus et achetez le smartphone de vos rêves !",
                category : 'hightech',
                author : 'Pikachu',
                images : "/assets/img/samsung-galaxy-s5.jpg",
                oldPrice : 599.90,
                newPrice : 449.90,
                curOffers : 8,
                maxOffers : 10,
                isHot : true
            },

            {
                id : 2,
                title : 'Playstation 4 Gold Edition',
                desc : '',
                category : 'hightech',
                author : 'Salamèche',
                images : "/assets/img/ps4-gold-edition.jpg",
                oldPrice : 399.90,
                newPrice : 319.90,
                curOffers : 7,
                maxOffers : 10,
                isHot : false
            },

            {
                id : 3,
                title : 'Apple Iphone 4s',
                desc : '',
                category : 'hightech',
                author : 'Carapuce',
                images : "/assets/img/iphone-4s.jpg",
                oldPrice : 499.90,
                newPrice : 399.90,
                curOffers : 8,
                maxOffers : 15,
                isHot : false
            },

            {
                id : 4,
                title : 'Apple TV',
                desc : '',
                category : 'hightech',
                author : 'Salamèche',
                images : "/assets/img/apple-tv.jpg",
                oldPrice : 99.90,
                newPrice : 59.90,
                curOffers : 4,
                maxOffers : 20,
                isHot : false
            },

            {
                id : 5,
                title : 'Samsung Galaxy S4',
                desc : '',
                category : 'hightech',
                author : 'Pikachu',
                images : "/assets/img/samsung-galaxy-s4.jpg",
                oldPrice : 399.90,
                newPrice : 249.90,
                curOffers : 13,
                maxOffers : 15,
                isHot : false
            },

            {
                id : 6,
                title : 'Casque Beats',
                desc : '',
                category : 'hightech',
                author : 'Salamèche',
                images : "/assets/img/beats.jpg",
                oldPrice : 299.00,
                newPrice : 229.00,
                curOffers : 5,
                maxOffers : 10,
                isHot : false
            },

            {
                id : 7,
                title : 'Voyage à Honk Kong',
                desc : '',
                category : 'voyage',
                author : 'Carapuce',
                images : "/assets/img/hk-voyage.jpg",
                oldPrice : 799.90,
                newPrice : 599.90,
                curOffers : 8,
                maxOffers : 10,
                isHot : false
            },

            {
                id : 8,
                title : "Vivez l'expérience Japon !",
                desc : '',
                category : 'voyage',
                author : 'Salamèche',
                images : "/assets/img/tokyo-voyage.jpg",
                oldPrice : 899.90,
                newPrice : 649.90,
                curOffers : 4,
                maxOffers : 8,
                isHot : false
            },

            {
                id : 9,
                title : 'Vivez le rêve américain !',
                desc : '',
                category : 'voyage',
                author : 'Carapuce',
                images : "/assets/img/ny-voyage.jpg",
                oldPrice : 699.90,
                newPrice : 519.50,
                curOffers : 13,
                maxOffers : 20,
                isHot : false
            },

            {
                id : 10,
                title : 'Visitez la Laponie',
                desc : '',
                category : 'voyage',
                author : 'Pikachu',
                images : "/assets/img/laponie-voyage.jpg",
                oldPrice : 399.90,
                newPrice : 229.90,
                curOffers : 4,
                maxOffers : 10,
                isHot : false
            }
        ]
        
        this.categories = 
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
        
        this.showHotProduct = function() {
            var i = 0;
            while (!list.products[i].isHot)
                i++;
            
            return list.products[i];
        };
        
        this.nbProdPerCat = function(cat) {
            var count = 0;
            for (var i = 0; i < list.products.length; i++) {
                if (list.products[i].category === cat) {
                    count++;
                }
            }
            return count;
        };
        
        this.getProductById = function(id) {
            var i = 0;
            while (list.products[i].id != id )
                i++;
            
            return list.products[i];
        }
        
    });
})();