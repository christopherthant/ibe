(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('codes', codes);

    codes.$inject = ['$state', '$stateParams', '$filter', 'plan', '$rootScope'];

    function codes($state, $stateParams, $filter, plan, $rootScope) {
        var vm = this;
        vm.plan = plan;
        vm.toggleCodeType = toggleCodeType;
        vm.resetCode = resetCode;
        vm.valid = true;
        vm.complete = complete;
        vm.codeTypes = codeTypes();

        /*
        vm.codeTypes = [
            {
                key: 'promoCode',
                displayName: 'Promo Code',
                nonEntryCodeType: false,
                nonEntryMessage: '',
                focused: false
            }
        ];
        */        

        function codeTypes(){
            var codeTypes = $rootScope.StaticData.property.codeTypes;
            var langCodeTypes = $rootScope.StaticDataLanguageData.property.codeTypes;

            angular.forEach(codeTypes, function(item, key) {
                var obj = $filter('filter')(langCodeTypes, {id: item["id"] })[0];
                item["focused"] = false;
                if(obj.displayName.includes('AAA')){
                    item["nonEntryCodeType"] = true;
                    item["nonEntryMessage"] = "You will need to present your AAA membership card at check-in in order to secure the AAA rate.";
                }else {
                    item["nonEntryCodeType"] = false;
                    item["nonEntryMessage"] = "";
                }

            
                item["label"] = obj.displayName;
            });

            return codeTypes;

        }
        
        function toggleCodeType(codeType, cancel) {
            if (codeType.focused) {
                //submit button if user did not enter special code
                if(!cancel && !codeType.nonEntryCodeType && (!vm.plan.data.codes || !vm.plan.data.codes[codeType.id])) {
                    vm.valid = false;
                    return;
                }

                if(!cancel && codeType.nonEntryCodeType) {
                    if(!vm.plan.data.codes) {
                        vm.plan.data.codes = []; //initialize the object
                        vm.plan.data.codes[codeType.id] = 'aaa';
                    }
                    else {     
                        vm.plan.data.codes[codeType.id] = 'aaa';
                    }
                    vm.valid = true;
                }

                codeType.focused = false;
                return;
            }

            for (var i = 0, len = vm.codeTypes.length; i < len; i++) {
                vm.codeTypes[i].focused = false;
            }

            vm.valid = true;
            codeType.focused = true;
        }

        function resetCode(codeType) {
            if(vm.plan.data.codes)
                vm.plan.data.codes[codeType.id] = null;
            vm.toggleCodeType(codeType, true);
        }

        function complete() {
            $state.go($stateParams.redirect || 'plan');
        }
    }
})();