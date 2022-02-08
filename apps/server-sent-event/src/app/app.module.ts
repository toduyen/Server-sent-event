import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HahahaComponent } from './hahaha/hahaha.component';
import { CustomerPipe } from './customer.pipe';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HahahaComponent, CustomerPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
