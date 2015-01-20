define([
  'jquery',
  'underscore',
  'backbone',
  'collections/jjalbang',
  'text!views/dashboard.html'
], function($, _, Backbone, JjalbangCollection, dbTemplate){
  'use strict';

  var NavbarView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(dbTemplate),
    events: {
      'click button.moveLogin': 'moveLogin',
      'click button.moveSignup': 'moveSignup'
    },

    initialize: function(options) {

      this.collection = new JjalbangCollection();
      this.listenTo(this.collection, 'reset', this.dataload);
      this.collection.fetch();

    },

    dataload: function(data) {
      console.log(data);
    },
    render: function() {
      this.$el.append( this.template() );
      return this;
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