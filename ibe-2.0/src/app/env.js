(function() {
    'use strict';

    window._pegsIbeEnv = window._pegsIbeEnv || {};

    var defaults = {
        apiEntryUrl: '/mock-api',
        containerId: 'teromac-container',
        environment: 'local',
        localStoragePrefix: 'teromac',
        moduleName: 'teromac-ibe',
        scriptUrl: 'teromac-ibe.js'
    };

    window._pegsIbeEnv = angular.extend(defaults, window._pegsIbeEnv);
})();