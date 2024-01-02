import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UppperpipePipe } from './pipes/uppperpipe.pipe';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { HelpService2Service } from './services/help-service2.service';
import { HelpServiceService } from './services/help-service.service';
import { backend_url } from './consts';
import { PagesModule } from './pagesModules/pages.module';
import { AppLinkedinComponent } from './app-linkedin/app-linkedin.component';
import { LinkedinComponent } from './linkedin/linkedin.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    CockpitComponent,
    ServerElementComponent,
    UppperpipePipe,
    TemplateComponent,
    ReactiveComponent,
    AppLinkedinComponent,
    LinkedinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule
  ],
  providers: [
    {provide:HelpServiceService,useClass:HelpService2Service},//Birden fazla servis kukllanırken aynı isimde farklı servislerde hangisinin çalısacağını belirtir
    {provide:backend_url,useValue:'httm:wwww.google.com'}  //ayrıca class olusturmadan kullanmak icin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
