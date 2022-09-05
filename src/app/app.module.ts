import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AsteroidsListComponent } from './components/asteroids-list/asteroids-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuriosityComponent } from './components/curiosity/curiosity.component';
import { AsteroidFormComponent } from './components/asteroid-form/asteroid-form.component';
import { CuriosityImageListComponent } from './components/curiosity-image-list/curiosity-image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsListComponent,
    TopBarComponent,
    DashboardComponent,
    CuriosityComponent,
    AsteroidFormComponent,
    CuriosityImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'asteroids', component: AsteroidsListComponent },
      { path: 'asteroidform', component: AsteroidFormComponent },
      { path: 'curiosityimages', component: CuriosityImageListComponent },
    ]),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
