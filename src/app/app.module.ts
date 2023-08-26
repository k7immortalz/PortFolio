import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SkillsComponent } from './skills/skills.component';
import { CuroselComponent } from './curosel/curosel.component';
import { CollapseComponent } from './collapse/collapse.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContentComponent,
    SkillsComponent,
    CuroselComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
