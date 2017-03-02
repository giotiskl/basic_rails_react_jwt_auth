Rails.application.routes.draw do
  post '/login', to: "authentication#authenticate"
  
  get '/users/:id', to: "users#show"
end
