import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  formData = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: ''
  };

  errorMessage: string = '';

  constructor(private router: Router) { }

  async onSubmit() {
    try {
      const response = await axios.post('http://localhost:8080/pessoas', this.formData);
      console.log('Response:', response.data);
      this.router.navigate(['/cadastro-success']);
    } catch (error) {
      console.error('There was an error!', error);
      this.errorMessage = 'Erro ao cadastrar. Por favor, tente novamente.';
    }
  }
}
