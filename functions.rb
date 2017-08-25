require "sinatra"
require "csv"
require "pry"
require "json"
require "net/http"
require "uri"
require "sinatra/reloader"


def checkClick(x, y)
	waldo = false
	xsuccess = false	
	ysuccess = false
	xMin = 0
	xMax = 0
	yMin = 0
	yMax = 0
	CSV.foreach("waldo_location.txt", {headers: true, return_headers: false}) do |row|			
		xMin = row["xMin"]
		xMax = row["xMax"]
		yMin = row["yMin"]
		yMax = row["yMax"]	 
	end
	if x >= xMin && x <= xMax
		xsuccess = true
	end
	if y >= yMin && y <= yMax
		ysuccess = true
	end
	if xsuccess == true && ysuccess == true
		waldo = true
		return "true"
	else
		return "false"
	end
end
