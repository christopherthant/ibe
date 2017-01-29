(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('review', review);

    review.$inject = [];

    function review() {
        var vm = this;
        vm.isToggle = false;

        activate();

        function activate() {
        }
    }
})();