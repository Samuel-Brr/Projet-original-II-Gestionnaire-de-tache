import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-liste-dialogue',
  templateUrl: './liste-dialogue.component.html',
  styleUrls: ['./liste-dialogue.component.scss']
})
export class ListeDialogueComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    titre: ["", Validators.required]
  })

  ngOnInit(): void {
  }

}
