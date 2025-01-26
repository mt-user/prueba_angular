import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductsComponent } from './productos/components/edit-products/edit-products.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductosModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
     },
     {
       provide: DEFAULT_CURRENCY_CODE,
       useValue: 'ESP'
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
