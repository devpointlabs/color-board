Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'


  namespace :api do
    resources :boards do
      resources :colors
    end
    get '/current_user_boards', to: 'boards#userBoards'
    resources :users, only: :update
    get '/board_colors/:id', to: 'boards#board_colors'
    post '/user_image', to: 'users#getImage'
  end
  get '*other', to: 'static#index'
end

