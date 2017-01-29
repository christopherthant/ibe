(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('policies', policies);

    policies.$inject = [];

    function policies() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();