import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonThumbnailComponent } from './pokemon-thumbnail/pokemon-thumbnail.component';
import { RouterModule, Routes } from '@angular/router';
import pokemon from 'pokemon';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'detail', component: PokemonListComponent },
  {
    path: 'items',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonThumbnailComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
