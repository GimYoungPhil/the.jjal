define([
  'jquery',
  'underscore',
  'backbone',
  'collections/jjalbang.infinite',
  'views/jjal',
  'text!views/blog.html',
  'text!views/paginator.html',
  'text!views/dashboard.infinite.html'
], function($, _, Backbone, JjalbangCollection, JjalView, blogTemplate, pageTemplate, dbTemplate){
  'use strict';

  var NavbarView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(dbTemplate),
    blogTemplate: _.template(blogTemplate),
    pageTemplate: _.template(pageTemplate),
    events: {
      'click a.addJjal': 'addJjal'
    },

    initialize: function() {
      this.isLoading = false;
      this.collection = new JjalbangCollection();
      this.listenTo(this.collection, 'reset', this.renderJJalbang);
      this.listenTo(this.collection, 'add', this.renderJJal);
      this.collection.fetch({reset:true});
    },

    render: function() {
      this.$el.html( this.template() );
      this.$listEl = this.$('.jjalbangList');
      this.$infoEl = this.$('.blogInfo');
      this.$pageEl = this.$('.paginator');
      this.$loadEl = this.$('.jjalLoding');
      return this;
    },

    renderJJalbang: function() {
      this.$listEl.empty();
      this.collection.each( function( jjal ) {
        this.renderJJal( jjal );
      }, this );
      this.renderBlogInfo();
      this.$loadEl.hide();
      // this.renderPaginator();
    },

    renderJJal: function(jjal) {
      var jjal = new JjalView({model: jjal});
      this.$listEl.append(jjal.render().el);
    },

    renderBlogInfo: function() {
      var blogInfo = this.collection.state.blogInfo;
      this.$infoEl.html(this.blogTemplate(blogInfo));
      this.$infoEl.addClass('fade in');
    },

    addJjal: function(e) {
      e.preventDefault();
      this.$loadEl.show();
      this.collection.getNextPage();
    },

    // renderPaginator: function() {
    //   var state = this.collection.state;
    //   state.hasPreviousPage = this.collection.hasPreviousPage();
    //   state.hasNextPage = this.collection.hasNextPage();
    //   state.currentPageRange = this.collection.getPageRange();
    //   this.$pageEl.html(this.pageTemplate(state));
    // },

    // firstPage: function(e) {
    //   e.preventDefault();
    //   this.collection.getFirstPage({reset: true});
    // },

    // previousPage: function(e) {
    //   e.preventDefault();
    //   this.collection.getPreviousPage({reset: true});
    // },

    // nextPage: function(e) {
    //   e.preventDefault();
    //   this.collection.getNextPage({reset: true});
    // },

    // lastPage: function(e) {
    //   e.preventDefault();
    //   this.collection.getLastPage({reset: true});
    // },

    // getPage: function(e) {
    //   e.preventDefault();
    //   var pageNumber = $(e.target).data('page');
    //   this.collection.getPage(pageNumber,{reset: true});
    // }
  });

  return NavbarView;
});