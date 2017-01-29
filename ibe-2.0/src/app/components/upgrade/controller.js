(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('upgrade', upgrade);

    upgrade.$inject = ['$state'];

    function upgrade($state) {
        var vm = this;
        vm.checkout = checkout;

        function checkout() {
            $state.go('checkout');
        }
    }
})();