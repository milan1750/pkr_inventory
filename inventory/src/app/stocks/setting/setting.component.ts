import { Component, OnInit } from '@angular/core';
import { QuantityTypeService } from 'src/app/services/quantity-type.service';
import { CategoryTypeService } from 'src/app/services/category-type.service';
import { ModelTypeService } from 'src/app/services/model-type.service';
import { GroupTypeService } from 'src/app/services/group-type.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  quantityData = {
    typeName : '',
    typeShortName : '',
  };

  categoryType = {
    categoryName : '',
    categoryShortName : '',
  };

  modelType = {
    modelNames: '',
    modelShortName: '',
  };

  groupType = {
    groupName: '',
    groupShortName: '',
  };

  categoryList = [];
  quantityTypeList = [];
  modelList = [];
  groupList = [];

  constructor(private typeService: QuantityTypeService, private categoryService: CategoryTypeService, private modelService: ModelTypeService, private groupService: GroupTypeService) { }

  ngOnInit() {
    this.getQuantityType();
    this.getCategories();
    this.getModelTypes();
    this.getGroupTypes();
  }

  saveQuantiyType() {
    this.typeService.savetype(this.quantityData).subscribe(
      res => {
        this.getQuantityType();
      },
      err => {}
    );
  }

  saveCategoryType() {
    this.categoryService.savetype(this.categoryType).subscribe(
      res => {
        this.getCategories();
      },
      err => {}
    );
  }

  saveGroupType() {
    this.groupService.savetype(this.groupType).subscribe(
      res => {
        this.getGroupTypes();
      },
      err => {}
    );
  }

  saveModelType() {
    this.modelService.savetype(this.modelType).subscribe(
      res => {
        this.getModelTypes();
      },
      err => {}
    );
  }



  getQuantityType() {
    this.typeService.getType().subscribe(
      res => {
        this.quantityTypeList = res.data;
      },
      err => {

      }
    );
  }


  getCategories() {
    this.categoryService.getType().subscribe(
      res => {
        this.categoryList = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getGroupTypes() {
    this.groupService.getType().subscribe(
      res => {
        this.groupList = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getModelTypes() {
    this.modelService.getType().subscribe(
      res => {
        this.modelList = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
