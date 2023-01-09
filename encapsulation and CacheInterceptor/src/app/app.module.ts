import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NonEncapsulationComponent } from './non-encapsulation/non-encapsulation.component';
import { EmulateEncapsulationComponent } from './emulate-encapsulation/emulate-encapsulation.component';
import { ShadowEncapsulationComponent } from './shadow-encapsulation/shadow-encapsulation.component';
import { SubChildComponent } from './sub-child/sub-child.component';
import { RandomComponentComponent } from './random-component/random-component.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './CacheInterceptors/cache.interceptor';
import { TestService } from './CacheInterceptors/test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NonEncapsulationComponent,
    EmulateEncapsulationComponent,
    ShadowEncapsulationComponent,
    SubChildComponent,
    RandomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
