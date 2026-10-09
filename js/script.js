
import {
    ativarModal,
    ativarNavegacao
} from "./navegacao.js";


import {
    ativarMascaras,
    ativarFormulario
} from "./formulario.js";


import {
    carregarCadastroSalvo
} from "./armazenamento.js";


const app =
    document.querySelector("#app");


const templates = {

    home: `
        <section class="info-section">

            <h2>Sobre Nós</h2>

            <p>
                A ONG Quatro Patas atua no resgate, cuidado e
                proteção de animais em situação de abandono,
                buscando proporcionar melhores condições de vida
                para cães e gatos.
            </p>

        </section>


        <section class="info-section">

            <h2>Nossa História</h2>

            <p>
                A ONG Quatro Patas foi criada informalmente em
                2008, em Curitiba. Em 23 de abril de 2010,
                passou a possuir estatuto e CNPJ, estabelecendo
                sua sede em Colombo, no Paraná.
            </p>

        </section>


        <section class="info-section">

            <h2>Nossos Abrigos</h2>

            <p>
                Atualmente a organização conta com dois abrigos,
                que recebem animais resgatados e oferecem
                alimentação, cuidados e proteção.
            </p>

        </section>


        <section class="info-section">

            <h2>Nossa Equipe</h2>

            <p>
                A ONG conta com uma equipe de colaboradores
                dedicados ao cuidado dos animais e à realização
                das iniciativas sociais desenvolvidas pela
                organização.
            </p>

        </section>
    `,


    projetos: `
        <section class="card" id="lar-temporario">

            <div>

                <span class="badge">
                    PROJETO ATIVO
                </span>

                <h2>Projeto Lar Temporário</h2>

                <p>
                    O projeto oferece lares temporários para animais
                    resgatados, proporcionando um ambiente seguro,
                    acolhedor e adequado até que encontrem uma família
                    definitiva.
                </p>

            </div>

            <button class="btn-ajuda" type="button">
                Quero ajudar
            </button>

        </section>


        <section class="card" id="patas-saudaveis">

            <div>

                <span class="badge">
                    PROJETO ATIVO
                </span>

                <h2>Projeto Patas Saudáveis</h2>

                <p>
                    O projeto busca garantir atendimento veterinário,
                    vacinação e cuidados básicos de saúde para os
                    animais acolhidos pela ONG.
                </p>

            </div>

            <button class="btn-ajuda" type="button">
                Quero ajudar
            </button>

        </section>


        <section class="card" id="adote-com-amor">

            <div>

                <span class="badge">
                    PROJETO ATIVO
                </span>

                <h2>Projeto Adote com Amor</h2>

                <p>
                    Incentiva a adoção responsável e aproxima os
                    animais resgatados de pessoas interessadas em
                    oferecer um novo lar.
                </p>

            </div>

            <button class="btn-ajuda" type="button">
                Quero ajudar
            </button>

        </section>


        <section class="card" id="alimenta-quatro-patas">

            <div>

                <span class="badge">
                    PROJETO ATIVO
                </span>

                <h2>Projeto Alimenta Quatro Patas</h2>

                <p>
                    O projeto arrecada recursos e alimentos para
                    garantir uma alimentação adequada aos animais
                    atendidos pela ONG.
                </p>

            </div>

            <button class="btn-ajuda" type="button">
                Quero ajudar
            </button>

        </section>


        <dialog
			id="modal-ajuda"
			class="modal"
			aria-labelledby="titulo-modal-ajuda">

            <div class="modal-conteudo">

                <button
                    class="modal-fechar"
                    type="button"
                    aria-label="Fechar janela">
                    ×
                </button>

                <h2 id="titulo-modal-ajuda">Como você pode ajudar?</h2>

                <p>
                    Faça seu cadastro para participar dos projetos
                    da ONG Quatro Patas.
                </p>

                <a class="modal-link" href="cadastro.html">
                    Fazer cadastro
                </a>

            </div>

        </dialog>
    `,


    cadastro: `
        <div class="alerta" role="alert">

            <strong>Atenção:</strong>

            confira seus dados antes de enviar o cadastro.
            Informações corretas ajudam a ONG a entrar em
            contato com você.

        </div>


        <form action="/enviar" method="POST" novalidate>

            <fieldset>

                <legend>Seus Dados</legend>


                <label for="nome">
                    Nome completo
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    maxlength="100">


                <label for="email">
                    E-mail
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxlength="100">


                <label for="nascimento">
                    Data de nascimento
                </label>

                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required>


                <label for="cpf">
                    CPF
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    maxlength="14"
                    placeholder="000.000.000-00">


                <label for="telefone">
                    Telefone
                </label>

                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    maxlength="15"
                    placeholder="(00) 00000-0000">

            </fieldset>


            <fieldset>

                <legend>Endereço</legend>


                <label for="endereco">
                    Endereço
                </label>

                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                    maxlength="150">


                <label for="cep">
                    CEP
                </label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    required
                    maxlength="9"
                    placeholder="00000-000">


                <label for="cidade">
                    Cidade
                </label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    maxlength="80">


                <label for="estado">
                    Estado
                </label>

                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required
                    maxlength="2">

            </fieldset>


            <fieldset>

                <legend>Forma de Participação</legend>


                <input
                    type="radio"
                    id="voluntariado"
                    name="participacao"
                    value="voluntariado"
                    required>

                <label for="voluntariado">
                    Voluntariado
                </label>


                <input
                    type="radio"
                    id="doacao"
                    name="participacao"
                    value="doacao">

                <label for="doacao">
                    Doação
                </label>


                <input
                    type="radio"
                    id="adocao"
                    name="participacao"
                    value="adocao">

                <label for="adocao">
                    Adoção
                </label>

            </fieldset>


            <button type="submit">
                Enviar cadastro
            </button>

        </form>
    `

};


function renderizar(pagina) {

    app.innerHTML =
        templates[pagina];


    ativarModal();
    ativarMascaras();
    ativarFormulario();
    if (pagina === "cadastro") carregarCadastroSalvo();

}


const paginaAtual =
    document.body.dataset.pagina || "home";


renderizar(paginaAtual);


ativarNavegacao(renderizar);


