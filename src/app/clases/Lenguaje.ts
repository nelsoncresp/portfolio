export class Lenguaje {
  nombre: string;
  imagen: string;
  descripcionResumida: string;
  descripcion: string;
  porcentaje: number;

  constructor(nombre: string, imagen: string, descripcionResumida: string, descripcion: string, porcentaje: number) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcionResumida = descripcionResumida;
    this.descripcion = descripcion;
    this.porcentaje = porcentaje;
  }
}
