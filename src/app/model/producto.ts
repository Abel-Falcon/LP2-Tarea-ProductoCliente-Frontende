export class Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  estado: string;

  constructor(
    id: number = 0,
    nombre: string = '',
    precio: number = 0,
    cantidad: number = 0,
    estado: string = ''
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.estado = estado;
  }
}
