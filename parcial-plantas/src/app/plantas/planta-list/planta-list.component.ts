import { Component } from '@angular/core';
import {PlantaService} from "../planta.service";
import {Planta} from "../planta";

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent {

  plantas: Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.obtenerPlantas();
  }

  obtenerPlantas(): void {
    this.plantaService.obtenerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
}
