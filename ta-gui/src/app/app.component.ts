import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: "",loginGithub: ""};
}

export class Aluno {
  nome: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  loginGithub: string| undefined;
}