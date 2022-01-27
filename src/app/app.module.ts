import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { YeteneklerimizCozumlerimizComponent } from './yeteneklerimiz-cozumlerimiz/yeteneklerimiz-cozumlerimiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffCanvasComponent,
    FooterComponent,
    ContentComponent,
    IletisimComponent,
    IndexComponent,
    YeteneklerimizCozumlerimizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
