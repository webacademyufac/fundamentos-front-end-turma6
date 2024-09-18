carregaProfissionais = () => {
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    fetch(url).then(resposta => {
        return resposta.json()
    }).then(dados => {
        for (const item of dados) {
            inserirProfissional(item);
        }
        excluirLinha();
    })
    // let xhr = new XMLHttpRequest(); //Objeto de Req assincrona
    // xhr.open('GET', url); //Fazendo a requisição
    // let tabela = document.querySelector('table');
    // xhr.addEventListener('readystatechange', () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) { //Verifica resposta
    //         let dados = JSON.parse(xhr.responseText); //Armazena os dados JSON em um Array
    //         for (item of dados) {
    //             //Criação dos elementos HTML
    //             let linha = document.createElement('tr');
    //             let id = document.createElement('td');
    //             let nome = document.createElement('td');
    //             let registro = document.createElement('td');
    //             let telefone = document.createElement('td');
    //             let email = document.createElement('td');
    //             let unidade = document.createElement('td');
    //             let especialidade = document.createElement('td');
    //             let opcoes = document.createElement('td');
    //             //Preenchendo os elementos HTML ('td')
    //             id.textContent = item.id;
    //             nome.textContent = item.nome;
    //             registro.textContent = item.registro;
    //             telefone.textContent = item.telefone;
    //             email.textContent = item.email;
    //             unidade.textContent = item.unidade;
    //             especialidade.textContent = item.especialidade;
    //             opcoes.innerHTML = `<a class="botao_verde" href="javascript:void(0)">Editar</a> <a class="botao_vermelho">Excluir</a>`;
    //             //Preenchendo a linha ('tr')
    //             linha.appendChild(id);
    //             linha.appendChild(nome);
    //             linha.appendChild(registro);
    //             linha.appendChild(telefone);
    //             linha.appendChild(email);
    //             linha.appendChild(unidade);
    //             linha.appendChild(especialidade);
    //             linha.appendChild(opcoes);
    //             tabela.tBodies[0].appendChild(linha); //Preenchendo a tabela
    //         }
    //     }
    //     //Colocar a função que fornece a exclusão da linha
    //     excluirLinha();
    // });
    // xhr.send();
};//Fecha a função carregaProfissionais

carregaProfissionais();

//Inserir profissional
let form = document.querySelector('form');
let tabela = document.querySelector('table');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();//Eveita que a página seja recarregada
    objeto = {//Preenchendo o objeto com os dados do form
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,
        registro: form.registroConselho.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label
    }
    inserirProfissional(objeto);
    //Carregar a função que exclui uma linha
    excluirLinha();
    botaoAdicionar.classList.remove('inativo');
    div.classList.add('inativo');
});

// Função que recebe um objeto do tipo profisisonal
const inserirProfissional = (item) => {
    //Criação dos elementos HTML
    let linha = document.createElement('tr');
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let registro = document.createElement('td');
    let telefone = document.createElement('td');
    let email = document.createElement('td');
    let unidade = document.createElement('td');
    let especialidade = document.createElement('td');
    let opcoes = document.createElement('td');
    //Preenchendo os elementos HTML ('td')
    id.textContent = item.id;
    nome.textContent = item.nome;
    registro.textContent = item.registro;
    telefone.textContent = item.telefone;
    email.textContent = item.email;
    unidade.textContent = item.unidade;
    especialidade.textContent = item.especialidade;
    opcoes.innerHTML = `<a class="botao_verde" href="javascript:void(0)">Editar</a> <a class="botao_vermelho" href="javascript:void(0)">Excluir</a>`;
    //Preenchendo a linha ('tr')
    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(registro);
    linha.appendChild(telefone);
    linha.appendChild(email);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(opcoes);
    tabela.tBodies[0].appendChild(linha); //Preenchendo a tabela
}

// Botão Adicionar
let botaoAdicionar = document.querySelector('div#add');
let div = document.querySelector('div.inativo');
//Escutador de evento
botaoAdicionar.addEventListener('click', () => {
    div.classList.remove('inativo');
    botaoAdicionar.classList.add('inativo');
    form.reset();
})

// Botão Cancelar
let botaoCancelar = document.querySelector('input[type="button"]');

botaoCancelar.addEventListener('click', () => {
    div.classList.add('inativo');
    botaoAdicionar.classList.remove('inativo');
    form.reset();
})

//Botão Excluir

function excluirLinha() {
    botoes = document.querySelectorAll('a.botao_vermelho')
    for (const botao of botoes) {
        botao.addEventListener('click', () => {
            botao.parentNode.parentNode.remove();
        })
    }
}
//const excluirLinha = () => {}