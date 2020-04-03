class Api::ColorsController < ApplicationController

  before_action :set_board

  def index
    render json: @board.colors
  end

  def show
    @color = @board.colors.find(params[:id])
    render json: @color
  end 

  def create
    @color = @board.colors.new(color_params)
    if @color.save
      render json: @color
    else
      render json: { errors: @color.errors}, status: :unprocessable_entity
    end
  end

  def update
    @color = @board.colors.find(params[:id])
    if @color.update(color_params)
      render json: @color
    else
      render json: { errors: @color.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    Color.find(params[:id]).destroy 
    render json: { message: 'Color Deleted'}
  end

  private

    def color_params
      params.require(:color).permit(:colorName, :hex)
    end

    def set_board
      @board = Board.find(params[:board_id])
    end
end
