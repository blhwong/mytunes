// SongQueueView.js - Defines a backbone view class for the song queue.
//     fakeSongs = new SongQueue([
//       {
//         artist: 'data',
//         url: '/test/testsong.mp3',
//         title: 'test song'
//       },
//       {
//         artist: 'data',
//         url: '/test/testsong2.mp3',
//         title: 'test song 2'
//       }
//     ]);
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // var a = new SongQueueEntryView();
    _.each(this.collection.models, function(song) {
      var a = new SongQueueEntryView(song);
      a.render();
    });
    this.listenTo(this.collection, 'add', function() {
      this.render();
    });

  },

  render: function() {
    return this.$el;
  }

});
