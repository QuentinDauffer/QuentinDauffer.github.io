import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidFormComponent } from './components/asteroid-form/asteroid-form.component';
import { AsteroidsListComponent } from './components/asteroids-list/asteroids-list.component';
import { CuriosityImageListComponent } from './components/curiosity-image-list/curiosity-image-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'asteroids', component: AsteroidsListComponent },
  { path: 'asteroidform', component: AsteroidFormComponent },
  { path: 'curiosityimages', component: CuriosityImageListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }