(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('api', api);

    api.$inject = ['$http', '$q', '$rootScope', 'ENV', 'SERVICES'];

    function api($http, $q, $rootScope, ENV, SERVICES) {
        var cache = {};
        var xhrInProgress = {};
        var factory = {
            getStaticData: getStaticData,
            getStaticLanguageData: getStaticLanguageData
        };

        return factory;

        function _getFromCache(key) {
            if (cache[key]) {
                var d = $q.defer();
                
                d.resolve(cache[key]);
                
                return d.promise;
            } else {
                return null;
            }
        }

        function _xhr(method, url, requestHeaders, requestData) {
            var requestId = method + '_' + url;

            if (xhrInProgress[requestId]) {
                return xhrInProgress[requestId];
            }

            var deferredAbort = $q.defer();
            var options = {
                method: method,
                url: url,
                timeout: deferredAbort.promise
            };

            if (requestHeaders) {
                options.headers = requestHeaders;
            }

            if (method === 'GET') {
                angular.extend(options, { params: requestData });

                // Cache Buster for IE
                if (document.documentMode){
                    var cb = Date.now();
                    options.url += (options.url.indexOf('?') === -1 ? '?' : '&') + cb;
                }
            } else {
                angular.extend(options, { data: requestData });
            }

            var request = $http(options);

            var promise = request.then(function(response) {
                return response;
            }, function(response) {
                return $q.reject(response);
            });

            promise.abort = function() {
                deferredAbort.resolve();
            };

            promise['finally'](function() {
                delete xhrInProgress[requestId];
                promise.abort = angular.noop;
                deferredAbort = request = promise = null;
            });

            xhrInProgress[requestId] = promise;

            return promise;
        }

        function getStaticData() {
            var cacheKey = 'StaticData';
            var staticData = _getFromCache(cacheKey);

            if (!staticData) {
                var d = $q.defer();
                var url = SERVICES.StaticData;

                _xhr('GET', url).then(function(response) {
                    cache[cacheKey] = response.data;
                    $rootScope.StaticData = response.data;
                    d.resolve(response.data);
                }, function(response) {
                    d.reject(response);
                });
                
                return d.promise;
            }

            return staticData;
        }

        function getStaticLanguageData(languageTag) {
            if (!languageTag) {
                throw 'getStaticLanguageData requires one parameter called languageTag';
            }

            var cacheKey = 'StaticLanguageData_' + languageTag;
            var staticLanguageData = _getFromCache(cacheKey);

            if (!staticLanguageData) {
                var d = $q.defer();
                
                var url = SERVICES.StaticLanguageData;

                _xhr('GET', url, {'Accept-Language': languageTag}).then(function(response) {
                    cache[cacheKey] = response.data;
                    $rootScope.StaticDataLanguageData = response.data;
                    d.resolve(response.data);
                }, function(response) {
                    d.reject(response);
                });
                
                return d.promise;
            }

            return staticLanguageData;
        }
    }
})();