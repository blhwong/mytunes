// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    debugger;
    //var thisSong = this;
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function(data) {
        // console.log('Success!', data);
        this.add(data.results);
        // debugger;
        //console.log(this);
        //debugger;
        //newSongs = new Songs(data.results);
        // var newSongs = new Songs(data.results);
        // app = new AppModel({library: newSongs});
      }.bind(this),
      error: function() {
        console.log('Error');
      }
    });
    // debugger;
  },

});