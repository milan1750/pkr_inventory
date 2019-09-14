import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  specialEvents = []

  constructor(private _eventService: StocksService,
              private _router: Router) { }


  ngOnInit() {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
