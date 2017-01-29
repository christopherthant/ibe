(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('cart', cart);

    cart.$inject = ['ModalService'];

    function cart(ModalService) {
        var factory = {
            items: [],
            getTotal: getTotal,
            empty: empty,
            addRoom: addRoom
        };

        return factory;

        function empty() {
            factory.items = [];
        }

        function getTotal() {
            return factory.items.reduce(function(total, item) {
                return total + item.price;
            }, 0);
        }

        function addRoom(room) {
            ModalService.showModal({
                templateUrl: 'app/common/views/modal.html',
                controller: 'addRoomModal',
                controllerAs: 'vm'
            });
        }
    }
})();