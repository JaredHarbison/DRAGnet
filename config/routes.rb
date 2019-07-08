Rails.application.routes.draw do
  scope :api do
    resources :queens, only: [ :index, :show, :update, ] do 
      resources :trivium
    end 
  end
end
