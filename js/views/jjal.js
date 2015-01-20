define([
  'jquery',
  'underscore',
  'backbone',
  'models/jjal',
  'text!views/jjal.html'
], function($, _, Backbone, JjalModel, jjTemplate){
  'use strict';

  var JjalView = Backbone.View.extend({
    tagName: 'div',
    className: 'card',
    template: _.template(jjTemplate),
    events: {
      'click .mdi-navigation-more-vert': 'cardReveal',
      'click .mdi-navigation-close': 'cardReveal'
    },

    initialize: function() {
    },

    render: function() {
      this.$el.append( this.template( this.model.toJSON() ) );
      return this;
    },

    cardReveal: function() {
      this.$('.card-reveal').toggleClass('cardTransY100');
    }
  });

  return JjalView;
});