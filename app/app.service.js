(function() {
    
    angular.module('app').factory('AddOfferService', function() {
        if (localStorage.getItem("offers") === null) {
            offers = [];
        }
        else{
            offers = JSON.parse(localStorage.getItem('offers'));
        }
        return {
            getOffers: function() {
                return offers;
            },
            addOffers: function(offer) {
                offers.push(offer);              
                localStorage.setItem('offers', JSON.stringify(offers));
                element = angular.element(document.querySelector('#offerModal'));
                element.foundation('reveal', 'close');
            }
            
        };
    });
    
})();