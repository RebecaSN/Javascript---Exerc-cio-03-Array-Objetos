let usuario = {
nome: '',
idade:'',
telefone:'',
genero:'',
}

let DadosUsuario=[]

let i=parseInt(prompt('Quantos usuários devemos salvar?'))
for (let j=0; j<i;j++ ){
    usuario.nome= prompt('Digite o seu nome')
    usuario.idade= prompt('Digite a sua idade')
    usuario.telefone=prompt('Digite o seu telefone')
    usuario.genero=prompt('Digite o seu genero')
    
    DadosUsuario.push(usuario)
}
DadosUsuario.forEach(function(DadosUsuario) {
    document.write('Os nomes digitados são:' + usuario.nome)
    document.write('As idades dos usuarios são:' + usuario.idade)
    document.write('Os numeros digitados foram:' + usuario.telefone)
    document.write('Os generos difitados foram:' + usuario.genero)   

});





