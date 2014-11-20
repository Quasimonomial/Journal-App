Posts.Views.PostsIndex = Backbone.View.extend({
  template: JST["postsIndex"],
  
  initialize: function () {
    this.listenTo(
      this.collection, 
      "sync change:title remove reset", 
      this.render
    );
  },
  
  render: function(){
    console.log('rendering index view');
    var content = this.template({ posts: this.collection});
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click .delete-post-button": "deletePost"
  },
  
  deletePost : function(event){
    var id = $(event.currentTarget).data("post-id");
    var post  = this.collection.get(id);
    post.destroy();
    //Backbone.history.navigate("/#", {trigger: true});
  }
  
  
}) 




