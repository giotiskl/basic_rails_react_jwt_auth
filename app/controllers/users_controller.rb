class UsersController < ApplicationController
  #skip_before_action :authenticate

  def show
    user = User.find(params[:id])

    render json: { user: {id: user.id, email: user.email} }
  end
end
