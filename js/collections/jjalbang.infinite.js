define([
  'underscore',
  'backbone',
  'paginator',
  'models/jjal'
], function(_, Backbone, PageableCollection, JjalModel) {
  'use strict';

  var JjalbangCollection = Backbone.PageableCollection.extend({
    mode: "server",
    model: JjalModel,
    url: 'http://the-jjal.herokuapp.com/api/jjalbang/photo',
    sync : function(method, collection, options) {
      options.dataType = "jsonp";
      return Backbone.sync(method, collection, options);
    },

    state: {
      firstPage: 0,
      currentPage: 0,
      pageSize: 20,
      pageRange: 10
    },

    queryParams: {
      totalPages: null,
      totalRecords: null,
      currentPage: null,
      pageSize: 'limit',
      offset: function () {
        return (this.state.currentPage) * this.state.pageSize;
      }
    },

    getPageRange: function() {
      var totalPages  = this.state.totalPages;
      var pageRange   = this.state.pageRange;
      var currentPage = this.state.currentPage;
      var rangeList = _.range(0, totalPages, pageRange);

      var startIndex;
      var endIndex;
      var index = 0
      var length = rangeList.length;

      for (index; index < length; index++) {
        if (currentPage < rangeList[ index ]) {
          startIndex = rangeList[ index - 1 ];
          endIndex = rangeList[index];
          break;
        } else {
          startIndex = rangeList[ index ];
          endIndex = totalPages;
        }
      };
      return _.range(startIndex, endIndex);
    },

    // parse: function(response) {
    //   return response['posts'];
    // },

    parseState: function (response) {
      return {
        totalRecords: response['total_posts'],
        blogInfo: response['blog']
      };
    },

    parseRecords: function (response) {
      return response['posts'];
    }
  });

  return JjalbangCollection;
});