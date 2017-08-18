var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path:'/produtos',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-Type' : 'application/json'
    }
};

var client = http.request(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo : 'A Era do Gelo',
    descricao : 'Hihihihihihhi  hihihihihihihihhihihihh hiihihihihi hihih hihii',
    preco: 100
}

client.end(JSON.stringify(produto));
