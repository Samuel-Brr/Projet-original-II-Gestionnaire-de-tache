import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tache } from 'src/app/models/tache';
import { ListeDeTachesService } from 'src/app/services/liste-de-taches.service';

@Component({
  selector: 'app-add-tache-dialogue',
  templateUrl: './add-tache-dialogue.component.html',
  styleUrls: ['./add-tache-dialogue.component.scss']
})
export class AddTacheDialogueComponent implements OnInit {

  form = this.fb.group({
    contenu:["", Validators.required]
  })

  constructor(private fb: FormBuilder,
              private listeDeTaches: ListeDeTachesService) { }

  ngOnInit(): void {
  }


  onSauvegarder(form){
    let liste = this.listeDeTaches.listes[this.listeDeTaches.index]
    const tache = new Tache("", form.value.contenu)

    const newListe = {
      ...liste,
    }

    newListe.taches.push(tache)

    liste = newListe

    // console.log(form.value.contenu)

  }
}
