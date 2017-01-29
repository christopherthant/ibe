(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .filter('range', range);

    range.$inject = ['$filter'];

    function range($filter) {
        return function(input, start, end) {
            start = parseInt(start);
            end = parseInt(end);

            for (var i = start; i <= end; i++) {
                input.push(i);
            }
            
            return input;
        };
    }
})();