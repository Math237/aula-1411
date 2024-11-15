var produtos = [];
var i = 0;
var condicao = 1;
while (condicao){
    //cria produto vazio que vamos preencher 
    var produto = {};

    produto.codigo = i+1; //como o i começa em zero, aumentamos 1;
    produto.nome = prompt("Digite o nome do produto:");
    produto.preco = parseFloat(prompt("Digite o preço do produto:"));

    produtos[i] = produto;

    condicao = parseInt(prompt("Digite 1 para adicionar mais produtos \nDigite 0 para sair"));
    i++;
}

//como imprimir o 
//console.log(produto[1].nome);
console.log("---- Produtos Cadastrados ----");
for ( var i = 0; i < produtos.length; i++ ){
    console.log("Código: "), produtos[i].codigo;
    console.log("Nome:"),produtos[i].nome;
    console.log("Preço: "), produtos[i].preco;
        console.log("----")
}
//console.log(produto);
