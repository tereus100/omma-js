const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

const listaDeReceitas = [
    {
        id: 1,
        titulo: "Cachorro quente",
        dificuldade: "simples",
        ingredientes: ['1 pão de leite','1 salsicha','1 colher de batata palha'],
        preparo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'http://youtube.com',
        vegano: false
    }
];

const cadastrarReceita = (
    id, titulo, dificuldade, ingredientes, preparo, link, vegano
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano
    };
    listaDeReceitas.push(novaReceita);
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}

// console.log(listaDeReceitas);

cadastrarReceita(
    2,
    "Ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "Sal a gosto"],
    "jogue o azeite na frigideira, coloque o ovo e depois coloque o sal em cima do ovo.",
    "https://google.com.br",
    false
);

// console.log(listaDeReceitas);

const exibirReceitas = () => {
    console.log('Receitas:');    
    for(let i=0; i < listaDeReceitas.length; i++) {   
        console.log('=-=-=-=-=');
        console.log(`Titulo: ${listaDeReceitas[i].titulo}`);
        console.log(`- Ingredientes( ${listaDeReceitas[i].ingredientes.join(', ')} )`);
        console.log(`- Vegano: ${listaDeReceitas[i].vegano ? 'Sim' : 'Não'}\n`);
    }
}
exibirReceitas();



const deletarReceita = (id) => {
    for(let i=0; i < listaDeReceitas.length; i++) {
        if(listaDeReceitas[i].id === id) {
            listaDeReceitas.splice(i, 1);
            console.log("Deletada com sucesso.");
            return;
        }
    }
    console.log("Receita não encontrada.");
}

deletarReceita(1);

console.log(listaDeReceitas);
