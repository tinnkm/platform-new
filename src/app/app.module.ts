
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from './modules/main/main.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './modules/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'index', component: MainComponent },
      { path: '**', redirectTo: '/index' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
