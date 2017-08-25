require "sinatra"
require "csv"
require "pry"
require "json"
require "net/http"
require "uri"
require "sinatra/reloader"
require_relative "./functions.rb"

get "/" do 
	erb :index
end 

get '/click_check' do
	x = params["x"]
	y = params["y"]

	checkClick(x,y)
end