import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  title: string = '';
  description: string = '';

  constructor(private http: HttpClient) {}

  createRecord(): void {
    if (this.title.trim() === '' || this.description.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const newRecord = {
      title: this.title,
      description: this.description
    };

    this.http.post<any>('URL_DEL_ENDPOINT', newRecord).subscribe(
      (response) => {
        console.log('Registro creado con éxito:', response);
        this.title = '';
        this.description = '';
      },
      (error) => {
        console.error('Error al crear el registro:', error);
        alert('Error al crear el registro. Por favor, inténtalo de nuevo.');
      }
    );
  }
}
