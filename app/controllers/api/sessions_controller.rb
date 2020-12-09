class Api::SessionsController < ApplicationController
    def create
      if @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        login(@user)
        render "api/users/show"
      else
        render json: ["Login or password is invalid."], status: 401
      end
    end
  
    def destroy
      if @user = current_user
        logout
        render json: {}
      end
    end
end
