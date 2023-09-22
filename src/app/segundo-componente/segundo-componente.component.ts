import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "José";
  dataNascimento = "1991-04-07";
  urlImagem = "/assets/Jose.jpg";
  mostrarDataNascimento(){
    alert(`A data de nascimento do José é: ${this.dataNascimento}`);
  }
}
