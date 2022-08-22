import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Location } from './models/location.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  appliedFilters: Subject<any>=new Subject<any>();
  constructor() { }
}
