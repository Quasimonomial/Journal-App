Posts.Views.PostForm = Backbone.View.extend({
  
  events: {
    "submit form": "formSubmit"
  },
  
  template : JST["postForm"],
  
  initialize: function(){
    this.listenTo(this.model, "change sync", this.render);
  },
  
  render: function(){
    var content = this.template({ post: this.model });
    this.$el.html(content);
  },
  
  formSubmit: function(event){
    event.preventDefault();
    var postData = $(event.currentTarget).serializeJSON();
    var that = this;
    if(this.model.isNew()){
      Posts.Collections.posts.create(postData.post, {
        success: function(model){
          Backbone.history.navigate("/posts/" + model.id, {trigger: true});
        },
        error: function(model, response){
          that.render();
          alert(JSON.parse(response.responseText).join(".\n"));
        }
      });
      
      
      
      
    } else{
      this.model.save(postData.post, {
        success: function(){
          Backbone.history.navigate("/posts/" + that.model.id, {trigger: true});
        },
        error: function(model, response){
          that.render();
          alert(JSON.parse(response.responseText).join(".\n"));
        }
      });
    }
  }
})