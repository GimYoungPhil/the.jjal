define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/dashboard',
  'views/info',
], function($, _, Backbone, NavbarView, DashboardView, InfoView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    mainDom: $('.main'),
    routes: {
      '': 'redirect',
      'dashboard': 'showDashboard',
      'info': 'showInfo',
      '*error': 'showError'
    },

    initialize: function() {
      this.navbarView = new NavbarView();
    },

    redirect: function() {
      this.navigate("/dashboard", {trigger: true});
    },

    showDashboard: function() {
      var dbView = new DashboardView();
      this.changeCurrentView(dbView);
    },

    showInfo: function() {
      var iView = new InfoView();
      this.changeCurrentView(iView);
    },

    showError: function() {
    },

    changeCurrentView: function(newView) {
      if (this.currentView) {
        this.currentView.remove();
      }
      this.currentView = newView;
      this.mainDom.html(this.currentView.render().el);
    }
  });

  return AppRouter;
});
