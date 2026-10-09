export function ativarModal() {

    const modal =
        document.querySelector("#modal-ajuda");


    if (!modal) {
        return;
    }


    const botoesAjuda =
        document.querySelectorAll(".btn-ajuda");


    const fecharModal =
        document.querySelector(".modal-fechar");


    botoesAjuda.forEach(function(botao) {

        botao.addEventListener("click", function() {

            modal.showModal();

        });

    });


    fecharModal.addEventListener("click", function() {

        modal.close();

    });

}


export function ativarNavegacao(renderizar) {

    const menuToggle =
        document.querySelector(".menu-toggle");


    const nav =
        document.querySelector("nav");


    menuToggle.addEventListener("click", function() {

    nav.classList.toggle("menu-aberto");

    const aberto = nav.classList.contains("menu-aberto");

    menuToggle.setAttribute("aria-expanded", String(aberto));

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

});


    const dropdownToggle =
        document.querySelector(".dropdown-toggle");


    const dropdown =
        document.querySelector(".dropdown");


    dropdownToggle.addEventListener("click", function(event) {

        event.preventDefault();


        dropdown.classList.toggle(
            "submenu-aberto"
        );


        const aberto =
            dropdown.classList.contains(
                "submenu-aberto"
            );


        dropdownToggle.setAttribute(
            "aria-expanded",
            String(aberto)
        );
        dropdownToggle.setAttribute("aria-label", aberto ? "Fechar submenu de projetos" : "Abrir submenu de projetos");

    });


    const links =
        document.querySelectorAll("nav a");


    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            const pagina =
                link.dataset.rota;


            if (!pagina) {
                return;
            }


            event.preventDefault();


            renderizar(pagina);

        });

    });

}