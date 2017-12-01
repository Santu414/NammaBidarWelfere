import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule,AgmInfoWindow } from '@agm/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { ImageComponent } from './gallery/image/image.component';
import { ImageDetailComponent } from './gallery/image/image-detail.component';
import { ImageService } from './gallery/image/shared/image.service';
import { ImageFilterPipe } from './gallery/image/shared/filter.pipe';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { AgmMap } from '@agm/core/directives/map';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    ActivitiesComponent,
    GalleryComponent,
    ContactusComponent,
    EventsComponent,
    ImageComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    SendmessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnGEhqJ6zsgVDqAClNL7L6b3hB6qWI318'
    }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'image/:id', component: ImageComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'events', component: EventsComponent },
      {path:'sendmessage',component:SendmessageComponent},
      { path: 'contactus', component: ContactusComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
