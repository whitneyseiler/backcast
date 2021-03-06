var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.on('select', this.render());
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
