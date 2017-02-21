// SongQueue.js - Defines a backbone model class for the song queue.
// ships.add([
//   {name: "Flying Dutchman"},
//   {name: "Black Pearl"}
// ]);
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    // this.listenTo(this, 'add', this.playFirst);
    // debugger;
    this.listenTo(this, 'add', function() {
      // debugger;
      if (this.length < 2) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'ended', function() {
      // debugger;
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'dequeue', function() {
      // debugger;
      this.shift();
    });
  },
  playFirst: function() {
    // model.play();
    debugger;
    this.models[0].play();
  },
  // remove: function(target) {
  //   debugger;
  // }

});