'use strict';

require.config({
  paths: {
    jquery:     '../libs/jquery-2.1.3/jquery',
    underscore: '../libs/underscore-1.7.0/underscore',
    backbone:   '../libs/backbone-1.1.2/backbone',
    material:   '../libs/materialize-0.95.0/js/materialize',
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
    material: {
      deps: ['jquery'],
      exports: 'Material'
    }
  }

});

require([
  'backbone',
  // 'material',
  'routers/router'
], function(Backbone, AppRouter){
  var router = new AppRouter();
  Backbone.history.start({pushState: false});
});
