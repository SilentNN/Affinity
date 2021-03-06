class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end
    
    def index
        @users = User.all
        render :index
    end
    
    def update
        @user = User.find_by(id: params[:id])
        if @user.id == current_user.id && @user.update(user_params)
            render :show
        else
            render json: ["Something went wrong!"], status: 401
        end
    end
    
    def destroy
        @user = User.find_by(id: params[:id])
        if @user.id == current_user.id && @user.destroy
            render :show
        else
            render json: ["Something went wrong!"], status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :username)
    end
end
