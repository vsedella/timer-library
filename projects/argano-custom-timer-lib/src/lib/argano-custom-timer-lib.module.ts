import { NgModule } from '@angular/core';
import { ArganoCustomTimerLibComponent } from './argano-custom-timer-lib.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArganoCustomTimerLibComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    ArganoCustomTimerLibComponent
  ]
})
export class ArganoCustomTimerLibModule { }
