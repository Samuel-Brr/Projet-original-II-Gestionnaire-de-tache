import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Liste } from '../models/liste';
import { Tache } from '../models/tache';

@Injectable({
  providedIn: 'root'
})
export class ListeDeTachesService {

  listes$: Observable<Liste[]>
  liste$: Observable<Tache[]>
  listes: Liste[] =[{

    titre: "toto",
    taches: [{
      titre: "okok",
      contenu: "yolo"
    }]
  },
  {

    titre: "tata",
    taches: [{
      titre: "blabla",
      contenu: "blibli"
    }]
  },
  {

    titre: "titi",
    taches: [{
      titre: "tictac",
      contenu: "toctuc"
    },
    {
      titre: "tictac",
      contenu: "toctuc"
    },]
  }
]

  index

  subject = new BehaviorSubject<Liste[]>([])
  subjectListe = new BehaviorSubject<Tache[]>([])

  constructor() {

    this.listes$ = this.subject.asObservable()
    this.subject.next(this.listes)
    // console.log("valeur de l'observable du service" ,this.listes$)
    this.liste$ = this.subjectListe.asObservable()

   }

   sauvegarder(data){
    this.subject.next(data)
    this.listes = data
   }

   displayTaches(taches: Tache[] ){
     this.subjectListe.next(taches)
    //  let abo =this.liste$
    //     .pipe(
    //       tap(val => console.log("Abonnement",val))
    //     )
    //     .subscribe()
    //  abo.unsubscribe()
   }

}
