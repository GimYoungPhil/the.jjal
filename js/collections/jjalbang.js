define([
  'underscore',
  'backbone',
  'models/jjal'
], function(_, Backbone, JjalModel) {
  'use strict';

  var JjalbangCollection = Backbone.Collection.extend({
    model: JjalModel,
    url: '/api/jjalbang/photo',

    parse: function(response) {
      return response['posts'];
    }
  });

  return JjalbangCollection;
});