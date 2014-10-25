define(["jquery", "jquery.single-page", "jquery.footer"], function() {
    //the jquery.nav.js and jquery.footer.js plugins have been loaded.
    jQuery(function() {
        jQuery(".navbar").singlePage();
        jQuery("#footer").footer();
    });
});
