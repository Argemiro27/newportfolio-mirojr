import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedtext', { static: false }) typedtextRef!: ElementRef;

  aText = [
    "Sou um jovem Desenvolvedor Fullstack Pleno de 21 anos, apaixonado por tecnologia. Com 2 anos de experiência profissional e mais de 5 anos de estudo em programação, trabalho tanto com front quanto backend, com maior interesse e habilidades destacadas no frontend. Busco sempre desenvolver códigos limpos, garantindo qualidade e legibilidade em meus trabalhos, e criar interfaces intuitivas e responsivas para proporcionar a melhor experiência aos usuários.",
    "Estou sempre aberto a desafios e aprendendo novas tecnologias, pois acredito que a área de desenvolvimento está em constante evolução. Tenho entusiasmo por projetos inovadores e estou comprometido em entregar soluções de alta qualidade para os problemas que enfrento."
  ];
  iSpeed = 50;
  iIndex = 0;
  iArrLength = this.aText[0].length;
  iScrollAt = 20;
  iTextPos = 0;
  sContents = '';
  iRow: number = 0; // Inicialize com um valor padrão

  ngAfterViewInit() {
    if (this.typedtextRef) {
      this.typewriter();
    }
  }

  typewriter() {
    this.sContents = '';
    this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
    const destination = this.typedtextRef.nativeElement;

    while (this.iRow < this.iIndex) {
      this.sContents += this.aText[this.iRow++] + '<br />';
    }

    destination.innerHTML =
      this.sContents +
      this.aText[this.iIndex].substring(0, this.iTextPos) +
      '_';

    if (this.iTextPos++ == this.iArrLength) {
      this.iTextPos = 0;
      this.iIndex++;

      if (this.iIndex != this.aText.length) {
        this.iArrLength = this.aText[this.iIndex].length;
        setTimeout(() => {
          this.typewriter();
        }, 500);
      }
    } else {
      setTimeout(() => {
        this.typewriter();
      }, this.iSpeed);
    }
  }
}
