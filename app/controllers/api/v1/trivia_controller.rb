class Api::V1::TriviaController < ApplicationController
  before_action :set_trivium, only: [:show, :update, :destroy]

  # GET /trivia
  def index
    @trivia = Trivium.all

    render json: @trivia
  end

  # GET /trivia/1
  def show
    render json: @trivium
  end

  # POST /trivia
  def create
    @trivium = Trivium.new(trivium_params)
    if @trivium.save
      render json: @trivium, status: :created, location: @trivium
    else
      render json: @trivium.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trivia/1
  def update
    if @trivium.update(trivium_params)
      render json: @trivium
    else
      render json: @trivium.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trivia/1
  def destroy
    Trivium.find(params[:id]).destroy
    #@trivium.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trivium
      @trivium = Trivium.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trivium_params
      params.require(:trivium).permit(:id, :queen_id, :content)
    #  params.fetch(:trivium, {})
    end
end
