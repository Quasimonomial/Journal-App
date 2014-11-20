Posts.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
    this.$sidebar = this.$rootEl.find('.sidebar');
    this.$content = this.$rootEl.find('.content'); 
    var posts = Posts.Collections.posts;
    
    posts.fetch();
      
    var indexView = new Posts.Views.PostsIndex({
      collection: posts
    });
    
    indexView.render();
    
    this.$sidebar.html(indexView.$el);
  },
  
  routes: {
    "" : "root",
    "posts/new" : "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
  },
  
  root: function(){
    this.$content.empty();
  },

  show: function(id){
    var post = Posts.Collections.posts.getOrFetch(id);

    var showView = new Posts.Views.PostShow({
      model: post
    });
    
    showView.render();
    this.$content.html(showView.$el);
  },
  
  edit: function(id){
    var post = Posts.Collections.posts.getOrFetch(id);

    var editView = new Posts.Views.PostForm({
      model: post
    });
    
    this.$content.html(editView.$el);
  },
  
  new: function(){
   
    var post = new Posts.Models.Post();

    var newView = new Posts.Views.PostForm({
      model: post
    });
    
    newView.render();
    this.$content.html(newView.$el);
  }
  
});