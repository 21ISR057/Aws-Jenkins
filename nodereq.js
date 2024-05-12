var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, { 'Content-Type': 'text/plain'});  
            response.write("This is a simple page.");  
            response.end();  
            break;  
        case '/home.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, { 'Content-Type': 'text/html'});
                    // response.writeHead(200, { 'Content-Type': 'text/css'}); 
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/aboutus.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, { 'Content-Type': 'text/html'});  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
            case '/concerttype.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {'Content-Type': 'text/html'});  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
            case '/aboutTaylor.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {'Content-Type': 'text/html/css'});  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
            case '/bookticket.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {'Content-Type': 'text/html'});  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
            case '/conform.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {'Content-Type': 'text/html'});  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(8000); 