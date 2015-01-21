define([
  'underscore',
  'backbone',
  'paginator',
  'models/jjal'
], function(_, Backbone, PageableCollection, JjalModel) {
  'use strict';

  var JjalbangCollection = Backbone.PageableCollection.extend({
    model: JjalModel,
    url: '/api/jjalbang/photo',

    state: {
      pageSize: 20
    },

    queryParams: {
      currentPage: "offset",
      pageSize: "limit"
    },

    parse: function(response) {
      return response['posts'];
    }
  });

  return JjalbangCollection;
});