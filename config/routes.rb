Rails.application.routes.draw do
  scope :api do
    resources :queens #do
    resources :trivia
    end
  end
#end

#, only: [ :index, :show, :update, ]
