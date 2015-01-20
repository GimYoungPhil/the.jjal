'use strict';

require.config({
  paths: {
    jquery:     '../libs/jquery-2.1.3/jquery',
    underscore: '../libs/underscore-1.7.0/underscore',
    backbone:   '../libs/backbone-1.1.2/backbone',
    // bootstrap:  '../libs/bootstrap-3.3.1/dist/js/bootstrap',
    text:       '../libs/require-2.1.15/text'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap'
    }
  }

});

require([
  'backbone',
  'routers/router'
], function(Backbone, AppRouter){
  var router = new AppRouter();
  Backbone.history.start({pushState: false});
});
