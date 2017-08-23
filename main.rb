require "sinatra"
require "csv"
require "pry"
require "json"
require "net/http"
require "uri"

get "/" do 
	erb :index
end 