Posts.Views.PostShow = Backbone.View.extend({
  template : JST["postShow"],
  
  initialize: function(){
    this.listenTo(this.model, "change sync", this.render);
  },
  
  render: function(){
    var content = this.template({ post: this.model });
    this.$el.html(content);
  }
})