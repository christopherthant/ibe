(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .factory('plan', plan);

    plan.$inject = [];

    function plan() {
        var defaults = {
            multiRoom: false,
            check_in: null,
            check_out: null,
            guestTypes: [
                {
                    id: 1, 
                    label: 'Adults', 
                    count: 2, 
                    required: true,
                    hasValues: false},
                {
                    id: 2, 
                    label: 'Children', 
                    count: 0, 
                    required: false,
                    hasValues: true, 
                    values: {
                        label: 'Age',
                        required: 'true',
                        type: 'select',
                        select: {default: '', options:[
                            {value: 0, label: '\u003c\u00A0\u00A01'},
                            {value: 1, label: 1},
                            {value: 2, label: 2},
                            {value: 3, label: 3},
                            {value: 4, label: 4},
                            {value: 5, label: 5},
                            {value: 6, label: 6},
                            {value: 7, label: 7},
                            {value: 8, label: 8},
                            {value: 9, label: 9},
                            {value: 10, label: 10},
                            {value: 11, label: 11},
                            {value: 12, label: 12},
                            {value: 13, label: 13},
                            {value: 14, label: 14},
                            {value: 15, label: 15},
                            {value: 16, label: 16},
                            {value: 17, label: 17},
                            ],
                        selected: ''
                        }
                    }
                }],
            guestTypeValues: [],
            rateCodeApplied: false
        };

        var factory = {
            reset: reset,
            resetDates: resetDates,
            addGuest: addGuest,
            removeGuest: removeGuest,
            addChild: addChild,
            removeChild: removeChild,
            data: {},
            codeAppliedMessage: ""
        };

        activate();

        return factory;

        function activate() {
            reset();
        }

        function reset() {
            factory.data = angular.copy(defaults);
            resetDates();
        }

        // sets guest types from static data
        function setGuestTypes(){
            var test=true;
        }

        function resetDates() {
            var checkIn = new Date();
            var checkOut = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
            
            checkIn.setHours(0, 0, 0, 0);
            checkOut.setHours(0, 0, 0, 0);

            factory.data.check_in = checkIn;
            factory.data.check_out = checkOut;
        }

        function addGuest($index, maxOccupancy){
            if (occupancyMaxIsReached(maxOccupancy)) {
                return;
            }

            factory.data.guestTypes[$index].count++

            factory.data.guestTypeValues.push({label: factory.data.guestTypes[$index].label,
                values: factory.data.guestTypes[$index].values});
        }

        function removeGuest($index, minOccupancy){
            if (occupancyMinIsReached(minOccupancy) || 
                factory.data.guestTypes[$index].count === 0) {
                return;
            }

            factory.data.guestTypes[$index].count--
            factory.data.guestTypeValues.pop();
        }
        function addChild(maxOccupancy) {
            if (occupancyMaxIsReached(maxOccupancy)) {
                return;
            }

            factory.data.children++;
            factory.data.childrenAges.push(undefined);
        }

        function removeChild(minOccupancy) {
            if (occupancyMinIsReached(minOccupancy)) {
                return;
            }

            if (factory.data.children > 0) {
                factory.data.children--;
                factory.data.childrenAges.pop();
            }
        }

        function occupancyMaxIsReached(maxOccupancy) {
            var limit = 8;

            if (maxOccupancy) {
                limit = maxOccupancy;
            }

            return (factory.data.adults + factory.data.children) >= limit;
        }

        function occupancyMinIsReached(minOccupancy) {
            var limit = 1;

            if (minOccupancy) {
                limit = minOccupancy;
            }

            return (factory.data.adults + factory.data.children) <= limit;
        }
    }
})();