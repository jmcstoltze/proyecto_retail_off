import { Component, OnInit } from '@angular/core';
// import { MenuController } from '@ionic/angular'; // Importación del controlador del menú

@Component({
  selector: 'app-menu', // será la etiqueta del menú
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() {}

  // constructor(private menuCtrl: MenuController) { } // se declara el controlador como parámetro del constructor

  ngOnInit() {
  }

  // Se define la función para acceder al menú
  /*presionarMenu(){
    this.menuCtrl.toggle();
  }*/

}
