(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('checkout', checkout);

    checkout.$inject = ['$state'];

    function checkout($state) {
        var vm = this;
        vm.isGuestDetailsView = isGuestDetailsView;

        activate();

        function activate() {
            if ($state.current.name === 'checkout') {
                return $state.go('guest', null, {location: 'replace'});
            }
        }

        function isGuestDetailsView() {
            return $state.current.name === 'guest';
        }
    }
})();