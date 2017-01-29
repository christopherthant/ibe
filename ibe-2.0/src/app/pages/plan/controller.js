(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('plan', plan);

    plan.$inject = ['$state', 'plan'];

    function plan($state, plan) {
        var vm = this;
        vm.plan = plan;
        vm.allowMultiRoom = true; //staticData.property.allowMultiRoom;
        vm.checkAvailability = checkAvailability;
        vm.rateCodeApplied = rateCodeApplied();
        vm.noCodeLabel = "Rate Code";
        vm.appliedCodeLabel = "Edit Rate Code";
        vm.appliedCodeMessage = "Rate Code has been applied.";


        function checkAvailability() {
            vm.formSubmitted = false;
            /*
            if(vm.plan.data.childrenAges && Object.keys(vm.plan.data.childrenAges).length > 0)
            {
                alert(Object.keys(vm.plan.data.childrenAges).length);
                for (var i = 0, len = Object.keys(vm.plan.data.childrenAges).length; i < len; i++) {
                    if (!vm.plan.data.childrenAges[i] || vm.plan.data.childrenAges[i] === '') {
                        vm.formSubmitted = true;
                        return;
                    }
                }
            }
            */
            $state.go('rooms');
        }

        function rateCodeApplied() {
            var rateCodeApplied = false;
            //Object.keys(vm.plan.data.codes).length 
            if(vm.plan.data.codes)
            {
                angular.forEach(vm.plan.data.codes, function(value, key) {
                    if(value)
                        rateCodeApplied = true;
                }); 
            }
            return rateCodeApplied;
        }
    }
})();