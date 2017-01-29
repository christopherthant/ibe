(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .directive('teromacStickySummaryBar', teromacStickySummaryBar);

    function teromacStickySummaryBar() {
        var directive = {
            link: link,
            restrict: 'EAC'
        };

        return directive;

        function link(scope, element, attrs) {
            function updateHeader(){
                var scroll = getCurrentScrollPositionY();
                
                var summaryBarInner = element.find('.teromac-summary-bar-inner');
                var contentTopOffset = angular.element('.teromac-content').offset().top;
                var headerHeight = angular.element('.teromac-header').height();
                var scrollOffset = contentTopOffset - headerHeight;

                if(scroll >= scrollOffset){
                    var contentElement = angular.element('.teromac-content > div');
                    var contentWidth = parseInt(contentElement.innerWidth());

                    summaryBarInner.css('width', contentWidth + 'px');
                    element.addClass('teromac-sticky-summary-bar-fixed');
                } else {
                    summaryBarInner.css('width', '100%');
                    element.removeClass('teromac-sticky-summary-bar-fixed');
                }
            }

            addEventHandler(window, 'scroll', updateHeader);
            addEventHandler(window, 'resize', updateHeader);

            updateHeader();
        }
        
        function getCurrentScrollPositionY(){
            return window.pageYOffset || document.documentElement.scrollTop;
        }

        function addEventHandler(element, eventType, handler) {
            if (element.addEventListener) {
                element.addEventListener(eventType, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventType, handler); 
            }
        }
    }
})();