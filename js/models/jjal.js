define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';

  var JjalModel = Backbone.Model.extend({
    defaults: {
      post_url: '',
      date: '',
      timestamp: '',
      note_count: 0,
      photos: []
    }
  });

  return JjalModel;
});