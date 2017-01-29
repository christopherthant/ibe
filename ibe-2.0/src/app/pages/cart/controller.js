(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('cart', cart);

    cart.$inject = ['$state'];

    function cart($state) {
        var vm = this;
        vm.enterCodes = enterCodes;

        function enterCodes() {
            $state.go('codes', {redirect: $state.current.name});
        }
    }
})();