import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';



import { GestionnaireDeTacheComponent } from './pages/gestionnaire-de-tache/gestionnaire-de-tache.component';
import { ListeComponent } from './pages/gestionnaire-de-tache/liste/liste.component';
import { TachesComponent } from './pages/gestionnaire-de-tache/taches/taches.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ListeDialogueComponent } from './pages/gestionnaire-de-tache/liste-dialogue/liste-dialogue.component';
import { AddTacheDialogueComponent } from './pages/gestionnaire-de-tache/add-tache-dialogue/add-tache-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionnaireDeTacheComponent,
    ListeComponent,
    TachesComponent,
    SignupComponent,
    ConnexionComponent,
    ListeDialogueComponent,
    AddTacheDialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
