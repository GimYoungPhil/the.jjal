define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';

  var JjalModel = Backbone.Model.extend({
    defaults: {
      imageLink: '',
      // 이미지링크: ''
      description: '',
      // 설명,
      name: '',
      // 이름: '참이슬'
      type: '',
      //  종류: '소주'
      volume: '',
      // 용량: '750ml'
      alcohol: '',
      // 도수: '19.5%'
      author: {}
      // 작성자
    }
  });

  return JjalModel;
});