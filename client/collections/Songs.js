// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {

    $.ajax({
      url: 'http://parse.CAMPUS.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function(data) {
        console.log('Success!', data);
        // this.add(data);
      },
      error: function() {
        console.log('Error');
      }
    });
  },

});