(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        var defaultState = {
            layout: {
                abstract: true,
                url: null,
                parent: null
            },
            plan: {
                url: '/'
            },
            dates: {
                url: null
            },
            codes: {
                url: null,
                params: {
                    redirect: null
                }
            },
            rooms: null,
            rates: {
                parent: 'rooms'
            },
            compare: null,
            addons: null,
            addon: {
                url: '/{id}',
                parent: 'addons'
            },
            upgrade: null,
            cart: null,
            checkout: null,
            guest: {
                parent: 'checkout',
                templateUrl: 'app/pages/checkout/guest/view.html'
            },
            payment: {
                parent: 'checkout',
                templateUrl: 'app/pages/checkout/payment/view.html'
            },
            policies: {
                parent: 'checkout',
                templateUrl: 'app/pages/checkout/policies/view.html'
            },
            review: {
                parent: 'checkout',
                templateUrl: 'app/pages/checkout/review/view.html'
            },
            account: null,
            profile: {
                parent: 'account',
                templateUrl: 'app/pages/account/profile/view.html'
            },
            reservations: {
                parent: 'account',
                templateUrl: 'app/pages/account/reservations/view.html'
            },
            'payment-methods': {
                parent: 'account',
                templateUrl: 'app/pages/account/payment-methods/view.html'
            },
            confirmation: null
        };

        angular.forEach(defaultState, function(value, key) {
            $stateProvider.state(getStateOptions(key, value));
        });
    }
    
    function getStateOptions(name, overrides) {
        var defaultState = {
            name: name,
            url: '/' + name,
            parent: 'layout',
            templateUrl: 'app/pages/' + name + '/view.html',
            controller: name.replace(/-/g, ''),
            controllerAs: 'vm'
        };

        return angular.extend(defaultState, overrides || {});
    }
})();