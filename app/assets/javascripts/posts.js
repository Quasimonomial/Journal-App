window.Posts = {
  Collections: {}, 
  Models: {},
  Views: {},
  Routers: {}
};

$(function(){
  new Posts.Routers.AppRouter({rootEl: "#main"});
  Backbone.history.start();// I am sure this is important
});
