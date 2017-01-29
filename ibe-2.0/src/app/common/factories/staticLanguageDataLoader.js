(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('staticLanguageDataLoader', staticLanguageDataLoader);

    staticLanguageDataLoader.$inject = ['$q', 'api'];

    function staticLanguageDataLoader($q, api) {
        return function(options) {
            var d = $q.defer();

            api.getStaticLanguageData(options.key).then(function(response) {
                d.resolve(response);
            }, function(response) {
                d.reject(options.key);
            });

            return d.promise;
        }
    }
})();