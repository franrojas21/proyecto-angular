import { Component } from '@angular/core';
import { Region } from 'src/app/model/Region';
import { ApiService } from 'src/app/servicio/api.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cotizacion } from 'src/app/model/Cotizacion';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss'],
})
export class CotizacionComponent {
  formSteps: any;
  progressSteps: any;
  formStepsNum: number = 0;
  regiones: Region[] = [];
  steps: Step[];
  formCotizacion!: FormGroup;

  constructor(private apiService: ApiService,
    private fb: FormBuilder
    ) {
    this.steps = [
      { orden: 0, active: true },
      { orden: 1, active: false },
      { orden: 2, active: false },
      { orden: 3, active: false },
      { orden: 4, active: false },
      { orden: 5, active: false },
      { orden: 6, active: false },
    ];
  }

  ngOnInit() {
    this.formCotizacion = this.fb.group({
        nombre:["",[Validators.required]],
        email:["",[Validators.required, Validators.email ]],
        telefono:["",[Validators.required]],
        region:["",[Validators.required]],
        comuna:["",[Validators.required]],
        tipoVivienda:["",[Validators.required]],
        medidaVivienda:["",[Validators.required]],
        ultimaReforma:["",[Validators.required]],
        presupuesto:["",[Validators.required]],
        plazoTiempo:["",[Validators.required]],
        info:[""],
        imagen:[""],
    });

    this.apiService.getRegions()
    .then((respuesta) => {
      if (respuesta !== undefined) {
        this.regiones = respuesta;
      }
    })
    .catch((error)=>{
      console.error(error);
    })
    ;
  }

  nextStep() {
    this.formStepsNum++;
  }
  backStep() {
    this.formStepsNum--;
  }

  sendCotizacion(){

  }
}

interface Step {
  orden: number;
  active: boolean;
}
