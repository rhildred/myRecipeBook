define(["text!../../footer.html", "jquery", "underscore"], function(sFooter) {
  jQuery.fn.footer = function() {
      var fTemplate = _.template(sFooter);
      return this.html(fTemplate({}));
  };
});
