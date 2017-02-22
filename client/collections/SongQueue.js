// SongQueue.js - Defines a backbone model class for the song queue.
// ships.add([
//   {name: "Flying Dutchman"},
//   {name: "Black Pearl"}
// ]);
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.listenTo(this, 'add', function() {
      debugger;
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'dequeue', function(song) {
      // this.shift();
      this.remove(song);
    });
  },
  playFirst: function() {
    debugger;
    this.at(0).play();
  },
});