(function() {
    'use strict';

    angular
        .module(window._pegsIbeEnv.moduleName)
        .directive('teromacStickyHeader', teromacStickyHeader);

    function teromacStickyHeader() {
        var directive = {
            link: link,
            restrict: 'EAC'
        };

        return directive;

        function link(scope, element, attrs) {
            function updateHeader() {
                var scrollY = getCurrentScrollPositionY();
                var isStaticHeaderMobile = element.innerWidth() <= 768 && !element.hasClass('teromac-sticky-header-mobile');

                var headerElement = element.find('.teromac-header');
                var headerHeight = parseInt(headerElement.height());

                var logoElement = element.find('.teromac-hotel-logo');
                var logoTopPadding = parseInt(logoElement.css('padding-top'));
                var logoHeight = parseInt(logoElement.innerHeight());

                if (scrollY > (logoHeight - headerHeight) || isStaticHeaderMobile) {
                    element.addClass('teromac-scrolled teromac-scrolled-deeper');
                    
                    var contentMask = element.find('.teromac-content-mask-inner');
                    var contentElement = angular.element('.teromac-content > div');
                    var contentWidth = parseInt(contentElement.innerWidth());
                    var contentTopPadding = parseInt(contentElement.css('padding-top'));
                    
                    headerElement.css('padding-bottom', contentTopPadding + 'px');
                    contentMask.css({
                        'width': contentWidth + 'px',
                        'height': contentTopPadding + 'px'
                    });
                } else if (scrollY >= logoTopPadding) {
                    element.removeClass('teromac-scrolled-deeper');
                    element.addClass('teromac-scrolled');
                    headerElement.css('padding-bottom', 0);
                } else {
                    element.removeClass('teromac-scrolled teromac-scrolled-deeper');
                    headerElement.css('padding-bottom', 0);
                }
            }

            addEventHandler(window, 'scroll', updateHeader);
            addEventHandler(window, 'resize', updateHeader);

            updateHeader();
        }
        
        function getCurrentScrollPositionY() {
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