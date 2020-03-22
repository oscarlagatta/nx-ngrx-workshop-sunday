import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule, authRoutes } from '@demo-app/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@demo-app/layout';
import { AuthGuard } from '@demo-app/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo:'products'},
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          loadChildren: () =>
            import('@demo-app/products').then(module => module.ProductsModule),
            canActivate: [AuthGuard]
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
