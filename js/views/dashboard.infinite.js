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
      'click h2': 'clickH2',
      'scroll .jjalbangList': 'checkScroll'
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
      return this;
    },

    renderJJalbang: function() {
      this.$listEl.empty();
      this.collection.each( function( jjal ) {
        this.renderJJal( jjal );
      }, this );
      this.renderBlogInfo();
      // this.renderPaginator();
    },

    renderJJal: function(jjal) {
      var jjal = new JjalView({model: jjal});
      this.$listEl.append(jjal.render().el);
    },

    renderBlogInfo: function() {
      var blogInfo = this.collection.state.blogInfo;
      this.$infoEl.html(this.blogTemplate(blogInfo));
    },

    clickH2: function() {
      console.log('clickH2');
    },

    checkScroll: function () {
      console.log('checkScroll');
      var triggerPoint = 100; // 100px from the bottom
        if( !this.isLoading && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight ) {
          this.collection.page += 1; // Load next page
          this.loadResults();
        }
    },

    loadResults: function () {
      var that = this;
      // we are starting a new load of results so set isLoading to true
      this.isLoading = true;
      // fetch is Backbone.js native function for calling and parsing the collection url
      this.collection.fetch({ 
        success: function (tweets) {
          // Once the results are returned lets populate our template
          $(that.el).append(_.template(TwitterListTemplate, {tweets: tweets.models, _:_}));
          // Now we have finished loading set isLoading back to false
          that.isLoading = false;
        }
      });      
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