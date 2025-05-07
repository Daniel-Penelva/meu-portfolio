import { Component } from '@angular/core';
import { AppMaterialModule } from '../../angular-material/app-material.module';
import { Project } from '../../model/Project';

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
      image: 'assets/images/portal_exames.png',
      description: 'Sistema completo de avaliação online com login, cadastro de exames, questões dinâmicas e resultado final. Para acesso de administrador fica designado a criação de exames. Para acesso a usuários fica designado a aplicação do exame. Desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://dancing-nougat-1402b3.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/portal-exame-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/portal-exame-backend',
    },
    {
      title: 'Sistema de Anúncio de Reservas de Serviços',
      image: 'assets/images/sistema_anuncio.jpg',
      description: 'Sistema de anúncios de serviços. Possui acesso ao painel tanto para o cliente quanto para a empresa que terá autenticação de login. O acesso ao cliente vai conter páginas de anúncio, detalhes de serviço, página de contratação do serviço e comentário. O acesso a empresa vai conter página de perfil, criação, edição e exclusão de anúncios de serviço e status de contratação. Desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://sistemadeanuncio.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/sistema-anuncio-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/sistema-anuncio-backend',
    },
    {
      title: 'Stack Overflow Clone',
      image: 'assets/images/home_stackOverflow.png',
      description: 'Projeto de clone do Stack Overflow, onde o usuário pode fazer perguntas e respostas. O projeto foi desenvolvido com Angular, Spring Boot e JWT.',
      link: 'https://glittery-taiyaki-6135e1.netlify.app/',
      githubFrontend: 'https://github.com/Daniel-Penelva/stackoverflow-frontend',
      githubBackend: 'https://github.com/Daniel-Penelva/stackoverflow-backend',
    }
  ];

  selectedIndex = 0; // Índice do item selecionado no carrossel

  // anterior - Método para voltar para o item anterior do carrossel
  previous() {
    this.selectedIndex = (this.selectedIndex - 1 + this.portfolioItems.length) % this.portfolioItems.length;
  }

  // próximo - Método para avançar para o próximo item do carrossel
  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.portfolioItems.length;
  }

}
