class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :discriminator, presence: true
    validates :password, length: {in: 6..20}, allow_nil: true

    before_validation :ensure_session_token, :ensure_discriminator

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def ensure_discriminator
        self.discriminator ||= generate_discriminator
    end
    
    def generate_discriminator
        discriminator = rand(1...10000)
        unless User.where(username: self.username).where(discriminator: discriminator).empty?
            generate_discriminator
        end
        discriminator
    end
end
