(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('paymentmethods', paymentmethods);

    paymentmethods.$inject = [];

    function paymentmethods() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();