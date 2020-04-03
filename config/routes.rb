Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :boards
    get '/current_user_boards', to: 'boards#userBoards'
  end

end

