class Api::BoardsController < ApplicationController

  def index
    render json: Board.all
  end

  def show
    @board = Board.find(params[:id])
    render json: @board
  end 

  def userBoards
    render json: current_user.boards.kept
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render json: @board
    else
      render json: { errors: @board.errors}, status: :unprocessable_entity
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render json: @board
    else
      render json: { errors: @board.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    Board.find(params[:id]).discard
    render json: { message: 'Board Deleted'}
  end

  def board_colors
    render json: Board.find(params[:id]).colors
  end

  private

    def board_params
      params.require(:board).permit(:title, :desc)
    end
end