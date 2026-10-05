<div align="center">

# 🗂️ Portfólio — Daniel Penelva de Andrade

### Carrossel de Projetos em Destaque

[![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Angular Material](https://img.shields.io/badge/Angular_Material-17-purple?style=for-the-badge&logo=angular)](https://material.angular.io/)
[![SCSS](https://img.shields.io/badge/SCSS-Styles-pink?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify)](https://netlify.com/)

> Portfólio pessoal com carrossel interativo de projetos, suporte a tema claro/escuro e layout responsivo — desenvolvido com Angular 17 e Angular Material.

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Projetos em Destaque](#-projetos-em-destaque)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Autor](#-autor)

---

## 💡 Sobre o Projeto

Portfólio pessoal desenvolvido com **Angular 17** e **Angular Material**, apresentando os principais projetos fullstack em um carrossel interativo estilo dossiê. O visitante pode navegar entre os projetos pelas abas, pelos botões de anterior/próximo ou clicando diretamente nas abas de navegação.

O sistema suporta **tema claro e escuro**, respeitando a preferência do sistema operacional do visitante na primeira visita e memorizando a escolha do usuário via `localStorage` nas visitas seguintes.

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 17 | Framework principal |
| TypeScript | 5.x | Linguagem principal |
| Angular Material | 17 | Componentes de UI |
| SCSS | - | Estilização com temas claro/escuro |
| Google Fonts | - | Inter, Fraunces, JetBrains Mono |

---

## ✅ Funcionalidades

### 🎠 Carrossel de Projetos
- Navegação por abas clicáveis com rótulo curto do projeto
- Botões de anterior e próximo com ícones do Angular Material
- Contador de projetos (`projeto 1/5`)
- Navegação circular — do último projeto volta ao primeiro

### 🌗 Tema Claro / Escuro
- Detecta automaticamente a preferência do sistema operacional
- Botão de alternância com ícone `light_mode` / `dark_mode`
- Memoriza a escolha do visitante via `localStorage`
- Transição suave entre os temas com CSS `transition`

### 🎨 Design
- Tipografia com três famílias: Inter (corpo), Fraunces (display) e JetBrains Mono (código)
- Selo rotacionado com a stack tecnológica de cada projeto
- Card estilo dossiê com sombra e bordas arredondadas
- Layout totalmente responsivo para mobile

### 🔗 Links por Projeto
- Botão **Ver projeto** — abre o sistema em produção
- Botão **Frontend** — abre o repositório frontend no GitHub
- Botão **Backend** — abre o repositório backend no GitHub

### 📇 Card de Contato
- Links para GitHub, Currículo e LinkedIn
- Integrado ao tema claro/escuro

---

## 🚀 Projetos em Destaque

| Projeto | Stack | Demo |
|---|---|---|
| Portal de Exames | Angular • Spring • JWT | [Ver](https://dancing-nougat-1402b3.netlify.app/) |
| Sistema de Gestão de Clínica Médica | Angular • Spring Boot • JWT • MySQL | [Ver](https://clinica-medica-daniel.netlify.app/) |
| Sistema de Anúncio de Reservas | Angular • Spring • JWT | [Ver](https://sistemadeanuncio.netlify.app/) |
| Stack Overflow Clone | Angular • Spring • JWT | [Ver](https://glittery-taiyaki-6135e1.netlify.app/) |
| Loja Virtual TechMania | Angular • TypeScript | [Ver](https://lojatechmania.netlify.app/) |

---

## 📁 Estrutura do Projeto

```
src/app/
│
├── angular-material/
│   └── app-material.module.ts      # Modulo com imports do Angular Material
│
├── model/
│   └── Project.ts                  # Interface do modelo de projeto
│
└── features/
    └── portfolio-carousel/
        ├── portfolio-carousel.component.ts    # Logica do carrossel
        ├── portfolio-carousel.component.html  # Template com abas e card
        └── portfolio-carousel.component.scss  # Estilos com tema claro/escuro
```

---

## 💡 Destaques Técnicos

### Tema claro/escuro com CSS Variables + Angular Material

```scss
// Dois temas do Material definidos no SCSS
$portfolio-light-theme: mat.define-light-theme(...);
$portfolio-dark-theme:  mat.define-dark-theme(...);

// Alternancia via atributo data-theme no elemento raiz
&[data-theme="light"] { --bg: #eaf0ec; --accent: #1f6f54; ... }
&[data-theme="dark"]  { --bg: #0f1712; --accent: #4fd9a6; ... }
```

### Preferência do sistema operacional

```typescript
// Detecta o tema do sistema na primeira visita
if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
  this.themeMode = 'dark';
}
```

### Navegação circular

```typescript
// Volta ao ultimo ao chegar no primeiro (e vice-versa)
previous(): void {
  this.selectedIndex =
    (this.selectedIndex - 1 + this.portfolioItems.length)
    % this.portfolioItems.length;
}
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- Angular CLI 17+

### 1. Clone o repositório

```bash
git clone https://github.com/Daniel-Penelva/meu-portfolio.git
cd portfolio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute a aplicação

```bash
ng serve
```

Acesse: `http://localhost:4200`

### 4. Build de produção

```bash
ng build --configuration production
```

---

## 👨‍💻 Autor

<div align="center">

**Daniel Penelva de Andrade**

[![GitHub](https://img.shields.io/badge/GitHub-Daniel--Penelva-black?style=for-the-badge&logo=github)](https://github.com/Daniel-Penelva)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Daniel_Penelva-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/daniel-penelva-andrade/)

*© 2026 Daniel Penelva de Andrade — Todos os direitos reservados*

</div>