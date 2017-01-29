(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('reporter', reporter);

    reporter.$inject = ['$window'];

    function reporter($window) {
        var factory = {
            track: track
        };

        return factory;

        function track(eventType, data) {
            if (typeof $window.ga === 'function') {
                // $window.ga('send', 'event', {
                //     eventCategory: data.category,
                //     eventAction: eventType,
                //     eventLabel: data.label,
                //     transport: 'beacon'
                // });
            }
        }
    }
})();