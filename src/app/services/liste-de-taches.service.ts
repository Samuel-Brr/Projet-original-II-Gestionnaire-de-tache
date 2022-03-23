import { Injectable } from '@angular/core';
import { Liste } from '../models/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeDeTachesService {

  listes: Liste[]

  constructor() { }
}
