var express=require("express");
app    =express();
http   =require("http");
server =http.createServer(app);

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/',function(req,res){
	res.send("Hola Mundo!!!!");
});

server.listen(3000,function(){
	console.log("Node server corriendo en http://localhost:3000/");
});