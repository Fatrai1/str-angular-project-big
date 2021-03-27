import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = `http://localhost:3000/products`

  constructor(
    
  ) { }
}
