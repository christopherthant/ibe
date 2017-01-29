(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .config(config);

    config.$inject = ['$compileProvider', '$sceDelegateProvider', '$translateProvider', 'ENV', 'localStorageServiceProvider', 'SERVICES'];

    function config($compileProvider, $sceDelegateProvider, $translateProvider, ENV, localStorageServiceProvider, SERVICES) {
        $compileProvider.debugInfoEnabled(false);

        if (ENV.resourceUrlWhitelist) {
            ENV.resourceUrlWhitelist.map(function(url) {
                $sceDelegateProvider.resourceUrlWhitelist(['self', url + '**']);
            });
        }
        
        localStorageServiceProvider
            .setPrefix(ENV.localStoragePrefix)
            .setStorageCookie(0, '/');

        $translateProvider
            .usePostCompiling(true)
            .useSanitizeValueStrategy('sanitize')
            .useLoader('staticLanguageDataLoader')
            .determinePreferredLanguage() // .preferredLanguage('en-US')
            .fallbackLanguage('en-US');
    }
})();