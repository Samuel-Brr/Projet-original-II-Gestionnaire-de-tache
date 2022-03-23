import { Tache } from "./tache"

export class Liste {
  titre: string
  taches: Tache[]

  constructor(titre: string, taches: Tache[]){
    this.titre = titre
    this.taches = taches
  }
}
