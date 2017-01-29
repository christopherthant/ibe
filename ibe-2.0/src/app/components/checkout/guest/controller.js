(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('guest', guest);

    guest.$inject = ['dialog'];

    function guest(dialog) {
        var vm = this;
        vm.createAccountReason = createAccountReason;

        activate();

        function activate() {
        }

        function createAccountReason() {
            dialog.alert('message');
        }
    }
})();