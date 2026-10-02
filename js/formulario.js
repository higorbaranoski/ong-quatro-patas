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

    const formulario =
        document.querySelector("form");


    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const campos =
            formulario.querySelectorAll("input");


        let formularioValido = true;


        campos.forEach(function(campo) {

            campo.classList.remove("campo-invalido");


            const mensagemExistente =
                campo.parentElement.querySelector(
                    ".mensagem-erro"
                );


            if (mensagemExistente) {
                mensagemExistente.remove();
            }


            if (!campo.value.trim()) {

                campo.classList.add("campo-invalido");


                const mensagem =
                    document.createElement("small");


                mensagem.classList.add(
                    "mensagem-erro"
                );


                mensagem.textContent =
                    "Este campo é obrigatório.";


                campo.insertAdjacentElement(
                    "afterend",
                    mensagem
                );


                formularioValido = false;

            }

        });


        if (!formularioValido) {
            return;
        }


        salvarCadastro(formulario);


        const alerta =
            document.querySelector(".alerta");


        if (alerta) {

            alerta.innerHTML =
                "<strong>Cadastro enviado!</strong> " +
                "Seus dados foram recebidos com sucesso.";


            alerta.classList.add("sucesso");

        }

    });

}