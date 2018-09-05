var app = require('./config/server');

var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Servidor Online')
})
var server2 = app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
var io = require('socket.io').listen(server2);
app.set('io',io);

io.on('connection', function(socket){

socket.on('disconnect',function(){


   });
socket.on('msgParaServidor',function(data){
   socket.emit(
   	'msgParaCliente',
   	{apelido:data.apelido,mensagem: data.mensagem}
   	);
   socket.broadcast.emit(
   	'msgParaCliente',
   	{apelido:data.apelido,mensagem: data.mensagem}
   	);
 if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
    socket.emit(
   	'participantesParaCliente',
   	{apelido:data.apelido}
   	);
   socket.broadcast.emit(
   	'participantesParaCliente',
   	{apelido:data.apelido}
   	);
}
});

});
