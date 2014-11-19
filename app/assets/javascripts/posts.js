window.Posts = {
  Collections: {}, 
  Models: {},
  Views: {}
};

$(function(){
  posts = new Posts.Collections.Posts()
  posts.fetch({
    success: function(collection){
      indexView = new Posts.Views.PostsIndex({
        collection: collection
      });
      
      $("body").append( indexView.render().$el );
    }
  })
});