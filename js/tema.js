// Alternância acessível de tema, com preferência salva no navegador.
function ativarTema() {
    const botao = document.querySelector(".tema-toggle");
    if (!botao) return;

    let temaSalvo = null;
    try { temaSalvo = localStorage.getItem("ong-quatro-patas-tema"); } catch (_) {}
    const preferenciaSistema = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    let escuro = temaSalvo === "escuro" || (temaSalvo !== "claro" && preferenciaSistema);

    function atualizar() {
        document.documentElement.dataset.tema = escuro ? "escuro" : "claro";
        botao.setAttribute("aria-pressed", String(escuro));
        botao.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
        botao.title = escuro ? "Ativar modo claro" : "Ativar modo escuro";
        botao.querySelector("span").textContent = escuro ? "☀" : "☾";
    }
    botao.addEventListener("click", () => {
        escuro = !escuro;
        try { localStorage.setItem("ong-quatro-patas-tema", escuro ? "escuro" : "claro"); } catch (_) {}
        atualizar();
    });
    atualizar();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ativarTema);
} else {
    ativarTema();
}
