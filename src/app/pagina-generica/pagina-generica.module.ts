import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaGenericaPageRoutingModule } from './pagina-generica-routing.module';

import { PaginaGenericaPage } from './pagina-generica.page';

import { MenuPage } from '../menu/menu.page';

import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaGenericaPageRoutingModule,
    MenuPageModule // Se importa el menú
  ],
  declarations: [PaginaGenericaPage]

})

export class PaginaGenericaPageModule {}
