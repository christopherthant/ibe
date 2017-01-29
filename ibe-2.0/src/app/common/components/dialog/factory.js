(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('dialog', dialog);

    dialog.$inject = ['$q', 'ModalService'];

    function dialog($q, ModalService) {
        var factory = {
            alert: alert,
            confirm: confirm
        };

        return factory;

        function alert(message, isError, buttonOk) {
            var deferred = $q.defer();

            ModalService.showModal({
                templateUrl: 'app/common/views/modal.html',
                controller: ['$document', 'close', 'message', 'buttonOk', 'isError', function($document, close, message, buttonOk, isError) {
                    var vm = this;

                    vm.forceCloseModal = forceCloseModal;
                    vm.template = 'app/common/components/dialog/alertView.html';
                    vm.hideModalCloseBtn = true;
                    vm.message = message;
                    vm.buttonOk = buttonOk || 'OK';
                    vm.isError = isError || false;

                    function forceCloseModal() {
                        $document.find('body').removeClass('teromac-modal-open');
                        close();
                    }
                }],
                controllerAs: 'vm',
                inputs: {
                    message: message,
                    buttonOk: buttonOk,
                    isError: isError
                }
            }).then(function(modal) {
                modal.close.then(function(result) {
                    deferred.resolve();
                });
            });

            return deferred.promise;
        }

        function confirm(message, buttonOk, buttonCancel) {
            var deferred = $q.defer();

            ModalService.showModal({
                templateUrl: 'app/common/views/modal.html',
                controller: ['$document', 'close', 'message', 'buttonOk', 'buttonCancel', function($document, close, message, buttonOk, buttonCancel) {
                    var vm = this;

                    vm.forceCloseModal = forceCloseModal;
                    vm.template = 'app/common/components/dialog/confirmView.html';
                    vm.hideModalCloseBtn = true;
                    vm.message = message;
                    vm.buttonOk = buttonOk || 'YES';
                    vm.buttonCancel = buttonCancel || 'NO';

                    function forceCloseModal(result) {
                        $document.find('body').removeClass('teromac-modal-open');
                        close(result);
                    }
                }],
                controllerAs: 'vm',
                inputs: {
                    message: message,
                    buttonOk: buttonOk,
                    buttonCancel: buttonCancel
                }
            }).then(function(modal) {
                modal.close.then(function(result) {
                    if (result) {
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                });
            });

            return deferred.promise;
        }
    };
})();