import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    email:['', Validators.required],
    mdp:['', [Validators.required,
              Validators.minLength(5)]],
  })

  ngOnInit(): void {
  }

}
