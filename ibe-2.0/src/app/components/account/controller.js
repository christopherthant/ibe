(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('account', account);

    account.$inject = ['$state'];

    function account($state) {
        var vm = this;

        activate();

        function activate() {
            if ($state.current.name === 'account') {
                return $state.go('profile', null, {location: 'replace'});
            }
        }
    }
})();