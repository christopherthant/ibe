(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('addToCalendarModal', addToCalendarModal);

    addToCalendarModal.$inject = ['close'];

    function addToCalendarModal(close) {
        var vm = this;
        vm.template = 'app/common/components/addToCalendarModal/view.html';
        vm.closeModal = closeModal;

        function closeModal() {
            close();
        }
    }
})();