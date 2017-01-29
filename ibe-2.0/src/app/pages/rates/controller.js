(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('rates', rates);

    rates.$inject = ['cart'];

    function rates(cart) {
        var vm = this;
        vm.toggleRate = toggleRate;
        vm.cart = cart;
        vm.room = {
            id: 's4',
            name: 'Standard',
            description: 'These stylish and enticing, studio-style rooms offer a pool or city view and feature a king-sized bed. Enjoy up to 475 sq. feet of urban sophistication. These rooms confortably include a spacious 4-piece marble bathroom and a 32" plasma HD television. Selected rooms also feature a personal balcony.',
            maxGuests: 4,
            minGuests: 1,
            images: [
                '/assets/images/hotels/belmond/rooms/01-standard/01-standard.jpg',
                '/assets/images/hotels/belmond/rooms/01-standard/02-standard-bathroom.jpg',
                '/assets/images/hotels/belmond/rooms/01-standard/03-standard-towels.jpg',
            ],
            amenities: [
                '1 king size bed',
                '1 sofa bed',
                '1 bath',
                '2 sinks'
            ],
            includedGuestCount: 2,
            additionalAdultPrices: [50, 75],
            additionalChildPrices: [25, 50],
            rates: [
                {
                    id: 's4ap110',
                    name: 'Advanced Purchase',
                    description: 'Payment must be made at time of reservation blablaPayment must be made at time of reservation blablaPayment must be made at time of Payment Payment must be made at time of reservation blablaPayment must be made at time of',
                    price: 110
                },
                {
                    id: 's4vp129',
                    name: 'Valet Parking',
                    description: 'Payment must be made at time of reservation blablaPayment must be made at time of reservation blablaPayment must be made at time of Payment Payment must be made at time of reservation blablaPayment must be made at time of',
                    price: 129
                },
                {
                    id: 's4cb159',
                    name: 'Continental Breakfast',
                    description: 'Payment must be made at time of reservation blablaPayment must be made at time of reservation blablaPayment must be made at time of Payment Payment must be made at time of reservation blablaPayment must be made at time of',
                    price: 159
                }
            ]
        };

        activate();

        function activate() {
            vm.toggleRate(vm.room.rates[0]);
        }

        function toggleRate(rate) {
            for (var i = 0, len = vm.room.rates.length; i < len; i++) {
                vm.room.rates[i].active = false;
            }

            rate.active = true;
        }
    }
})();