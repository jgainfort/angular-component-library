import { NgModule } from '@angular/core';

import { LibraryComponent } from './components/library.component';

@NgModule({
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule {
}
