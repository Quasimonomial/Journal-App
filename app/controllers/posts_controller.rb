class PostsController < ApplicationController
  def index
    @index = Post.all
    render json: @index
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end
  
  def update
  end
  
  def show
  end
  
  def destroy
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
