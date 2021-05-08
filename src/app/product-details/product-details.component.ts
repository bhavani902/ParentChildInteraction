import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  
  @Input() productObj:Product;
  @Output() myEvent=new EventEmitter()
  sendProductToParent(productTitle){
    this.myEvent.emit(productTitle)
  }

}
