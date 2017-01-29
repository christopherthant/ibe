(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('userFilters', userFilters);

    userFilters.$inject = ['CONFIG'];

    function userFilters(CONFIG) {
        var defaults = {
            checkIn: new Date(),
            checkOut: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),
            adults: 2,
            children: 0,
            rooms: 1,
            codes: {}
        };

        var factory = {
            reset: reset
        };

        activate();

        return factory;

        function activate() {
            reset();
        }

        function reset() {
            factory.data = angular.copy(defaults);

            for (var i = 0, len = CONFIG.codeTypes; i < len; i++) {
                factory.data.codes.CONFIG.codeTypes[i].key = null;
            }

            factory.data.checkIn.setHours(0, 0, 0, 0);
            factory.data.checkOut.setHours(0, 0, 0, 0);
        }
    }
})();