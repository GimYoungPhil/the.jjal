define([
  'underscore',
  'backbone',
  'models/jjal'
], function(_, Backbone, JjalModel) {
  'use strict';

  var JjalbangCollection = Backbone.Collection.extend({
    model: JjalModel,
    // url: '/api/bottles',

    url: ['http://api.tumblr.com/v2/blog/n-i-c-e-d-r-e-a-m.tumblr.com/posts/photo?',
          'api_key=rM6YqOaqy7HEizZNzLEGZYtTEgIB3Vc65zrlom2qyEPJV775gs',
          '&limit=20&offset=0'].join(''),

    absoluted: function () {
      return this.where({state: 'absolute'});
    },

    opened: function() {
      return this.where({state: 'open'});
    },

    emptied: function() {
      return this.where({state: 'empty'});
    }

  });

  return JjalbangCollection;
});