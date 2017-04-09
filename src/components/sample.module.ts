import { NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
export * from './sample.component';

@NgModule({
  declarations: [SampleComponent],
  exports: [SampleComponent]
})
export class SampleModule {}
