import { Component, OnInit } from '@angular/core';
import { ClienteService } from './consultar-cliente.service';

interface PessoaDTO {
  ID: number;
  nome: string;
  cpf: string;
  email?: string;
  telefone?: string;
}

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.page.html',
  styleUrls: ['./consultar-cliente.page.scss'],
})
export class ConsultarClientePage implements OnInit {
  clientes: PessoaDTO[] = [];
  errorMessage: string = '';
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(private clienteService: ClienteService) { }

  async ngOnInit() {
    await this.loadClientes();
  }

  async loadClientes(page: number = 0) {
    try {
      const response = await this.clienteService.getClientes(page, 8);
      this.clientes = response.content;
      this.currentPage = response.number;
      this.totalPages = response.totalPages;
    } catch (error) {
      this.errorMessage = 'Erro ao carregar clientes. Por favor, tente novamente.';
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.loadClientes(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.loadClientes(this.currentPage - 1);
    }
  }
}
