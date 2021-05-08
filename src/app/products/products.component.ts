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
      productTitle:"Technology-1",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      },
      {
      productTitle:"Technology-2",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
      },
      
      {
      productTitle:"Technology-3",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
      },
      
      {
      productTitle:"Technology-4",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
      },
      
      {
      productTitle:"Technology-5",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://wallpaperaccess.com/full/4755970.jpg"
      },
      
      {
      productTitle:"Technology-6",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImg:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5577975.jpg"
      }
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
