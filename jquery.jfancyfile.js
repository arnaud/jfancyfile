(function($) {
  $.fn.jfancyfile = function(options) {
    // Setup default settings
    var settings = jQuery.extend({
      'width': 200,
      'height': 160
    }, options);
    this.wrap(
      $('<div>')
        .addClass('fancy-upload')
        .width(settings.width)
        .height(settings.height)
    );
    for(var i=1; i<=2+settings.width/68; i++) {
      this.before(    
        $('<input>', {
          type: 'file',
          name: this.attr('name') || 'file',
          id: 'fancy-upload-'+i
        }).addClass('fancy-upload-file')
      );
    }
    return this;
  };
})(jQuery);
