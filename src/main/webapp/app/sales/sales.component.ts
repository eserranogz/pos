import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/entities/product/product.service';
import { Observable, observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { JhiLanguageService } from 'ng-jhipster';
import { startWith, map, debounceTime, mergeMapTo, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { IProduct } from 'app/shared/model/product.model';

@Component({
  selector: 'jhi-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  public products: Observable<IProduct[]> = new Observable<IProduct[]>();
  public autoCompleteControl = new FormControl();

  constructor(private productService: ProductService, private jhiLanguageService: JhiLanguageService) {}

  lookup(value: string): Observable<IProduct[]> {
    return this.productService.search(value.toLowerCase()).pipe(
      // map the item property of the github results as our return object
      map(result => result.body),
      // catch errors
      catchError(_ => {
        return of(null);
      })
    );
  }

  /* tslint:disable:typedef */
  ngOnInit() {
    this.products = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== '' && value.length > 2) {
          // lookup from github
          return this.lookup(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }
  /* tslint:enable:typedef */
}
