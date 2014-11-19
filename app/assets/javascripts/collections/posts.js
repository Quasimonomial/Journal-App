Posts.Collections.Posts = Backbone.Collection.extend({
  model: Posts.Models.Post,
  url: '/posts'
});