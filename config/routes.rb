Rails.application.routes.draw do
  root 'welcome#index'
  namespace :api do
    namespace :v1 do 
      resources :appearances 
      resources :episodes
      resources :queens
      resources :seasons
      resources :trivia
      resources :quotes
    end 
  end
  resources :users
end
