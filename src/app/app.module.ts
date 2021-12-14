import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { BrowserModule } from '@angular/platform-browser';
import { NguiMapModule, NguiMapComponent } from '@ngui/map';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { AppMaterialModule } from './modules/app-material.module';
// import { OverlayContainer } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExamplesComponent } from './examples/examples.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { BattlemetricsComponent } from './examples/battlemetrics/battlemetrics/battlemetrics.component';
import { GithubComponent } from './examples/github/github.component';
import { MapExampleComponent } from './examples/map-example/map-example.component';
import { AmChartsComponent } from './examples/amCharts/amCharts.component';
import { ImgurComponent } from './examples/imgur/imgur.component';
import { PhotographyComponent } from './examples/photography/photography.component';
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExamplesComponent,
    SkillsComponent,
    HeaderMenuComponent,
    ExperienceComponent,
    ContactComponent,
    MainComponent,
    BattlemetricsComponent,
    GithubComponent,
    MapExampleComponent,
    AmChartsComponent,
    ImgurComponent,
    PhotographyComponent
  ],
  imports: [
    GalleryModule,
    LightboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing,
    HttpClientModule,
    NguiMapModule.forRoot({
      apiUrl:
        'https://maps.google.com/maps/api/js?key=AIzaSyCu-JklSPechSOiC0N4wEti09t4VL2DbC0&libraries=drawing',
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
