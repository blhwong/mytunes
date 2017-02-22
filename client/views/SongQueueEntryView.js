// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //this.model.play();
      //this.model.ended();
      this.model.dequeue(); // MIGHT NEED TO FIX
    }
  },

  render: function() {
    // debugger;
    return this.$el.html(this.template(this.model.attributes));
  }});
