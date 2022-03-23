import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Liste } from 'src/app/models/liste';
import { ListeDeTachesService } from 'src/app/services/liste-de-taches.service';

@Component({
  selector: 'app-liste-dialogue',
  templateUrl: './liste-dialogue.component.html',
  styleUrls: ['./liste-dialogue.component.scss']
})
export class ListeDialogueComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(private fb: FormBuilder,
              private listeDeTaches: ListeDeTachesService) { }

  form = this.fb.group({
    titre: ["", Validators.required]
  })

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      console.log(this.form.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  onSauvegarder(form: FormGroup){
    let liste: Liste = new Liste(form.value.titre, [])
    let listes = this.listeDeTaches.listes
    let newListes = [...listes, liste]
    listes = newListes

    this.listeDeTaches.sauvegarder(listes)
 }

}
