import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/models/tache';
import { ListeDeTachesService } from 'src/app/services/liste-de-taches.service';
import { AddTacheDialogueComponent } from '../add-tache-dialogue/add-tache-dialogue.component';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {

  taches$: Observable<Tache[]>

  constructor(private listeDeTaches: ListeDeTachesService,
              private dialog: MatDialog
    ) {

    this.taches$ = listeDeTaches.liste$

   }

  ngOnInit(): void {}

  openDialog(){
    this.dialog.open(AddTacheDialogueComponent)
  }


}
