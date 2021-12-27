import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from '@angular/material/icon';


const materialsDesign = [
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [materialsDesign],
  exports: [materialsDesign]
})
export class AngularMaterialsModule { }
