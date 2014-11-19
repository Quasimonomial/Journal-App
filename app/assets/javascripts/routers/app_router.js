Posts.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
  },
  routes: {
    "" : "index",
    "posts/:id": "show" 
  },
  show: function(id){
    var post = new Posts.Models.Post({id: id});
    post.fetch();
      
    var showView = new Posts.Views.PostShow({
      model: post
    });
    showView.render();
    this.$rootEl.html(showView.$el);
  },
  index: function(){
    var posts = new Posts.Collections.Posts();
    posts.fetch();
      
    var indexView = new Posts.Views.PostsIndex({
      collection: posts
    });
    
    indexView.render();
    
    this.$rootEl.html(indexView.$el);

  }
});