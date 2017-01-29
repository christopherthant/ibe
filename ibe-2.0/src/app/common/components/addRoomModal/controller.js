(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('addRoomModal', addRoomModal);

    addRoomModal.$inject = ['$state', 'close'];

    function addRoomModal($state, close) {
        var vm = this;
        vm.template = 'app/common/components/addRoomModal/view.html';
        vm.closeModal = closeModal;
        vm.checkout = checkout;
        vm.additionalRoom = additionalRoom;

        function closeModal() {
            close();
        }

        function checkout() {
            vm.closeModal();
            $state.go('addons');
        }

        function additionalRoom() {
            vm.closeModal();
            $state.go('plan');
        }
    }
})();