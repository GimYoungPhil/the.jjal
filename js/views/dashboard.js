define([
  'jquery',
  'underscore',
  'backbone',
  'collections/jjalbang',
  'views/jjal',
  'text!views/dashboard.html'
], function($, _, Backbone, JjalbangCollection, JjalView, dbTemplate){
  'use strict';

  var NavbarView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(dbTemplate),
    events: {
    },

    initialize: function() {
      this.collection = new JjalbangCollection();
      this.listenTo(this.collection, 'reset', this.renderJJalbang);
      this.listenTo(this.collection, 'add', this.renderJJal);
      this.collection.fetch({reset:true});
    },

    render: function() {
      this.$el.append( this.template() );
      this.$listEl = this.$('.jjalbangList');
      return this;
    },
    renderJJalbang: function() {
      this.collection.each( function( jjal ) {
        this.renderJJal( jjal );
      }, this );
    },
    renderJJal: function(jjal) {
      var jjal = new JjalView({model: jjal});
      this.$listEl.append(jjal.render().el);
    },
    moveLogin: function() {
      window.location.href = '/account.html#login';
    },
    moveSignup: function() {
      window.location.href = '/account.html#signup';
    }
  });

  return NavbarView;
});