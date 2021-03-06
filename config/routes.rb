Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :update]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :show]
    resource :bookonshelf, only: [:show, :update]
    resources :bookonshelves, only: [:index, :create]
  end

end
