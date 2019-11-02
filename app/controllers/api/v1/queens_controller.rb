class Api::V1::QueensController < ApiController
  before_action :set_queen, only: [:show, :update, :destroy]

    def index
      render json: Queen.all
    end

    def show
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

    def set_queen
      @queen = Queen.find(params[:id])
    end

      def queen_params
        params.require(:queen).permit(:id, :drag_name, :real_name, :date_of_birth, :ethnicity, :hometown, :current_city, 
                                      :instagram, :facebook, :youtube, :website, :imdb, :twitter, :wikipedia,
                                      appearances_attributes: [:season_id],
                                      seasons_attribues: [:season_name], 
                                      trivia_attributes: [:queen_id, :content], 
                                      quotes_attributes: [:queen_id, :content], 
                                      )
      end

  end
