export class Cliente {
  id: number;
  nombre: string;
  edad: number;
  estado: string;

  constructor(
    id: number = 0,
    nombre: string = '',
    edad: number = 0,
    estado: string = '1'
  ) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.estado = estado;
  }
}
