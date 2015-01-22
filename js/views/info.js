define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/info.html'
], function($, _, Backbone, template){
  'use strict';

  var InfoView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(template),
    events: {
    },

    initialize: function() {
    },

    render: function() {
      this.$el.html( this.template() );
      return this;
    }
  });

  return InfoView;
});