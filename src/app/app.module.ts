import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './data.service';

import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMasonryModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
