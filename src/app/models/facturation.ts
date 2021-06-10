import { Chauffeur } from "./chauffeur";
import { Reservation } from "./reservation";

export interface Facturation {
  id: number;
  prix: number;
  chauffeur: Chauffeur;
  reservation: Reservation
}
