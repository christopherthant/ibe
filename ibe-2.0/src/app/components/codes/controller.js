(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('codes', codes);

    codes.$inject = ['$state', '$stateParams', 'plan'];

    function codes($state, $stateParams, plan) {
        var vm = this;
        vm.plan = plan;
        vm.toggleCodeType = toggleCodeType;
        vm.resetCode = resetCode;
        vm.complete = complete;
        vm.codeTypes = [
            {
                key: 'promoCode',
                displayName: 'Promo Code',
                focused: false
            },
            {
                key: 'corporateCode',
                displayName: 'Corporate Code',
                focused: false
            },
            {
                key: 'aaaCaa',
                displayName: 'AAA / CAA Members',
                focused: false
            },
            {
                key: 'aarp',
                displayName: 'AARP Member',
                focused: false
            },
            {
                key: 'iata',
                displayName: 'IATA',
                focused: false
            }
        ];

        function toggleCodeType(codeType) {
            if (codeType.focused) {
                codeType.focused = false;
                return;
            }

            for (var i = 0, len = vm.codeTypes.length; i < len; i++) {
                vm.codeTypes[i].focused = false;
            }

            codeType.focused = true;
        }

        function resetCode(codeType) {
            //vm.plan.data.codes[codeType.key] = null;
            vm.toggleCodeType(codeType);
        }

        function complete() {
            $state.go($stateParams.redirect || 'plan');
        }
    }
})();