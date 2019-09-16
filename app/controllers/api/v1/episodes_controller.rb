class Api::V1::EpisodesController < ApplicationController
    before_action :set_episode, only: [:show, :update, :destroy]
  
    # GET /episodes
    def index
      @episodes = Episode.all
  
      render json: @episodes
    end
  
    # GET /episodes/1
    def show
      render json: @episode
    end
  
    # POST /episodes
    def create
      @episode = Episode.new(episode_params)
      if @episode.save
        render json: @episode, status: :created, location: @episode
      else
        
        render json: @episode.errors, status: :unprocessable_entity
      end
    end
  
    def episode_url(episode)
  
    end 
  
    # PATCH/PUT /episodes/1
    def update
      if @episode.update(episode_params)
        render json: @episode
      else
        render json: @episode.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /episodes/1
    def destroy
      Episode.find(params[:id]).destroy
      #@episode.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_episode
        @episode = Episode.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def episode_params
        params.require(:episode).permit(:id, :queen_id, :content, 
                                        appearances_attributes: [:queen_id, :season_id], )
      #  params.fetch(:episode, {})
      end
  end
  