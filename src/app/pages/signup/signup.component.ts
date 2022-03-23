import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    email:['', Validators.required],
    mdp:['', [Validators.required,
              Validators.minLength(5)]],
    confirmMdp:['', Validators.required]
  })

  ngOnInit(): void {
  }

}
