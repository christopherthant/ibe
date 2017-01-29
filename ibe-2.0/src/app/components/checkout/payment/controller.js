(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('payment', payment);

    payment.$inject = [];

    function payment() {
        var vm = this;

        activate();

        function activate() {
            vm.expirationYears = getYears(20);
        }

        function getYears(limit, start) {
            var result = [];

            if (!start) {
                var start = new Date().getFullYear();
            }

            do {
                result.push(start);
                start++;
                limit--;
            } while(limit > 0);

            return result;
        }
    }
})();