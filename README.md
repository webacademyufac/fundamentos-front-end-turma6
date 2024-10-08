Repositório da disciplina Fundamentos de Programação Front-end Turma 6.

## Atualizando seu repositório local

O código produzido em sala de aula, e compartilhado neste repositório, pode ser atualizado em seu repositório local com o comando:

```console
git pull
```

No entando, se você fez alterações no seu repositório local, o comando acima pode gerar conflitos. Para evitar lidar com isso, você pode forçar uma atualização com o repositório remoto por meio dos comandos:

```console
git fetch origin
git reset --hard origin/main
```

O primeiro comando recebe as atualizações mais recentes do repositório remoto, e o segundo descarta todas as alterações locais e atualiza com o histórico mais recente do repositório remoto (branch main).

## Sites de referência

- MDN Web Docs - Aprendendo desenvolvimento web: <https://developer.mozilla.org/pt-BR/docs/Learn>
- W3Schools Online Web Tutorials: <https://www.w3schools.com/>
- W3C Standards: <https://www.w3.org/standards/>

## Ferramentas

- **Visual Studio Code**
  - <https://code.visualstudio.com/Download>
- **Live Server (Extensão do VS Code)**
  - <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>
- **Git**
  - <https://git-scm.com/downloads>
- **Chrome Developer Tools (F12)**

## SGCM - Sistema de Gerenciamento de Clínica Médica

A demonstração de uso das ferramentas e tecnologias abordadas na capacitação é baseada em um projeto de exemplo, o SGCM. A documentação básica deste projeto está disponível [em outro repositório](https://github.com/webacademyufac/sgcmdocs) e aborda os seguintes tópicos:

- [Principais funcionalidades](https://github.com/webacademyufac/sgcmdocs#principais-funcionalides)
- [Histórias de usuário](https://github.com/webacademyufac/sgcmdocs#histórias-de-usuário)
- [Diagrama de Classes](https://github.com/webacademyufac/sgcmdocs#diagrama-de-classes)
- [Diagrama Entidade Relacionamento](https://github.com/webacademyufac/sgcmdocs#diagrama-entidade-relacionamento)


# Atividades práticas

1. [INDIVIDUAL] Crie uma página HTML para exibir informações sobre uma página do seu currículo pessoal, a página pode conter dados pessoais, acadêmicos e profissionais.
 - A página deve conter tags de títulos, parágrafos e listas
 - A página deve conter imagens
 - A pagina deve conter links para outras páginas
 - A página deve conter uma tabela com as informações do seu contato como telefone e e-mail
 - Adicione um formulário para simular que visitantes possam enviar uma mensagem, incluindo campos para nome, e-mail, e o conteúdo da mensagem.

Crie um arquivo CSS externo chamado estilo.css. para estilizar a página HTML da atividade anterior.
 - Defina uma fonte padrão para a página usando a propriedade font-family.
 - Defina estilos diferentes para os títulos &lt;h1&gt; e &lt;h2&gt;, como cor, tamanho da fonte e alinhamento.
 - Estilize os parágrafos (&lt;p&gt;) definindo margens, tamanho da fonte e cor do texto.
 - Adicione espaçamento e um tipo de marcador personalizado às listas não ordenadas (&lt;ul&gt;) e ordenadas (&lt;ol&gt;).
 - Adicione uma cor diferente para links (&lt;a&gt;) e defina um efeito de "hover" (quando o mouse passar por cima).
 - Estilize a tabela de contato com bordas, espaçamento interno e cores de fundo alternadas para as linhas.
 - Estilize o formulário para melhorar a apresentação dos campos e do botão de envio.

Link no github classroom: https://classroom.github.com/a/-r6jq7_u
Entrega: 16/09/2024 até 16h

2. [GRUPO] Construir páginas para cadastro de usuários, convênios, unidades, especialidades, pacientes e atendimento de forma semelhante à página de cadastro de profissionais, e baseado na [documentação do SGCM](https://github.com/webacademyufac/sgcmdocs).
    - Página de Usuários (Time 1: Valmir, Wanderson, Ismael, Wesley )
    - Página de Convênios (Time 2:Juan, Gleice, Douglas, Willian)
    - Página de Unidades (Time 3:João Vitor, Marcos Manuares, Isaque)
    - Página de Especialidades (Time 4:Gabriel, Kleriston, Esther)
    - Página de Pacientes (Time 5: Kelvin, Luis Henrique, Hayssa, Samuel Caldeira)
    - Página de Atendimentos (Time 6: Mateus, Rafael, John, Brenndo)

    - Dados no formato JSON para serem usados nas páginas:

        - Usuários: <https://my-json-server.typicode.com/juniorlimeiras/json2/usuarios>
        - Usuários: <https://my-json-server.typicode.com/juniorlimeiras/json2/atendimentos>
        - Convênios: <https://my-json-server.typicode.com/juniorlimeiras/json/convenios>
        - Unidades: <https://my-json-server.typicode.com/juniorlimeiras/json/unidades>
        - Especialidades: <https://my-json-server.typicode.com/juniorlimeiras/json/especialidades>
        - Pacientes: <https://my-json-server.typicode.com/juniorlimeiras/json/pacientes>

Link no github classroom: https://classroom.github.com/a/oZrF8QjE
Entrega: 20/09/2024 até 18h

3. [DUPLA] a) Alterar o rodapé da tabela que mostra o total de profissionais para que seja atualizado conforme a quantidade de profissionais. A atualização deve considerar todos os registros.
b) Implementar a funcionalidade do botão editar para a página de profissionais. Quando o botão for acionado o formulário deve ser apresentado permitindo a edição do profissional que foi escolhido na tabela. 

Link no github classroom: https://classroom.github.com/a/t_fUPjjA
Entrega: 20/09/2024 até 18h