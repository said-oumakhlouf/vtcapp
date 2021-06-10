import { Client } from "./client";
import { Facturation } from "./facturation";
import { Trajet } from "./trajet";

export interface Reservation {
  id: number;
  rdv: Date;
  facturations: Facturation[];
  client: Client;
  trajet: Trajet;
}
