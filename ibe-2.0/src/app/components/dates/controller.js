(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('dates', dates);

    dates.$inject = ['plan'];

    function dates(plan) {
        var vm = this;
        vm.plan = plan;
    }
})();