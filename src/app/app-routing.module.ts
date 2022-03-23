import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { GestionnaireDeTacheComponent } from './pages/gestionnaire-de-tache/gestionnaire-de-tache.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [{
  path: '', component: GestionnaireDeTacheComponent
},
{
  path:'signup', component: SignupComponent
},
{
  path:'connexion', component: ConnexionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
