import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Liste } from '../models/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeDeTachesService {

  listes$: Observable<Liste[]>
  listes: Liste[] =[{

    titre: "toto",
    taches: [{
      titre: "okok",
      contenu: "yolo"
    }]
  },
  {

    titre: "toto",
    taches: [{
      titre: "okok",
      contenu: "yolo"
    }]
  },
  {

    titre: "toto",
    taches: [{
      titre: "okok",
      contenu: "yolo"
    }]
  }
]

  subject = new BehaviorSubject<Liste[]>([])

  constructor() {

    this.listes$ = this.subject.asObservable()
    this.subject.next(this.listes)
    console.log("valeur de l'observable du service" ,this.listes$)

   }

   sauvegarder(data){
    this.subject.next(data)
    this.listes = data
   }

}
