import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/models/tache';
import { ListeDeTachesService } from 'src/app/services/liste-de-taches.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {

  taches$: Observable<Tache[]>

  constructor(private listeDeTaches: ListeDeTachesService) {

    this.taches$ = listeDeTaches.liste$

   }

  ngOnInit(): void {
  }


}
