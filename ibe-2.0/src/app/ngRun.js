(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .run(run);

    run.$inject = ['$rootScope', '$templateCache', '$window', 'api', 'loadFile'];

    function run($rootScope, $templateCache, $window, api, loadFile) {
        if (typeof $window._pegsPutTemplateCache !== 'undefined') {
            $window._pegsPutTemplateCache($templateCache);
        }

        api.getStaticData().then(function(response) {
            if (response.css) {
                loadFile.css(response.css);
            }
        });
    }
})();