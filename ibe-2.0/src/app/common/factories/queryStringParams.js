(function() {
    'use strict';

    angular
        .module('ng') // NOT `window._pegsIbeEnv.moduleName` because we use this factory before bootstraping.
        .factory('queryStringParams', queryStringParams);

    queryStringParams.$inject = ['$window'];

    function queryStringParams($window) {
        var factory = {
            get: get,
            set: set
        };
        
        return factory;

        function get(name, url) {
            url = url || $window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');

            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
            
            if (!results || !results[2]) {
                return null;
            }
            
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        function set(name, value, url) {
            url = url || $window.location.href;

            var newParam = name + '=' + value;
            var result = url.replace(new RegExp('(&|\\?)' + name + '=[^\&|#]*'), '$1' + newParam);
            var urlParts;
            
            if (result === url) {
                if (url.indexOf('?') !== -1) {
                    urlParts = url.split('?');
                    result = urlParts[0] + '?' + newParam + '&' + urlParts[1];
                } else if (url.indexOf('#') !== -1) {
                    urlParts = url.split('#');
                    result = urlParts[0] + '?' + newParam + '#' + urlParts[1];
                } else {
                    result = url + '?' + newParam;
                }
            }
            
            return result;
        }
    }
})();