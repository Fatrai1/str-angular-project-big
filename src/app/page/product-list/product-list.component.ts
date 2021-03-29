import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productCount: number=0;
  productSum: number=0;

  productFilter: {count: number} = {count:0};
  sumFilter: {sum: number} = {sum:0};

  productList: BehaviorSubject<Product[]> | Observable<Product[]> = this.productService.list$.pipe(
    tap(products => this.productCount=products.length),
    tap(products => this.productFilter.count = products.length),
  )

  summa2: number=0;
  featuredProduct: number=0;
  activeProduct: number=0;

  featuredCount(): void {
    this.productService.getAllsum().subscribe(data =>
      this.featuredProduct = data.filter(item => item.featured).length)
  }

  activeCount(): void {
    this.productService.getAllsum().subscribe(data =>
      this.activeProduct = data.filter(item => item.active).length)
  }

  sum(): void {
    this.productService.getAllsum().subscribe(data => {
      this.summa2 = data.map(item =>item.price)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
    })
  }

  onget():void {
    this.productService.getAll()
  }

  constructor(
    private productService: ProductService,
    private router: Router,

  ) { }

  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());

  ngOnInit(): void {
    this.productService.getAll();
    this.productService.getAllsum();
    this.sum();
    this.featuredCount();
    this.activeCount();
  }

  onDelete(product: Product): void {
    this.productService.remove(product);
    this.sum();
    this.featuredCount();
    this.activeCount();
    this.router.navigate(['product']);
  }

  direction: boolean = true;
  columnKey: string = '';
  phrase: string = '';

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.direction = !this.direction;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.sum();
    this.featuredCount();
    this.activeCount();
  }


}
