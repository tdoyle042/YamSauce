require 'rubygems'
require 'sinatra'

get '/' do
  File.read(File.join('public', 'home.html'))
end
