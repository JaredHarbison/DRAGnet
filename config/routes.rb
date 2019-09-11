Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do 
      resources :appearances 
      resources :queens
      resources :seasons
      resources :trivia
      resources :quotes
    end 
  end
  resources :users
end
