(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('addons', addons);

    addons.$inject = ['$state'];

    function addons($state) {
        var vm = this;
        vm.state = $state;
    }
})();