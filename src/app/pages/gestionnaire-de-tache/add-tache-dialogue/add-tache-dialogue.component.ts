import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tache-dialogue',
  templateUrl: './add-tache-dialogue.component.html',
  styleUrls: ['./add-tache-dialogue.component.scss']
})
export class AddTacheDialogueComponent implements OnInit {

  form = this.fb.group({
    contenu:["", Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
