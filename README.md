
# ONG Quatro Patas

Projeto acadêmico desenvolvido para a disciplina de Experiência Prática do curso de Análise e Desenvolvimento de Sistemas.

O site apresenta informações sobre a ONG Quatro Patas, seus projetos sociais e um formulário de cadastro para pessoas interessadas em participar das iniciativas.

## Tecnologias utilizadas

- **HTML5:** estrutura e organização semântica das páginas.
- **CSS3:** estilização, layout e responsividade.
- **JavaScript:** navegação dinâmica, validação de formulários, máscaras de entrada e armazenamento local de dados.

## Estrutura do projeto

- `html/`: páginas do site.
- `css/`: estilos e responsividade.
- `js/`: funcionalidades e interações.
- `imagens/`: recursos visuais.

## Pré-requisitos

- Navegador atualizado com suporte a HTML5, CSS3 e JavaScript.
- Editor de código, como Notepad++ ou Visual Studio Code, para manutenção do projeto.
- Servidor HTTP local para executar a aplicação com suporte aos módulos JavaScript.

## Instalação e execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/higorbaranoski/ong-quatro-patas.git
   ```

2. Abra a pasta do projeto em um editor de código.

3. Inicie um servidor HTTP local na raiz do projeto. Por exemplo, caso tenha Python instalado:

   ```bash
   python -m http.server 8000
   ```

4. Acesse no navegador:

   `http://localhost:8000/html/index.html`

## Dependências

O projeto utiliza HTML5, CSS3 e JavaScript nativo, sem bibliotecas externas ou dependências que precisem ser instaladas.

## Build

Não existe uma etapa de build automatizada. Os arquivos HTML, CSS, JavaScript e imagens são utilizados diretamente pelo navegador.

## Testes

Os testes são realizados manualmente no navegador, verificando:

- Navegação entre as páginas.
- Funcionamento do menu e das interações.
- Validação dos campos do formulário.
- Aplicação das máscaras de CPF, telefone e CEP.
- Armazenamento e recuperação de dados pelo localStorage.
- Responsividade em diferentes tamanhos de tela.

O projeto ainda não possui testes automatizados.
