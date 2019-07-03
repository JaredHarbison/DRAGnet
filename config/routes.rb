Rails.application.routes.draw do
  scope :api do
    resources :queens, only: [ :index, :show, :update, ]
  end
end
