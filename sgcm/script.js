carregaProfissionais = () => {
    let xhr = new XMLHttpRequest(); //Objeto de Req assincrona
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    xhr.open('GET', url); //Fazendo a requisição
    let tabela = document.querySelector('table');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) { //Verifica resposta
            let dados = JSON.parse(xhr.responseText); //Armazena os dados JSON em um Array
            for (item of dados) {
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
        }
    });
    xhr.send();
};//Fecha a função carregaProfissionais

carregaProfissionais();