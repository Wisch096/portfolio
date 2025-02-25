import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HomeComponent } from './pages/home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { ContactComponent } from './components/contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileIconComponent,
    HeaderComponent,
    ThemeToggleComponent,
    HomeComponent,
    ToggleSwitchComponent,
    ProjectsComponent,
    BlogComponent,
    PostDetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'pt-BR', // Idioma padrão
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
