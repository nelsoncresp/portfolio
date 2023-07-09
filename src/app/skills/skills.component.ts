import { Component } from '@angular/core';
import { Lenguaje } from '../clases/Lenguaje';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  lenguajes: Lenguaje[] = [
    new Lenguaje('Angular', 'assets/angular.png', 'Presiona el botón para ver mi experiencia', 'Desarrollo de páginas web interactivas y dinámicas.\nUtilizo componentes reutilizables para crear la estructura de mis aplicaciones.\nAprovecho los servicios para gestionar la lógica de negocio y consumir datos de APIs externas.\nUtilizo pipes para transformar y formatear los datos de manera eficiente.\nEstoy familiarizado con el uso del módulo FormsModule para trabajar con formularios y garantizar una interacción fluida con los usuarios.\nConozco cómo conectar bases de datos con Angular para almacenar y recuperar datos de manera segura y eficiente.', 70),
    new Lenguaje('React', 'assets/logo-react.png', 'Presiona el botón para ver mi experiencia', 'Desarrollo de interfaces de usuario interactivas y reactivas utilizando React.\nUtilizo componentes funcionales y de clase para construir la estructura de mis aplicaciones.\nImplemento el enrutamiento y el manejo del estado con React Router y Redux.\nEstoy familiarizado con el uso de bibliotecas y herramientas complementarias como Axios, React Bootstrap y Material-UI.\nAdemás, tengo experiencia en la integración de APIs externas y en la optimización del rendimiento de las aplicaciones React.', 80),
    new Lenguaje('Node.js + Express', 'assets/nodejs.jpg', 'Presiona el botón para ver mi experiencia', 'Desarrollo de aplicaciones del lado del servidor utilizando Node.js y Express.\nUtilizo Express para crear API RESTful y gestionar rutas, autenticación y autorización.\nEstoy familiarizado con la integración de bases de datos como MongoDB y MySQL, y con la implementación de autenticación con Passport.js.\nAdemás, tengo experiencia en el manejo de solicitudes HTTP, el enrutamiento y la manipulación de datos en el servidor.', 60),
    new Lenguaje('MySQL', 'assets/mysql.png', 'Presiona el botón para ver mi experiencia', 'Diseño y administración de bases de datos utilizando MySQL.\nTengo experiencia en la creación de tablas, relaciones y consultas SQL avanzadas.\nAdemás, puedo optimizar el rendimiento de las consultas y asegurar la integridad de los datos mediante el uso de índices, claves primarias y restricciones.', 90),
    new Lenguaje('Java + Spring Boot', 'assets/spring-2.png', 'Presiona el botón para ver mi experiencia', 'Desarrollo de aplicaciones empresariales utilizando Java y el framework Spring Boot.\nTengo experiencia en la creación de servicios RESTful, la implementación de seguridad con Spring Security, y la integración de bases de datos con Spring Data JPA.\nAdemás, estoy familiarizado con el uso de herramientas de construcción como Maven y el control de versiones con Git.', 75),
  ];

  lenguajeSeleccionado: Lenguaje | null = null;
  showModal = false;

  openModal(lenguaje: Lenguaje) {
    this.showModal = true;
    this.lenguajeSeleccionado = lenguaje;
  }

  closeModal() {
    this.showModal = false;
    this.lenguajeSeleccionado = null;
  }
}
