(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .directive('dateRangePicker', dateRangePicker);

    function dateRangePicker() {
        var firstDayOfWeek = 0; // 0 = Sunday, 1 = Monday
        var daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var directive = {
            restrict: 'AE',
            link: link,
            templateUrl: 'app/common/components/dateRangePicker/view.html',
            scope: {
                startDate: '=',
                endDate: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {
            scope.daysOfWeek = daysOfWeek;
            scope.monthNames = monthNames;
            
            scope.today = new Date();
            scope.today.setHours(0, 0, 0, 0);
            scope.currentMonth = scope.today.getMonth();
            scope.currentYear = scope.today.getFullYear();
            scope.displayMonth = scope.currentMonth;
            scope.displayYear = scope.currentYear;
            
            scope.startDate = scope.startDate || null;
            scope.endDate = scope.endDate || null;
            scope.tempEndDate = null;
            scope.desktopViewIndex = 0;

            scope.nextDesktopViewIndex = function() {
                if (scope.desktopViewIndex < scope.currentMonths.length - 2) {
                    scope.desktopViewIndex = scope.desktopViewIndex + 1;
                }
            }

            scope.prevDesktopViewIndex = function() {
                if (scope.desktopViewIndex > 0) {
                    scope.desktopViewIndex = scope.desktopViewIndex - 1;
                }
            }
            
            scope.getCurrentMonths = function () {
                var month = scope.currentMonth;
                var year = scope.currentYear;

                scope.currentMonths = [];

                for (var i = 0; i < 12; i++) {
                    if (i !== 0) {
                        var nextMonthYear = incrementMonth(month, year);
                        month = nextMonthYear.month;
                        year = nextMonthYear.year;
                    }

                    scope.currentMonths.push({
                        month: scope.monthNames[month],
                        year: year,
                        monthDates: getMonthDates(year, month)
                    });
                }
            };

            scope.getCurrentMonths();

            scope.setDate = function (date) {
                if(!date || date < scope.today){
                    return;
                }

                if (!scope.startDate) {
                    scope.startDate = date;
                } else if (!scope.endDate && scope.startDate < date) {
                    scope.endDate = date;
                } else {
                    scope.startDate = date;
                    scope.endDate = null;
                }
            };

            scope.setTempEndDate = function (date) {
                scope.tempEndDate = date;
            };

            scope.resetDates = function () {
                scope.startDate = null;
                scope.endDate = null;
                scope.tempEndDate = null;
            };

            scope.goToNextMonth = function () {
                if (scope.displayMonth === 11) {
                    scope.displayYear = scope.displayYear + 1;
                    scope.displayMonth = 0;
                } else {
                    scope.displayMonth = scope.displayMonth + 1;
                }
                
                scope.getCurrentMonths();
            };

            scope.goToPrevMonth = function () {
                if (scope.displayMonth <= scope.currentMonth && scope.displayYear <= scope.currentYear) {
                    return;
                }

                if (scope.displayMonth === 0) {
                    scope.displayYear = scope.displayYear - 1;
                    scope.displayMonth = 11;
                } else {
                    scope.displayMonth = scope.displayMonth - 1;
                }

                scope.getCurrentMonths();
            };
        }

        function getWeekStartDate(date) {
            var weekStartDate = new Date(date.getTime());
            
            while (weekStartDate.getDay() !== firstDayOfWeek) {
                weekStartDate.setDate(weekStartDate.getDate() - 1);
            }
            
            return weekStartDate;
        }

        function getMonthDates(year, month) {
            if ((typeof year !== 'number') || (year < 1970)) {
                throw 'Parameter 1 must be a number representing a year greater than or equal to 1970';
            }

            if ((typeof month !== 'number') || (month < 0) || (month > 11)) {
                throw 'Parameter 2 must be a number representing a month between 0 and 11 (Jan is 0)';
            }
            
            var weeks = [],
                week = [],
                i = 0,
                date = getWeekStartDate(new Date(year, month, 1));
            
            do {
                for (i = 0; i < daysOfWeek.length; i++) {
                    week.push(date.getMonth() === month ? date : null);

                    date = new Date(date.getTime());
                    date.setDate(date.getDate() + 1);
                }

                weeks.push(week);
                week = [];
            } while ((date.getMonth() <= month) && (date.getFullYear() === year));
            
            return weeks;
        }

        function incrementMonth(month, year) {
            if (month === 11) {
                month = 0;
                year = year + 1;
            } else {
                month = month + 1;
            }

            return {
                month: month,
                year: year
            }
        }
    }
})();