(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('shareModal', shareModal);

    shareModal.$inject = ['close'];

    function shareModal(close) {
        var vm = this;
        vm.template = 'app/common/components/shareModal/view.html';
        vm.closeModal = closeModal;

        function closeModal() {
            close();
        }
    }
})();