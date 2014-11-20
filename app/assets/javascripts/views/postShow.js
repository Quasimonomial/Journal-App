Posts.Views.PostShow = Backbone.View.extend({
  events: {
    "dblclick .post-title": "openTitle",
    "dblclick .post-body": "openBody",
    "blur .post-title-edit": "closeTitle",
    "blur .post-body-edit": "closeBody"
  },
  
  template : JST["postShow"],
  
  initialize: function(){
    this.listenTo(this.model, "change sync", this.render);
    this.listenTo(this.model, "destroy", this.remove)
  },
  
  render: function(){
    var content = this.template({ post: this.model });
    this.$el.html(content);
  },
  
  openTitle: function(event){
    var $title = $(event.currentTarget);
    var $input = $("<input>").attr({
     "type": "text",
      "value": $title.text()
    })
    .addClass("post-title-edit");
    
    $title.replaceWith($input);
    $input.focus();
  },
  
  closeTitle: function(event){
    var $title = $(event.currentTarget);
    var $display = $("<h1></h1>");
    $display.append($title.val()).addClass("post-title");
    
    $title.replaceWith($display);
    
    this.model.set('title', $title.val());
    this.model.save();
    
    
  },
  
  openBody: function(event){
    var $body = $(event.currentTarget);
    var $input = $("<textarea>").text($body.text())
      .addClass("post-body-edit");
  
    $body.replaceWith($input);
    $input.focus();
    
  },
  
  closeBody: function(event){
    var $body = $(event.currentTarget);
    var $display = $("<p>");
    $display.append($body.text())
      .addClass("post-body");
    
    $body.replaceWith($display);
    
    //this.model.set("body", $body.text())
    //this.model.save();
  },
  

  
})