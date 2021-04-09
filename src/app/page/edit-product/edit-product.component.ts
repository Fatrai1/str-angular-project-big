import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => this.productService.get(params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  updating: boolean = false;

  onUpdate(form: NgForm, product: Product): void{
    if(product.id === 0){
      this.productService.create(product)
    }else {
      this.updating = true,
      this.productService.update(product)
    }
     this.router.navigate(['product'])
     this.productService.getAll()
     this.productService.getAllsum()
  }
  // onShow(): void{
  //   this.mytoaster.showSuccess()
  // }
}
