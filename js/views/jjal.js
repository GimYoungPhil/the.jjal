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
    className: 'col-xs-',
    template: _.template(jjTemplate),
    events: {
      'click .photo_url': 'selectURL'
    },

    initialize: function() {
    },

    render: function() {
      this.setDisplayImage();
      this.$el.append( this.template( this.model.toJSON() ) );
      return this;
    },

    // 모델에서 디스플레이 이미지 셋을 선택한다.
    setDisplayImage: function() {
      var photos = this.model.get('photos')[0]['alt_sizes'];
      var displayImage;
      _.each(photos, function(photo) {
        if( photo['width'] == '500') {
          displayImage = photo;
        }
      });
      if(!displayImage) {
        displayImage = photos[0];
      }

      this.model.set('displayImage', displayImage);
    },

    selectURL: function(e) {
      $(e.target).select()
    }
  });

  return JjalView;
});