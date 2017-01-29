(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('plan', plan);

    plan.$inject = ['$state', 'plan'];

    function plan($state, plan) {
        var vm = this;
        vm.plan = plan;
        vm.checkAvailability = checkAvailability;

        function checkAvailability() {
            vm.formSubmitted = false;

            for (var i = 0, len = vm.plan.data.childrenAges.length; i < len; i++) {
                if (!vm.plan.data.childrenAges[i] || vm.plan.data.childrenAges[i] === '') {
                    vm.formSubmitted = true;
                    return;
                }
            }

            $state.go('rooms');
        }
    }
})();