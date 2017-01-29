(function() {
    'use strict';

    if (document.getElementById(window._pegsIbeEnv.containerId)) {
        return;
    }

    var appContainer = getAppContainer(window._pegsIbeEnv.scriptUrl, window._pegsIbeEnv.containerId);
    var siteId = appContainer.dataset.siteId || angular.injector(['ng']).get('queryStringParams').get('site_id');

    if (!siteId) {
        appContainer.parentNode.removeChild(appContainer);
        return;
    }

    deferredBootstrapper.bootstrap({
        element: appContainer,
        module: window._pegsIbeEnv.moduleName,
        bootstrapConfig: {
            strictDi: true
        },
        resolve: {
            ENV: ['$q', '$window', function($q, $window) {
                var d = $q.defer();

                d.resolve($window._pegsIbeEnv);

                return d.promise;
            }],
            SERVICES: ['$http', '$q', '$window', function($http, $q, $window) {
                var d = $q.defer();

                var url = angular.injector(['ng']).get('queryStringParams').set('id', siteId, $window._pegsIbeEnv.apiEntryUrl);
                $http.get(url).then(function(response) {
                    if (response.data.services) {
                        d.resolve(response.data.services);
                    } else {
                        d.reject(response);
                    }
                }, function(response) {
                    d.reject(response);
                });

                return d.promise;
            }]
        }
    });

    function getAppContainer(scriptUrl, containerId) {
        var thisScript = null;
        var scripts = document.getElementsByTagName('script');
        
        for (var i = 0, len = scripts.length; i < len; i++) {
            if (scripts[i].src.indexOf(scriptUrl) !== -1) {
                thisScript = scripts[i];
                break;
            }
        }

        var container = document.createElement('div');
        container.id = containerId;
        container.className = 'ng-cloak ui-view';
        container.setAttribute('autoscroll', true);

        if (!thisScript) {
            document.body.appendChild(container);
        } else {
            var siteId = thisScript.dataset.siteId;
            
            if (siteId) {
                container.dataset.siteId = siteId;
            }

            thisScript.parentNode.insertBefore(container, thisScript);
        }

        return container;
    }
})();