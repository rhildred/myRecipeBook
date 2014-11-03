define(["jquery", "bootstrap"], function (jQuery) {
    jQuery.fn.singlePage = function () {
        // Check the initial Position of the Sticky Header
        var stickyHeader = this;
        var stickyHeaderTop = stickyHeader.offset().top;
        var stickyHeaderHeight = this.outerHeight(true);

        function toggleHeader() {
            stickyHeader.width(stickyHeader.parent().width());
            var nTop = jQuery(window).scrollTop();
            if (nTop > stickyHeaderTop) {
                stickyHeader.css({
                    position: 'fixed',
                    top: '0px'
                });
                jQuery('#stickyalias').css('display', 'block');
            } else {
                stickyHeader.css({
                    position: 'static',
                    top: '0px'
                });
                jQuery('#stickyalias').css('display', 'none');
            }
            return nTop;

        }

        jQuery(window).bind("scroll resize", function () {
            var nTop = toggleHeader();
            var aAnchors = stickyHeader.find('a');
            for (var n = aAnchors.length - 1; n >= 0; n--) {
                var sHref = aAnchors[n].href.split("/").pop().replace("index.html", "");
                if (sHref.length > 1) { // need to make sure there is something more than a pound sign here
                    var nDivTop = jQuery(sHref).offset().top;
                    if (nDivTop <= nTop + stickyHeaderHeight) {
                        makeActive(sHref);
                        return;
                    }

                }
            }
            makeActive(".");
        });

        function makeActive(sHref) {
            sHref = sHref.split("/").pop();
            stickyHeader.find(".active").removeClass("active");
            jQuery('a[href*="' + sHref + '"]').closest('li').addClass("active");
        }

        window.onhashchange = function () {
            var sPage = window.location.hash;
            if (sPage.split("/").pop() == "") sPage += ".";
            makeActive(sPage);
        };

        stickyHeader.find('a').click(function () {
            var nOffset = stickyHeaderHeight;
            // first lets see if the stickyHeader is static
            if (stickyHeader.css('position') != "fixed") nOffset *= 2;
            //Animate
            jQuery('html, body').stop().animate({
                scrollTop: jQuery(jQuery(this).attr('href')).offset().top - nOffset
            }, 400);
            return true;
        });

        sHash = window.location.hash;
        if (sHash != "") {
            makeActive(sHash);
            if (stickyHeaderTop < jQuery(sHash).offset().top) // we need to move out from under fixed header
                jQuery(window).scrollTop(jQuery(sHash).offset().top - stickyHeaderHeight);
        }
        toggleHeader();
        require(["index.html"], function (page) {
            if (typeof page !== 'undefined') page();
        });

    };
});
