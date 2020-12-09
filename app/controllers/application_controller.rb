class ApplicationController < ActionController::Base
    private
  
    def current_user
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def logged_in?
      !!current_user
    end
  
    def login(user)
      session[:session_token] = user.reset_session_token!
      @current_user = user
    end
  
    def logout
      session[:session_token] = nil
      current_user.reset_session_token!
      @current_user = nil
    end
  
    def require_logged_in
      unless logged_in?
        render json: { base: ['Please log in.'] }, status: 401
      end
    end
end
