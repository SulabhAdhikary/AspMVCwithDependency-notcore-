import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Route, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { BackendApiService } from './services/backend-api.service';
import { LibrarydetailComponent } from './librarydetail/librarydetail.component';
import { ServiceResolveService } from './services/service-resolve.service';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavmenufordetailComponent } from './navmenufordetail/navmenufordetail.component';
import { LibrarybooksComponent } from './librarybooks/librarybooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LibraryHomeComponent,
    LibrarydetailComponent,
    NavmenuComponent,
    NavmenufordetailComponent,
    LibrarybooksComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LibraryHomeComponent,
        pathMatch: 'full',
        resolve: ServiceResolveService
      },
      { path: '', component: LibraryHomeComponent, pathMatch : 'full' },
      { path: 'Home', component: LibraryHomeComponent },
      { path: 'Libraries/Details/:libid', component: LibrarydetailComponent },
      { path: 'Libraries/Details/:libid/LibraryBook', component: LibrarybooksComponent}

      ])
  ],
  providers: [BackendApiService, ServiceResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
