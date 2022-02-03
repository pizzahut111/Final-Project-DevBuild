import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ParkListComponent } from './park-list/park-list.component';
import { ParkDetailsComponent } from './park-details/park-details.component';
import { PlanningtipsComponent } from './planningtips/planningtips.component';
import { SearchparkComponent } from './searchpark/searchpark.component';
import { TopfiveComponent } from './topfive/topfive.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ParkListComponent,
    ParkDetailsComponent,
    PlanningtipsComponent,
    SearchparkComponent,
    TopfiveComponent,
    UserprofileComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'park-list', component: ParkListComponent},
      { path: 'details', component: ParkDetailsComponent },
      { path: 'planning', component: PlanningtipsComponent },
      { path: 'user', component: UserprofileComponent },
      { path: 'search', component: SearchparkComponent },
      { path: 'topfive', component: TopfiveComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
