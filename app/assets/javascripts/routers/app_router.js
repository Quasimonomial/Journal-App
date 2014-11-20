Posts.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
  },
  routes: {
    "" : "index",
    "posts/new" : "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
    
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

  },
  edit: function(id){
    var post = Posts.Collections.posts.getOrFetch(id);

    var editView = new Posts.Views.PostForm({
      model: post
    });
    
    this.$rootEl.html(editView.$el);
  },
  new: function(){
   
    var post = new Posts.Models.Post();

    var newView = new Posts.Views.PostForm({
      model: post
    });
    
    newView.render();
    this.$rootEl.html(newView.$el);
  }
  
});