(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .controller('layout', layout);

    layout.$inject = ['$state'];

    function layout($state) {
        var vm = this;
        vm.hasStickyHeaderMobile = hasStickyHeaderMobile;
        vm.menuIsOpen = false;
        vm.toggleMenu = toggleMenu;
        vm.submenuFormIsVisible = {};
        vm.toggleSubmenuForm = toggleSubmenuForm;
        vm.showLoginForm = showLoginForm;
        vm.showFindReservationForm = showFindReservationForm;
        vm.isLoggedIn = false;
        vm.login = login;
        vm.logout = logout;

        function hasStickyHeaderMobile() {
            var stickyHeaderStates = ['plan'];

            return stickyHeaderStates.indexOf($state.current.name) !== -1;
        }

        function toggleMenu() {
            vm.menuIsOpen = !vm.menuIsOpen;

            if (!vm.menuIsOpen) {
                hideAllSubmenuForms();
            }
        }

        function toggleSubmenuForm(formName) {
            var currentState = vm.submenuFormIsVisible[formName];

            hideAllSubmenuForms();
            vm.submenuFormIsVisible[formName] = !currentState;
        }

        function hideAllSubmenuForms() {
            for (var formName in vm.submenuFormIsVisible) {
                if (vm.submenuFormIsVisible.hasOwnProperty(formName)) {
                    vm.submenuFormIsVisible[formName] = false;
                }
            }
        }

        function showLoginForm() {
            vm.menuIsOpen = true;
            toggleSubmenuForm('logIn');
        }

        function showFindReservationForm() {
            vm.menuIsOpen = true;
            toggleSubmenuForm('findReservation');
        }

        function login() {
            vm.isLoggedIn = true;
        }

        function logout() {
            vm.isLoggedIn = false;
        }
    }
})();