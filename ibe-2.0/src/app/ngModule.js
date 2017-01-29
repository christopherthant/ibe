(function() {
    'use strict';

    angular.module(window._pegsIbeEnv.moduleName, [
        'angularModalService',
        'LocalStorageModule',
        'ngSanitize',
        'pascalprecht.translate',
        'slick',
        'ui.router',
    ]);
})();