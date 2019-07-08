class QueensController < ApplicationController

    def index
      render json: Queen.all
    end
  
    def show
      @queen = Queen.find(params[:id])
      render json: @queen
    end
  
    def update
      if @queen.update(queen_params)
        render json: @queen
      else
        render json: { message: @queen.errors }, status: 400
      end
    end
  
    private
  
      def queen_params
        params.require(:queen).permit(:id, :drag_name, :real_name, :image, :social_media, trivium_attributes: [:id, :queen_id, :content])
      end
  
  end
  