Posts.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
  },
  routes: {
    "" : "index",
    "posts/:id": "show" 
  },
  show: function(id){
    var post = Posts.Collections.posts.getOrFetch(id);

    var showView = new Posts.Views.PostShow({
      model: post
    });
    
    showView.render();
    this.$rootEl.html(showView.$el);
  },
  index: function(){
    var posts = Posts.Collections.posts;
    
    posts.fetch();
      
    var indexView = new Posts.Views.PostsIndex({
      collection: posts
    });
    
    indexView.render();
    
    this.$rootEl.html(indexView.$el);

  }
});