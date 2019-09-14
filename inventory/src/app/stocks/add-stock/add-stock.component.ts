import { Component, OnInit } from '@angular/core';
import { QuantityTypeService } from 'src/app/services/quantity-type.service';
import { CategoryTypeService } from 'src/app/services/category-type.service';
import { Product } from '../models/product.model';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { GroupTypeService } from 'src/app/services/group-type.service';
import { ModelTypeService } from 'src/app/services/model-type.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  errorMsg = '';
  productTemplate: Product;
  product = {
    _id: '',
    productId: '',
    category: '',
    group: '',
    productName: '',
    model: '',
    productDescription: '',
    productPrice: '',
    hasAttributes: '',
    hasInstances: '',
    packSize: '',
    averageCost: '',
    singleUnitProductCode: '',
    measurementUnit: '',
    dimensionGroup: '',
    warrentyTerms: '',
    productQuantity: '',
    productSellingPrice: '',
    productCostPrice: '',
  };
  quantityTypeData = [];
  categoryType = [];
  modelType = [];
  groupType = [];
  productSet = false;

  selectedCategory: string;
  selectedModel: string;
  selectedGroup: string;
  selectedQuantityMeasure: string;
  constructor(private router:Router,private quantityTypeService: QuantityTypeService, private categoryService: CategoryTypeService, private groupService: GroupTypeService, private modelService: ModelTypeService, private productService: ProductService) { }

  ngOnInit() {
    this.getQuantityType();
    console.log();
  }


  getQuantityType() {
    this.quantityTypeService.getType().subscribe(
      res => {
        this.quantityTypeData = res.data;
      }
    );

    this.categoryService.getType().subscribe(
      res => {
        this.categoryType = res.data;
      },
      err => {
        console.log(err);
      }
    );

    this.groupService.getType().subscribe(
      res => {
        this.groupType = res.data;
      },
      err => {
        console.log(err);
      }
    );

    this.modelService.getType().subscribe(
      res => {
        this.modelType = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  saveProduct(productForm: NgForm) {
    this.productSet = true;
    if (productForm.invalid) {
      return false;
    }
    this.productTemplate = productForm.value;
    this.productService.savetype(this.productTemplate).subscribe(
      res => {
        productForm.reset();
        this.router.navigate(['/product-list']);
      },
      err => {
        this.errorMsg = 'Make sure your internet connection is enabled, Server is not responding at the moment';
      }
    );
    // console.log(this.productTemplate);
  }

}
