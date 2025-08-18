// Importa el decorador Component necesario para definir un componente Angular
import { Component } from '@angular/core';

// Importa CommonModule, necesario para usar directivas como *ngFor y *ngIf
import { CommonModule } from '@angular/common'; // 👈 FALTA ESTO

// Importa FormsModule para poder usar [(ngModel)] en los formularios
import { FormsModule } from '@angular/forms';

// Define el componente
@Component({
  selector: 'app-root', // Nombre del componente en el HTML (<app-root></app-root>)
  standalone: true, // Indica que este componente no depende de un módulo (NgModule)
  imports: [CommonModule, FormsModule], // Importa módulos necesarios para el template
  templateUrl: './app.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./app.component.css'] // Ruta del archivo CSS asociado
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // Lista inicial de frutas que se mostrarán
  frutas = [
    {
      nombre: 'Manzana',
      precio: 1.5,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'
    },
    {
      nombre: 'Plátano',
      precio: 1.2,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
    },
    {
      nombre: 'Naranja',
      precio: 1.0,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg'
    }
  ];

  // Objeto que representa la nueva fruta a agregar, usado con ngModel
  nuevaFruta = { nombre: '', precio: 0, imagen: '' };

  // Función para agregar una nueva fruta a la lista
  agregarFruta() {
    // Verifica que todos los campos estén completos y el precio sea mayor que 0
    if (this.nuevaFruta.nombre && this.nuevaFruta.precio > 0 && this.nuevaFruta.imagen) {
      // Agrega una copia del objeto nuevaFruta a la lista de frutas
      this.frutas.push({ ...this.nuevaFruta });

      // Limpia el formulario reseteando el objeto nuevaFruta
      this.nuevaFruta = { nombre: '', precio: 0, imagen: '' };
    }
  }
}
