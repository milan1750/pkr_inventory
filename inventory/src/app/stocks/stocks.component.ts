import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {


  events = []
  constructor(private _stocks: StocksService) { }

  ngOnInit() {
    this._stocks.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }

}
