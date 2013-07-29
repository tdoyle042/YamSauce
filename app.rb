require 'rubygems'
require 'sinatra'

configure :production do

  # us a simple before filter to redirect all requests in production to https
  # before do
  #     unless (@env['HTTP_X_FORWARDED_PROTO'] || @env['rack.url_scheme'])=='https'
  #       redirect "https://#{request.env['HTTP_HOST']}#{request.env["REQUEST_PATH"]}"
  #     end
  #   end

 #even simpler use rack-ssl-enforcer rack middle ware to do the same thing
  require 'rack-ssl-enforcer'
  use Rack::SslEnforcer
end

get '/' do
  erb File.read(File.join('public', 'home.html.erb'))
end
