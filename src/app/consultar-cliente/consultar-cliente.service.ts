import { Injectable } from '@angular/core';
import axios from 'axios';
import { PessoaDTO } from './consultar-cliente-dto';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl: string = 'http://localhost:8080/pessoas';

  constructor() { }

  async getClientes(page: number, size: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/page`, {
        params: {
          page: page,
          size: size
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching clientes', error);
      throw error;
    }
  }
}
