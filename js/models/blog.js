define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';

  var BlogModel = Backbone.Model.extend({
    defaults: {
      title: '',
      name: '',
      posts: 0,
      url: '',
      updated: new Date(),
      description: '',
      likes: 0,
      followers: 0

      // "title": "nice-dream",
      // "name": "n-i-c-e-d-r-e-a-m",
      // "posts": 23854,
      // "url": "http://n-i-c-e-d-r-e-a-m.tumblr.com/",
      // "updated": 1421757728,
      // "description": "",
      // "is_nsfw": true,
      // "ask": true,
      // "ask_page_title": "Ask me anything",
      // "ask_anon": false,
      // "followed": false,
      // "can_send_fan_mail": true,
      // "share_likes": true,
      // "likes": 41590,
      // "twitter_enabled": false,
      // "twitter_send": false,
      // "facebook_opengraph_enabled": "N",
      // "tweet": "N",
      // "facebook": "N",
      // "followers": 438,
      // "primary": true,
      // "admin": true,
      // "messages": 6,
      // "queue": 0,
      // "drafts": 0,
      // "type": "public"
    }
  });

  return BlogModel;
});