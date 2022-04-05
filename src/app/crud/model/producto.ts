/*

// tiene que ser igual al dto del backend
export class Product {
  productoId?: number;
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:variable-name
  nombreProducto?: number;
  stock?: number;
  precio?: number;
  caracteristicas?: string;
  //imageUrl!: string;
  //imageUrl!: string;
  tipoProducto?: string;
  disponible?: boolean;


}

*/
// tiene que ser igual al dto del backend
export interface Product {
  productoId: number;
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:variable-name
  nombreProducto: number;
  stock: number;
  precio: number;
  caracteristicas: string;
  //imageUrl!: string;
  //imageUrl!: string;
  tipoProducto: string;
  disponible: boolean;


}


