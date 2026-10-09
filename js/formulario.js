import { salvarCadastro } from "./armazenamento.js";


export function ativarMascaras() {

    const cpf =
        document.querySelector("#cpf");


    if (cpf) {

        cpf.addEventListener("input", function() {

            let valor =
                cpf.value.replace(/\D/g, "");


            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );


            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );


            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );


            cpf.value = valor;

        });

    }


    const telefone =
        document.querySelector("#telefone");


    if (telefone) {

        telefone.addEventListener("input", function() {

            let valor =
                telefone.value.replace(/\D/g, "");


            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );


            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );


            telefone.value = valor;

        });

    }


    const cep =
        document.querySelector("#cep");


    if (cep) {

        cep.addEventListener("input", function() {

            let valor =
                cep.value.replace(/\D/g, "");


            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );


            cep.value = valor;

        });

    }

}


export function ativarFormulario() {
    const formulario = document.querySelector("form");
    if (!formulario) return;

    // The form is rendered dynamically. Custom messages replace the browser's
    // default bubbles so they can be associated with each input via ARIA.
    formulario.noValidate = true;

    function mostrarErro(campo, texto) {
        campo.classList.add("campo-invalido");
        campo.setAttribute("aria-invalid", "true");
        const mensagem = document.createElement("small");
        mensagem.className = "mensagem-erro";
        mensagem.id = "erro-" + campo.id;
        mensagem.textContent = texto;
        campo.setAttribute("aria-describedby", mensagem.id);
        campo.insertAdjacentElement("afterend", mensagem);
    }

    function cpfValido(valor) {
        const numeros = valor.replace(/\D/g, "");
        if (!/^\d{11}$/.test(numeros) || /^(\d)\1{10}$/.test(numeros)) return false;
        for (let posicao = 9; posicao <= 10; posicao++) {
            let soma = 0;
            for (let i = 0; i < posicao; i++) soma += Number(numeros[i]) * (posicao + 1 - i);
            const resto = (soma * 10) % 11;
            if (Number(numeros[posicao]) !== (resto === 10 ? 0 : resto)) return false;
        }
        return true;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        formulario.querySelectorAll(".mensagem-erro").forEach(mensagem => mensagem.remove());
        formulario.querySelectorAll("input").forEach(campo => {
            campo.classList.remove("campo-invalido");
            campo.removeAttribute("aria-invalid");
            campo.removeAttribute("aria-describedby");
        });

        let primeiroInvalido = null;
        const campos = formulario.querySelectorAll('input:not([type="radio"])');
        campos.forEach(campo => {
            const valor = campo.value.trim();
            let erro = "";
            if (campo.required && !valor) {
                erro = "Este campo é obrigatório.";
            } else if (valor && campo.type === "email" && !campo.validity.valid) {
                erro = "Informe um e-mail válido.";
            } else if (valor && campo.type === "date" && !campo.validity.valid) {
                erro = "Informe uma data válida.";
            } else if (valor && campo.id === "cpf" && !cpfValido(valor)) {
                erro = "Informe um CPF válido.";
            } else if (valor && campo.id === "telefone" && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor)) {
                erro = "Informe um telefone com DDD válido.";
            } else if (valor && campo.id === "cep" && !/^\d{5}-\d{3}$/.test(valor)) {
                erro = "Informe um CEP válido.";
            } else if (valor && campo.id === "estado" && !/^[A-Za-z]{2}$/.test(valor)) {
                erro = "Informe a sigla do estado com duas letras.";
            }
            if (erro) {
                mostrarErro(campo, erro);
                if (!primeiroInvalido) primeiroInvalido = campo;
            }
        });

        const participacao = formulario.querySelector('input[name="participacao"]:checked');
        if (!participacao) {
            const primeiroRadio = formulario.querySelector('input[name="participacao"]');
            mostrarErro(primeiroRadio, "Selecione uma forma de participação.");
            if (!primeiroInvalido) primeiroInvalido = primeiroRadio;
        }

        if (primeiroInvalido) {
            primeiroInvalido.focus();
            return;
        }

        salvarCadastro(formulario);
        const alerta = document.querySelector(".alerta");
        if (alerta) {
            alerta.innerHTML = "<strong>Cadastro salvo!</strong> Seus dados foram armazenados neste navegador.";
            alerta.classList.add("sucesso");
            alerta.setAttribute("role", "status");
            alerta.setAttribute("tabindex", "-1");
            alerta.focus();
        }
    });
}
