(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('loadFile', loadFile);

    loadFile.$inject = ['$document'];

    function loadFile($document) {
        var factory = {
            css: css,
            js: js
        };
        
        return factory;

        function css(url) {
            var cssFiles = $document[0].styleSheets;
        
            for (var i = 0, len = cssFiles.length; i < len; i++) {
                if (typeof cssFiles[i].href === 'string' && cssFiles[i].href.indexOf(url) > -1) {
                    return;
                }
            }

            var link = $document[0].createElement('link');
            link.rel = 'stylesheet';
            link.href = url;

            link.onerror = function(){
                this.disabled = true;
                this.parentNode.removeChild(this);
            };

            $document[0].getElementsByTagName('head')[0].appendChild(link);
        }

        function js(url) {
            // TODO: Add when needed
        }
    }
})();