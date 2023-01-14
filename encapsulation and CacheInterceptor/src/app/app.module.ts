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
import { CommParentComponent } from './Components Communication/comm-parent/comm-parent.component';
import { CommChildComponent } from './Components Communication/comm-child/comm-child.component';
import { NgTemlateComponent } from './NGTemplateAndContainer/ng-temlate/ng-temlate.component';
import { LoginComponent } from './AuthGaurd/login/login.component';
import { AuthService } from './AuthGaurd/auth.service';
import { CandeactivateGaurdService } from './AuthGaurd/candeactivate-gaurd.service';
import { DashboardComponent } from './AuthGaurd/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NonEncapsulationComponent,
    EmulateEncapsulationComponent,
    ShadowEncapsulationComponent,
    SubChildComponent,
    RandomComponentComponent,
    CommParentComponent,
    CommChildComponent,
    NgTemlateComponent,
    LoginComponent,
    DashboardComponent
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
    TestService,
    AuthService,
    CandeactivateGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
