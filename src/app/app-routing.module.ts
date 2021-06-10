import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChauffeurComponent } from './components/chauffeur/chauffeur.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', component: UserComponent, pathMatch: 'full'},
  { path: 'chauffeur', component: ChauffeurComponent, pathMatch: 'full'},
  { path: 'client', component: ClientComponent, pathMatch: 'full'},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
