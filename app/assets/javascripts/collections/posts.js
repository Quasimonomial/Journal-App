Posts.Collections.Posts = Backbone.Collection.extend({
  model: Posts.Models.Post,
  url: '/posts',
  
  getOrFetch: function(id){
    var posts = this;
    var post = this.get(id);
    
    if (post) {
      post.fetch();
    } else {
      post = new Posts.Models.Post({id: id});
      post.fetch({
        success: function(){ posts.add(post) }
      });
    }
    return post;
  }
});

Posts.Collections.posts = new Posts.Collections.Posts();
