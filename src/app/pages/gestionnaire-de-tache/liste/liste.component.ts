import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Liste } from 'src/app/models/liste';
import { Tache } from 'src/app/models/tache';
import { ListeDeTachesService } from 'src/app/services/liste-de-taches.service';
import { ListeDialogueComponent } from '../liste-dialogue/liste-dialogue.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

listes$: Observable<Liste[]>

  constructor(private dialog: MatDialog,
              public listeDeTaches: ListeDeTachesService) {

                this.listes$ = listeDeTaches.listes$
                console.log("observable du composant", this.listes$)

              }

  ngOnInit(): void {

    this.listes$
      .pipe(
        tap(val => console.log("test",val[0].titre))
      )
      .subscribe()

  }

  openDialog() {
    this.dialog.open(ListeDialogueComponent);
  }

  displayTaches(taches: Tache[]){
    this.listeDeTaches.displayTaches(taches)
    console.log('clicked')
  }

}
