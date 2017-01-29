(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('addon', addon);

    addon.$inject = [];

    function addon() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();