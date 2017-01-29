(function() {
    'use strict';

    angular
        .module(window._teromacIbeConfigApp.moduleName)
        .controller('reservations', reservations);

    reservations.$inject = ['ModalService'];

    function reservations(ModalService) {
        var vm = this;
        vm.share = share;
        vm.addToCalendar = addToCalendar;

        function share() {
            ModalService.showModal({
                templateUrl: 'app/common/views/modal.html',
                controller: 'shareModal',
                controllerAs: 'vm'
            });
        }

        function addToCalendar() {
            ModalService.showModal({
                templateUrl: 'app/common/views/modal.html',
                controller: 'addToCalendarModal',
                controllerAs: 'vm'
            });
        }
    }
})();