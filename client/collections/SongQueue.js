// SongQueue.js - Defines a backbone model class for the song queue.
// ships.add([
//   {name: "Flying Dutchman"},
//   {name: "Black Pearl"}
// ]);
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.listenTo(this, 'add', function() {
      if (this.length < 2) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'dequeue', function() {
      this.shift();
    });
  },
  playFirst: function() {
    this.models[0].play();
  },
});