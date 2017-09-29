import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JournalApiService } from './services/journal-api.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { FormComponent } from './form/form.component';

const myRoutes: Routes = [
    { path: '', component: EntryListComponent },
    { path: 'entry/:id', component: SingleEntryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [JournalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
