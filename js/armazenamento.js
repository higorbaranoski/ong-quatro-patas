export function salvarCadastro(formulario) {

    const dadosCadastro = {

        nome:
            formulario.querySelector("#nome").value,

        email:
            formulario.querySelector("#email").value,

        nascimento:
            formulario.querySelector("#nascimento").value,

        cpf:
            formulario.querySelector("#cpf").value,

        telefone:
            formulario.querySelector("#telefone").value,

        endereco:
            formulario.querySelector("#endereco").value,

        cep:
            formulario.querySelector("#cep").value,

        cidade:
            formulario.querySelector("#cidade").value,

        estado:
            formulario.querySelector("#estado").value,

        participacao:
            formulario.querySelector(
                'input[name="participacao"]:checked'
            ).value

    };


    localStorage.setItem(
        "cadastro",
        JSON.stringify(dadosCadastro)
    );

}


export function carregarCadastroSalvo() {

    const dadosSalvos =
        localStorage.getItem("cadastro");


    if (!dadosSalvos) {
        return;
    }


    const dadosCadastro =
        JSON.parse(dadosSalvos);


    const formulario =
        document.querySelector("form");


    if (!formulario) {
        return;
    }


    formulario.querySelector("#nome").value =
        dadosCadastro.nome;

    formulario.querySelector("#email").value =
        dadosCadastro.email;

    formulario.querySelector("#nascimento").value =
        dadosCadastro.nascimento;

    formulario.querySelector("#cpf").value =
        dadosCadastro.cpf;

    formulario.querySelector("#telefone").value =
        dadosCadastro.telefone;

    formulario.querySelector("#endereco").value =
        dadosCadastro.endereco;

    formulario.querySelector("#cep").value =
        dadosCadastro.cep;

    formulario.querySelector("#cidade").value =
        dadosCadastro.cidade;

    formulario.querySelector("#estado").value =
        dadosCadastro.estado;


    const participacao =
        formulario.querySelector(
            `input[name="participacao"][value="${dadosCadastro.participacao}"]`
        );


    if (participacao) {
        participacao.checked = true;
    }

}