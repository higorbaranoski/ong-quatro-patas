
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


## Versionamento

O projeto utiliza Git e GitHub para controle de versões, seguindo uma estrutura baseada em GitFlow.

### Organização das branches

- `main`: mantém a versão estável do projeto.
- `develop`: concentra as alterações integradas durante o desenvolvimento.
- `feature/`: utilizada para desenvolver funcionalidades e melhorias específicas antes da integração à `develop`.

### Padrão de commits

As mensagens seguem a convenção Conventional Commits, utilizando prefixos como:

- `feat:` para novas funcionalidades.
- `docs:` para alterações na documentação.
- `fix:` para correções de problemas.

### Versionamento semântico

O projeto adota o formato `MAJOR.MINOR.PATCH` para identificar suas versões.

A tag `v1.0.0` identifica a primeira versão funcional registrada no repositório.

### Pull Requests

As alterações realizadas em branches secundárias são integradas à `develop` por meio de Pull Requests, permitindo documentar, conferir e validar as modificações antes do merge.
