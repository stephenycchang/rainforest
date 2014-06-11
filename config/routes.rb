Rails.application.routes.draw do

  get 'categories/show'

  resources :products do
    resources :reviews, :except => [:index, :show, :update, :destroy]

    collection do
      get 'search'
    end
  end
  
  resources :users, only: [:new, :create, :show]
  resources :sessions, only: [:new, :create, :destroy]
  resources :categories, only: [:show]

  root 'products#index'
  
end
