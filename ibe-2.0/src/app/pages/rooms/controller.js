(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('rooms', rooms);

    rooms.$inject = ['$state', 'plan'];

    function rooms($state, plan) {
        var vm = this;
        vm.plan = plan;
        vm.state = $state;
        vm.filters = [
            'Clear All',
            'Price Range',
            'Room Type',
            'Bed Type',
            'Max Guests',
            'Amenities'
        ];
    }
})();