import { Component } from '@angular/core';
import { AppMaterialModule } from '../../angular-material/app-material.module';
import { Project } from '../../model/Project';

type ThemeMode = 'light' | 'dark'

@Component({
  selector: 'app-portfolio-carousel',
  standalone: true,
  imports: [AppMaterialModule,

  ],
  templateUrl: './portfolio-carousel.component.html',
  styleUrl: './portfolio-carousel.component.scss'
})
export class PortfolioCarouselComponent {

  // Define os itens do portfólio
  portfolioItems: Project[] = [
    {
      title: 'Portal de Exames',
      stack: 'ANGULAR • SPRING • JWT',
      description: 'Sistema completo de avaliação online com login, cadastro de exames, questões dinâmicas e resultado final. Para acesso de administrador fica designado a criação de exames. Para acesso a usuários fica designado a aplicação do exame. Desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://dancing-nougat-1402b3.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/portal-exame-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/portal-exame-backend',
    },
    {
      title: 'Sistema de Anúncio de Reservas de Serviços',
      stack: 'ANGULAR • SPRING • JWT',
      description: 'Sistema de anúncios de serviços. Possui acesso ao painel tanto para o cliente quanto para a empresa que terá autenticação de login. O acesso ao cliente vai conter páginas de anúncio, detalhes de serviço, página de contratação do serviço e comentário. O acesso a empresa vai conter página de perfil, criação, edição e exclusão de anúncios de serviço e status de contratação. Desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://sistemadeanuncio.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/sistema-anuncio-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/sistema-anuncio-backend',
    },
    {
      title: 'Stack Overflow Clone',
      stack: 'ANGULAR • SPRING • JWT',
      description: 'Projeto de clone do Stack Overflow, onde o usuário pode fazer perguntas e respostas. O projeto foi desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://glittery-taiyaki-6135e1.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/stackoverflow-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/stackoverflow-backend',
    },
    {
      title: 'Loja Virtual TechMania',
      stack: 'ANGULAR • TYPESCRIPT',
      description: 'Sistema de e-commerce desenvolvido com foco em experiência do usuário, contendo listagem paginada de produtos, busca dinâmica em tempo real, animações modernas, validação de estoque e carrinho de compras com controle de quantidade. A aplicação utiliza arquitetura baseada em serviços, comunicação reativa entre componentes e navegação dinâmica por rotas. Desenvolvido com Angular, TypeScript e CSS moderno.',
      link: 'https://lojatechmania.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/loja-virtual',
      githubBackend: 'https://github.com/Daniel-Penelva/loja-virtual',
    }
  ];

  selectedIndex = 0; // Índice do item selecionado no carrossel
  themeMode: ThemeMode = 'light'; // Tema de seção (claro por padrão)

  private readonly THEME_STORAGE_KEY = 'portfolio-theme';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY) as ThemeMode | null;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      // usa a preferencia salva pelo visitante
      this.themeMode = savedTheme; 
    } else if(window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      // segue preferencia do sistema operacional
      this.themeMode = 'dark';
    }
  }

  // Alterna entre claro e escuro e memoriza a escolha no navegdor
  toggleTheme(): void {
    this.themeMode = this.themeMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.THEME_STORAGE_KEY, this.themeMode);
  }

  // Seleciona diretamente um projeto pelo índice (clique nas abas)
  selectProject(index: number): void {
    this.selectedIndex = index;
  }

  // anterior - Método para voltar para o projeto anterior do carrossel
  previous(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.portfolioItems.length) % this.portfolioItems.length;
  }


  // próximo - Método para avançar para o próximo projeto do carrossel
  next(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.portfolioItems.length;
  }

  // Usa as duas primeiras palavras do título como rótulo curto da aba
  shortTitle(title: string): string {
    return title.split('').slice(0, 2).join('');
  }

}
