import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:Product[]=[
    {
      productTitle:"Maruti Ertiga",
      description:"1462CC engine,60Liters of fuel capacity,Mileage:17.99 Kmpl,Dimensions(L*W*H):4395*1735*1690 mm^3",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/7048/1611730397556/front-left-side-47.jpg"
      },
      {
      productTitle:"Hyundai Verna",
      description:"1493CC engine,fuel type is diesel,Mileage:17.99 Kmpl,Dimensions(L*W*H):4,440*1,729*1,475 mm",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/7729/1616055133475/front-left-side-47.jpg?tr=w-456"
      },
      
      {
      productTitle:"Honda WR-V",
      description:"1498CC engine,fuel type is diesel,Mileage:16.5 - 23.7 kmpl,Dimensions(L*W*H):3,999*1,734*1,601mm",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/WR-V/7665/1601969484764/front-left-side-47.jpg?tr=w-456"
      },
      
      {
      productTitle:"Tata Altroz",
      description:"1220-1497cc engine,fuel type is diesel,Mileage:25.11kmpl, Dimensions(L*W*H):3,990*1,755*1,523mm",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/7247/1578642800962/front-left-side-47.jpg"
      },
      
      {
      productTitle:"Mahindra Marazzo",
      description:"1497CC engine,fuel type is diesel,Mileage: 17.3 kmpl, Dimensions(L*W*H):4,585*1,866*1,774mm",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Marazzo/7948/1597419573783/front-left-side-47.jpg"
      },
      
      {
      productTitle:"Renault KWID",
      description:"799-999cc engine,fuel type is petrol,Mileage:22.0kmpl, Dimensions(L*W*H):3,731*1,579*1,490mm",
      productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/7426/1617274332690/front-left-side-47.jpg"
      },
      {
        productTitle:"Ford Aspire",
        description:"1194-1499cc engine,fuel type is petrol,Mileage:14.23kmpl, Dimensions(L*W*H):4,384*1,813*1,669mm",
        productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Figo-Aspire/7608/1613548799141/front-left-side-47.jpg"
      },
      {
        productTitle:"Nissan Kicks",
        description:"1330-1498cc engine,fuel type is petrol,Mileage:22.0kmpl, Dimensions(L*W*H):3,731*1,579*1,490mm",
        productImg:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Kicks/7828/1593410136460/front-left-side-47.jpg"
      },
      

  ]
  productCount:number=0
  productsSentByChild=[];
  status:boolean=true
  getProductDetailsFromChild(productTitle)
  {
    this.productsSentByChild.push(productTitle)
    this.productCount++
  }
  changeImg()
  {
    if (this.productCount==0){
      this.status=!this.status;

    }
  }
}
