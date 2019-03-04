import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WorksComponent,
    SkillsComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
